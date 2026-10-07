import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';
import { PROJECTS } from './projects.data';

describe('ProjectsComponent', () => {
  let fixture: ComponentFixture<ProjectsComponent>;
  let page: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    fixture.detectChanges();
    page = fixture.nativeElement as HTMLElement;
  });

  it('renders a single top-level heading for the page', () => {
    const headings = page.querySelectorAll('h1');

    expect(headings.length).toBe(1);
    expect(headings[0].textContent).toContain('Projects');
  });

  it('renders one card for each project in the data', () => {
    expect(page.querySelectorAll('article.project').length).toBe(PROJECTS.length);
  });

  it('gives every project a technology list and a lesson learned', () => {
    for (const card of Array.from(page.querySelectorAll('article.project'))) {
      expect(card.querySelectorAll('.tags li').length).toBeGreaterThan(0);
      expect(card.textContent).toContain('What I learned');
    }
  });

  it('links every project to a secure URL with a unique accessible name', () => {
    const links = Array.from(page.querySelectorAll('article.project a'));

    expect(links.length).toBe(PROJECTS.length);
    for (const link of links) {
      expect(link.getAttribute('href')).toMatch(/^https:\/\//);
    }
    const names = links.map(link => link.textContent?.replace(/\s+/g, ' ').trim());
    expect(new Set(names).size).toBe(names.length);
  });
});
