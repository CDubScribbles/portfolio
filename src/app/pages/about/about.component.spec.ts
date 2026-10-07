import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let fixture: ComponentFixture<AboutComponent>;
  let page: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
    page = fixture.nativeElement as HTMLElement;
  });

  it('renders a single top-level heading for the page', () => {
    const headings = page.querySelectorAll('h1');

    expect(headings.length).toBe(1);
    expect(headings[0].textContent).toContain('About');
  });

  it('gives the photo descriptive alt text and reserved dimensions', () => {
    const image = page.querySelector('.photo img');

    expect(image?.getAttribute('alt')?.length).toBeGreaterThan(20);
    expect(image?.getAttribute('width')).toBeTruthy();
    expect(image?.getAttribute('height')).toBeTruthy();
  });

  it('names the mascot and discloses how the image was made', () => {
    const caption = page.querySelector('figcaption');

    expect(caption?.textContent).toContain(fixture.componentInstance.mascotName);
    expect(caption?.textContent).toContain('Canva AI');
  });
});
