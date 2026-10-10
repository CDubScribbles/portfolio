/** One step of the story, told by Brosephius. Captions are in Cliff's voice; edit freely. */
export interface PugChapter {
  readonly id: string;
  /** File name stem in public/images: "pug-west" means pug-west-540.webp and pug-west-1080.webp. */
  readonly image: string;
  /** Pixel widths of the files that exist, smallest first. */
  readonly widths: readonly [number, number];
  /** Width and height of the largest file, so the browser can reserve the space. */
  readonly width: number;
  readonly height: number;
  readonly shape: 'square' | 'wide' | 'tall';
  readonly alt: string;
  readonly caption: string;
}

export const PUG_CHAPTERS: readonly PugChapter[] = [
  {
    id: 'theatre',
    image: 'pug-theatre',
    widths: [472, 944],
    width: 944,
    height: 1680,
    shape: 'tall',
    alt: 'A pug in a velvet Elizabethan costume with a ruff collar and feathered cap strikes a dramatic pose on a candlelit stage, holding a rolled scroll.',
    caption: 'It started in Georgia, with a kid who was hopelessly in love with the theatre.'
  },
  {
    id: 'west',
    image: 'pug-west',
    widths: [540, 1080],
    width: 1080,
    height: 1080,
    shape: 'square',
    alt: 'Seen from behind, a pug in a red bandana drives an old pickup down a empty desert highway toward mountains at sunset, past a sign with a California bear.',
    caption: 'Then I pointed the truck west, to California and an MFA in Acting at USC.'
  },
  {
    id: 'bartender',
    image: 'pug-bartender',
    widths: [472, 944],
    width: 944,
    height: 1680,
    shape: 'tall',
    alt: 'In a black-and-white photo, a pug in a vest and bow tie pours a drink from a metal shaker into a cut-crystal mixing glass at an elegant bar, with chefs working behind him.',
    caption: 'Somewhere along the way, I fell for craft bartending and elevated dining.'
  },
  {
    id: 'beach',
    image: 'pug-beach',
    widths: [640, 1280],
    width: 1280,
    height: 719,
    shape: 'wide',
    alt: 'A smiling pug in tortoiseshell sunglasses lies on a sunny Southern California beach, with palm trees and the ocean behind him.',
    caption: 'Spent over a decade in Los Angeles hospitality, and I had a wonderful time.'
  },
  {
    id: 'helicopter',
    image: 'pug-helicopter',
    widths: [540, 1080],
    width: 1080,
    height: 1080,
    shape: 'square',
    alt: 'A pug in a flight harness and headset looks out a helicopter window at downtown Los Angeles glittering at night, with the Hollywood sign on the hill.',
    caption: 'Los Angeles by night: loud, glittering, and I loved every minute. And yes, I did ride in a helicopter. At night. There may have been a pug.'
  },
  {
    id: 'east',
    image: 'pug-east',
    widths: [540, 1080],
    width: 1080,
    height: 1080,
    shape: 'square',
    alt: 'Seen from behind, the same bandana-wearing pug drives down an autumn interstate past a green sign reading East, Interstate 20, Georgia.',
    caption: 'Then I pointed the truck east and took the road home to Georgia, chasing digital dreams.'
  },
  {
    id: 'whiteboard',
    image: 'pug-whiteboard',
    widths: [540, 1080],
    width: 1080,
    height: 1080,
    shape: 'square',
    alt: 'A pug in a vest and bow tie sits at a table covered by a whiteboard of flowcharts and sticky notes, with a team meeting behind him.',
    caption: 'Now I run projects: roadmaps, stakeholders, sticky notes, the works.'
  },
  {
    id: 'cabin',
    image: 'pug-cabin',
    widths: [540, 1080],
    width: 1080,
    height: 1080,
    shape: 'square',
    alt: 'A pug curls up on a chunky knit blanket in a log cabin beside a crackling stone fireplace and a mug, with snowy mountains outside the window.',
    caption: 'And when the work is done, I relax. In Georgia.'
  }
];
