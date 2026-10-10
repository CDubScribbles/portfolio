import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { LandingComponent } from './landing/landing.component';
import { NotFoundComponent } from './not-found/not-found.component';

/** The three doors into the /pugs page. */
describe('links to the pugs page', () => {
  const render = (component: unknown): HTMLElement => {
    TestBed.configureTestingModule({
      imports: [component as never],
      providers: [provideRouter([])]
    });
    const fixture = TestBed.createComponent(component as never) as { detectChanges(): void; nativeElement: HTMLElement };
    fixture.detectChanges();
    return fixture.nativeElement;
  };

  const pugLinks = (page: HTMLElement): HTMLAnchorElement[] =>
    Array.from(page.querySelectorAll<HTMLAnchorElement>('a[href="/pugs"]'));

  it('puts "Or Pugs?" in the landing page hero', () => {
    const links = pugLinks(render(LandingComponent));

    expect(links.length).toBe(1);
    expect(links[0].textContent?.trim()).toBe('Or Pugs?');
    expect(links[0].closest('.hero')).not.toBeNull();
  });

  it('puts "Maybe Pugs?" below "Back to home" on the 404 page', () => {
    const page = render(NotFoundComponent);
    const links = pugLinks(page);
    const home = page.querySelector('a[href="/"]') as HTMLElement;

    expect(links.length).toBe(1);
    expect(links[0].textContent?.trim()).toBe('Maybe Pugs?');
    expect(home.compareDocumentPosition(links[0]) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });

  it('puts the story button under the photo on the about page', () => {
    const page = render(AboutComponent);
    const links = pugLinks(page);

    expect(links.length).toBe(1);
    expect(links[0].textContent?.trim()).toBe('My story in Pug words or less.');
    const photo = page.querySelector('.photo') as HTMLElement;

    expect(photo.compareDocumentPosition(links[0]) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });
});
