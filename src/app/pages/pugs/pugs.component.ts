import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PUG_CHAPTERS, PugChapter } from './pugs.data';

@Component({
  selector: 'app-pugs',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pugs.component.html',
  styleUrl: './pugs.component.css'
})
export class PugsComponent {
  readonly mascotName = 'Brosephius Blopinder McPuggleson';
  readonly chapters = PUG_CHAPTERS;

  /** Where each image will actually be displayed, so the browser downloads the right size. */
  sizes(chapter: PugChapter): string {
    switch (chapter.shape) {
      case 'wide': return '(min-width: 56rem) 34rem, 100vw';
      case 'tall': return '(min-width: 56rem) 20rem, 100vw';
      default: return '(min-width: 56rem) 28rem, 100vw';
    }
  }

  srcset(chapter: PugChapter): string {
    return chapter.widths.map(w => `images/${chapter.image}-${w}.webp ${w}w`).join(', ');
  }

  src(chapter: PugChapter): string {
    return `images/${chapter.image}-${chapter.widths[1]}.webp`;
  }
}
