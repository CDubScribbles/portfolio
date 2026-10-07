export interface ProjectLink {
  readonly label: string;
  readonly url: string;
}

export interface Project {
  readonly name: string;
  readonly summary: string;
  readonly tech: readonly string[];
  readonly learned: string;
  readonly links: readonly ProjectLink[];
}

export const PROJECTS: readonly Project[] = [
  {
    name: 'Virtual Taco Stand',
    summary:
      'A multi-route ordering app for a fictional taco stand, built across the course: a template-driven order form, a reactive sign-in with a route guard, a FormArray feedback form, and an order summary split into a parent and child component.',
    tech: ['Angular', 'TypeScript', 'RxJS', 'Karma', 'Jasmine'],
    learned:
      'Tests are contracts. When an AI-assisted change broke six of them, tracing the failures taught me to ask what a green suite does not cover. My first fix passed all 30 tests and still deleted two identical tacos at once, because I had used the menu item’s ID instead of a unique ID for each order line.',
    links: [
      { label: 'View the code on GitHub', url: 'https://github.com/CDubScribbles/virtual-taco-stand' }
    ]
  },
  {
    name: 'RPG Character Builder',
    summary:
      'A character-creation app with routed class pages, a dice-roller service, a template-driven character form, a cookie-backed sign-in whose route guard remembers where you were headed, and a profile form whose skill checkboxes are generated from typed data.',
    tech: ['Angular', 'TypeScript', 'Reactive Forms', 'FormArray', 'Vitest'],
    learned:
      'Validation is not authentication, and a client-side guard improves the experience but cannot replace server-side checks. I also learned to verify my own assumptions: a step attribute on a number input looks like validation, but Angular never enforces it, so I wrote the whole-number check myself.',
    links: [
      { label: 'View the code on GitHub', url: 'https://github.com/CDubScribbles/rpg-character-builder' }
    ]
  },
  {
    name: 'This portfolio',
    summary:
      'The site you are on. Standalone Angular components, lazy-loaded pages, a design system with measured contrast ratios, and a pipeline that runs the tests, builds the site, and publishes it on every push.',
    tech: ['Angular', 'TypeScript', 'CSS custom properties', 'GitHub Actions', 'GitHub Pages'],
    learned:
      'Hosting changes things. A plain in-page skip link resolves against the base path and would reload the home page, so it is handled in code. Deploying the empty starter first proved the pipeline and base path on day one, before there was anything to lose.',
    links: [
      { label: 'View the code on GitHub', url: 'https://github.com/CDubScribbles/portfolio' }
    ]
  }
];
