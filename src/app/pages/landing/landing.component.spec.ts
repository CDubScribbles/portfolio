import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { SITE } from '../../site.config';
import { LandingComponent } from './landing.component';

describe('LandingComponent', () => {
  let fixture: ComponentFixture<LandingComponent>;
  let page: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(LandingComponent);
    fixture.detectChanges();
    page = fixture.nativeElement as HTMLElement;
  });

  it('introduces the site owner in a single top-level heading', () => {
    const headings = page.querySelectorAll('h1');

    expect(headings.length).toBe(1);
    expect(headings[0].textContent).toContain(SITE.shortName);
  });

  it('links to every other page from the landing page', () => {
    const cards = page.querySelectorAll('.card a');

    expect(cards.length).toBe(fixture.componentInstance.explore.length);
  });

  it('shows a friendly message while the bucket list is empty', () => {
    expect(page.textContent).toContain('Coming soon');
    expect(page.querySelector('.bucket-list')).toBeNull();
  });

  it('hides the decorative sunset badge from assistive technology', () => {
    expect(page.querySelector('.badge')?.getAttribute('aria-hidden')).toBe('true');
  });
});
