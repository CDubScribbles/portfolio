import { Routes } from '@angular/router';

import { LandingComponent } from './pages/landing/landing.component';
import { SITE } from './site.config';

/**
 * Landing stays eager: it is the first thing every visitor sees.
 * Every other page loads on demand, and the wildcard goes last.
 */
export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    title: `${SITE.name} | ${SITE.role}`
  },
  {
    path: 'resume',
    title: `Resume | ${SITE.name}`,
    loadComponent: () =>
      import('./pages/resume/resume.component').then(m => m.ResumeComponent)
  },
  {
    path: 'about',
    title: `About | ${SITE.name}`,
    loadComponent: () =>
      import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'projects',
    title: `Projects | ${SITE.name}`,
    loadComponent: () =>
      import('./pages/projects/projects.component').then(m => m.ProjectsComponent)
  },
  {
    path: '**',
    title: `Page not found | ${SITE.name}`,
    data: { simpleHeader: true },
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent)
  }
];
