import { Route } from '@angular/router';

import { routes } from './app.routes';
import { LandingComponent } from './pages/landing/landing.component';

const find = (path: string): Route => routes.find(route => route.path === path) as Route;

describe('application routes', () => {
  it('keeps the landing page eager', () => {
    const landing = find('');

    expect(landing.component).toBe(LandingComponent);
    expect(landing.loadComponent).toBeUndefined();
  });

  it('lazy-loads the resume, about, and projects pages', () => {
    for (const path of ['resume', 'about', 'projects']) {
      const route = find(path);

      expect(route.loadComponent).toBeDefined();
      expect(route.component).toBeUndefined();
    }
  });

  it('ends with a lazy wildcard route for unknown URLs', async () => {
    const last = routes[routes.length - 1];

    expect(last.path).toBe('**');
    const loaded = await (last.loadComponent as () => Promise<unknown>)();
    expect(loaded).toBeDefined();
  });

  it('marks the wildcard route for the simple header', () => {
    expect(routes[routes.length - 1].data?.['simpleHeader']).toBeTrue();
  });

  it('gives every route a page title', () => {
    for (const route of routes) {
      expect(route.title).toBeTruthy();
    }
  });
});
