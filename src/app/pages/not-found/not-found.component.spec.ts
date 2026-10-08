import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
  let fixture: ComponentFixture<NotFoundComponent>;
  let page: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFoundComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(NotFoundComponent);
    fixture.detectChanges();
    page = fixture.nativeElement as HTMLElement;
  });

  it('tells the visitor the page was not found', () => {
    expect(page.querySelector('h1')?.textContent).toContain('Signal lost');
  });

  it('keeps the on-brand message', () => {
    expect(page.textContent).toContain("That page doesn't exist, or it flatlined on the way here.");
  });

  it('shows the detective image with descriptive alt text and its AI disclosure', () => {
    const image = page.querySelector('.lost-photo img');

    expect(image?.getAttribute('alt')?.length).toBeGreaterThan(40);
    expect(page.querySelector('figcaption')?.textContent).toContain('Canva AI');
  });

  it('offers a way back home', () => {
    const link = page.querySelector('a');

    expect(link?.textContent).toContain('Back to home');
  });
});
