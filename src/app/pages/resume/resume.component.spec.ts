import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeComponent } from './resume.component';
import { RESUME } from './resume.data';

describe('ResumeComponent', () => {
  let fixture: ComponentFixture<ResumeComponent>;
  let page: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ResumeComponent);
    fixture.detectChanges();
    page = fixture.nativeElement as HTMLElement;
  });

  it('renders a single top-level heading for the page', () => {
    const headings = page.querySelectorAll('h1');

    expect(headings.length).toBe(1);
    expect(headings[0].textContent).toContain('Resume');
  });

  it('offers the PDF as a download link', () => {
    const link = page.querySelector('a[download]');

    expect(link?.getAttribute('href')).toContain('Clifford_Smith_Resume.pdf');
    expect(link?.textContent).toContain('PDF');
  });

  it('renders one article for each job in the data', () => {
    expect(page.querySelectorAll('article.job').length).toBe(RESUME.jobs.length);
  });

  it('lists every bullet for the first job', () => {
    const firstJob = page.querySelector('article.job') as HTMLElement;

    expect(firstJob.querySelectorAll('.bullets li').length).toBe(RESUME.jobs[0].bullets.length);
  });

  it('renders each skill group and education entry', () => {
    expect(page.querySelectorAll('.side-col .tags').length).toBe(RESUME.skillGroups.length);
    expect(page.querySelectorAll('.edu').length).toBe(RESUME.education.length);
  });
});
