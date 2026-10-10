import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { PugsComponent } from './pugs.component';
import { PUG_CHAPTERS } from './pugs.data';

describe('PugsComponent', () => {
  let fixture: ComponentFixture<PugsComponent>;
  let page: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PugsComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(PugsComponent);
    fixture.detectChanges();
    page = fixture.nativeElement as HTMLElement;
  });

  it('has one top-level heading and credits the mascot who tells the story', () => {
    expect(page.querySelectorAll('h1').length).toBe(1);
    expect(page.textContent).toContain(fixture.componentInstance.mascotName);
  });

  it('renders one chapter for each entry in the story data, in order', () => {
    const captions = Array.from(page.querySelectorAll('.chapter .text')).map(el => el.textContent?.trim());

    expect(captions).toEqual(PUG_CHAPTERS.map(chapter => chapter.caption));
  });

  it('gives every picture real alt text, both sizes, and reserved dimensions', () => {
    for (const img of Array.from(page.querySelectorAll('.chapter img'))) {
      expect(img.getAttribute('alt')?.length).toBeGreaterThan(40);
      expect(img.getAttribute('srcset')?.split(',').length).toBe(2);
      expect(img.getAttribute('width')).toBeTruthy();
      expect(img.getAttribute('height')).toBeTruthy();
    }
  });

  it('keeps the story as a numbered list with decorative numbers hidden from screen readers', () => {
    expect(page.querySelector('ol.story')).not.toBeNull();
    for (const number of Array.from(page.querySelectorAll('.number'))) {
      expect(number.getAttribute('aria-hidden')).toBe('true');
    }
  });

  it('offers a way back to the serious version of the story', () => {
    const link = page.querySelector('.outro a');

    expect(link?.getAttribute('href')).toBe('/resume');
  });
});
