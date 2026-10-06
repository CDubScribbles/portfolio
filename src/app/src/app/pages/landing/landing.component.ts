import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SITE } from '../../site.config';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  readonly site = SITE;

  /** Filled in during the content pass. An empty list shows a friendly placeholder. */
  readonly bucketList: readonly string[] = [];

  readonly explore = [
    {
      path: '/resume',
      label: 'Resume',
      blurb: 'Experience, skills, and a downloadable PDF.'
    },
    {
      path: '/about',
      label: 'About',
      blurb: 'The path from the stage to the stack.'
    },
    {
      path: '/projects',
      label: 'Projects',
      blurb: 'What I built, what broke, and what I learned fixing it.'
    }
  ] as const;
}
