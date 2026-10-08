import { DOCUMENT } from '@angular/core';
import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from '@angular/router';
import { filter, skip } from 'rxjs';

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
  readonly currentYear = new Date().getFullYear();
  readonly phoneDigits = SITE.phone.replace(/\D/g, '');

  readonly navItems = [
    { path: '/resume', label: 'Resume' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' }
  ] as const;

  constructor() {
    // After each navigation (not the first page load), move focus to the new
    // page so keyboard and screen-reader users land in the content, not the header.
    inject(Router).events
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
