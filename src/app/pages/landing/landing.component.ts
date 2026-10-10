import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SITE } from '../../site.config';

interface BucketItem {
  readonly text: string;
  readonly done: boolean;
}

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  readonly site = SITE;

  readonly bucketList: readonly BucketItem[] = [
    { text: 'Travel to Asia', done: false },
    { text: 'Travel to Europe', done: false },
    { text: 'Travel to Scandinavia', done: false },
    { text: 'Travel to Patagonia', done: false },
    { text: 'Party with Snoop Dogg (yep, you read that right)', done: true },
    { text: 'Watch the dawn from a place most never visit', done: true },
    { text: 'Write a bestselling novel', done: false },
    { text: 'Have an otherworldly experience no one else believes', done: true }
  ];

  /** Finished goals first. Array.sort is stable, so each group keeps its written order. */
  readonly sortedBucketList: readonly BucketItem[] = [...this.bucketList]
    .sort((a, b) => Number(b.done) - Number(a.done));

  get doneCount(): number {
    return this.bucketList.filter(item => item.done).length;
  }

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
