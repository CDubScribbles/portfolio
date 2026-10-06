import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeComponent } from './resume.component';

describe('ResumeComponent', () => {
  let fixture: ComponentFixture<ResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ResumeComponent);
    fixture.detectChanges();
  });

  it('renders a single top-level heading for the page', () => {
    const headings = (fixture.nativeElement as HTMLElement).querySelectorAll('h1');

    expect(headings.length).toBe(1);
    expect(headings[0].textContent).toContain('Resume');
  });
});
