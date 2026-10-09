import { DOCUMENT } from '@angular/core';
import { Component, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from '@angular/router';
import { filter, skip } from 'rxjs';

import { BACKDROPS, BACKDROP_WIDTHS, BackdropKey } from './backdrops';
import { SITE } from './site.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private readonly document = inject(DOCUMENT);

  readonly site = SITE;
  /** True on pages whose route sets `data: { simpleHeader: true }` (the 404). */
  readonly simpleHeader = signal(false);
  /** Which page's backdrop to show. Set by each route's `data: { backdrop }`. */
  readonly backdropKey = signal<BackdropKey>('landing');
  readonly backdrop = computed(() => {
    const stem = BACKDROPS[this.backdropKey()];
    const widest = BACKDROP_WIDTHS[BACKDROP_WIDTHS.length - 1];
    return {
      src: `images/${stem}-${widest}.webp`,
      srcset: BACKDROP_WIDTHS.map(w => `images/${stem}-${w}.webp ${w}w`).join(', ')
    };
  });
  readonly currentYear = new Date().getFullYear();
  readonly phoneDigits = SITE.phone.replace(/\D/g, '');

  readonly navItems = [
    { path: '/resume', label: 'Resume' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' }
  ] as const;

  constructor() {
    const router = inject(Router);

    router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed()
      )
      .subscribe(() => {
        let route = router.routerState.snapshot.root;
        while (route.firstChild) {
          route = route.firstChild;
        }
        this.simpleHeader.set(route.data['simpleHeader'] === true);
        const key = route.data['backdrop'] as BackdropKey | undefined;
        this.backdropKey.set(key && key in BACKDROPS ? key : 'landing');
      });

    // After each navigation (not the first page load), move focus to the new
    // page so keyboard and screen-reader users land in the content, not the header.
    router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        skip(1),
        takeUntilDestroyed()
      )
      .subscribe(() => this.focusMain());
  }

  /**
   * A plain "#main-content" link would resolve against <base href="/portfolio/">
   * and reload the home page. Handle the skip link ourselves instead.
   */
  skipToMain(event: Event): void {
    event.preventDefault();
    this.focusMain();
  }

  private focusMain(): void {
    this.document.getElementById('main-content')?.focus();
  }
}
