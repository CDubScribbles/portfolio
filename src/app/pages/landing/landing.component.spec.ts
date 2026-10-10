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

  it('lists every bucket list item', () => {
    const items = page.querySelectorAll('.bucket-list li');

    expect(items.length).toBe(fixture.componentInstance.bucketList.length);
  });

  it('reports bucket list progress', () => {
    const { doneCount, bucketList } = fixture.componentInstance;

    expect(page.textContent).toContain(`${doneCount} of ${bucketList.length} done`);
  });

  it('states each bucket list status in text, not just color or shape', () => {
    const items = Array.from(page.querySelectorAll('.bucket-list li'));

    for (const item of items) {
      expect(item.textContent).toMatch(/Done:|To do:/);
    }
  });

  it('shows finished bucket list items before unfinished ones', () => {
    const items = Array.from(page.querySelectorAll('.bucket-list li'));
    const flags = items.map(item => item.classList.contains('done'));
    const firstOpen = flags.indexOf(false);

    expect(flags.length).toBeGreaterThan(0);
    expect(flags.slice(firstOpen).includes(true)).toBeFalse();
  });

  it('invites contact with an email link in the availability section', () => {
    const link = page.querySelector('.availability a[href^="mailto:"]');

    expect(link?.getAttribute('href')).toBe(`mailto:${SITE.email}`);
    expect(page.querySelector('#availability-heading')).not.toBeNull();
  });

  it('gives the hero image descriptive alt text', () => {
    const image = page.querySelector('.badge img');

    expect(image?.getAttribute('alt')?.length).toBeGreaterThan(10);
  });
});
