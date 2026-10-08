import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app.component';
import { SITE } from './site.config';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let page: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    page = fixture.nativeElement as HTMLElement;
  });

  it('creates the application shell', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('offers a skip link that targets the main landmark', () => {
    const skipLink = page.querySelector('.skip-link');

    expect(skipLink?.getAttribute('href')).toBe('#main-content');
    expect(page.querySelector('main#main-content')).not.toBeNull();
  });

  it('moves focus to the main landmark when the skip link is used', () => {
    const skipLink = page.querySelector('.skip-link') as HTMLAnchorElement;

    skipLink.click();

    expect(document.activeElement?.id).toBe('main-content');
  });

  it('renders a primary navigation link for each page', () => {
    const links = page.querySelectorAll('nav[aria-label="Primary"] a');

    expect(links.length).toBe(fixture.componentInstance.navItems.length);
  });

  it('offers email, phone, and GitHub contact links in the footer', () => {
    const hrefs = Array.from(page.querySelectorAll('footer .footer-links a')).map(a =>
      a.getAttribute('href')
    );

    expect(hrefs).toContain(`mailto:${SITE.email}`);
    expect(hrefs).toContain('tel:+12134222037');
    expect(hrefs).toContain(SITE.github);
  });

  it('shows the site name in the header and footer', () => {
    expect(page.querySelector('.brand')?.textContent).toContain(SITE.name);
    expect(page.querySelector('footer')?.textContent).toContain(SITE.name);
  });
});
