export interface SkillGroup {
  readonly label: string;
  readonly items: readonly string[];
}

export interface Job {
  readonly title: string;
  readonly organization?: string;
  readonly location: string;
  readonly dates: string;
  readonly detail?: string;
  readonly bullets: readonly string[];
}

export interface Education {
  readonly school: string;
  readonly credential: string;
  readonly years: string;
  readonly note?: string;
}

export interface Learning {
  readonly topic: string;
  readonly detail: string;
}

export interface ResumeData {
  readonly profile: string;
  readonly jobs: readonly Job[];
  readonly skillGroups: readonly SkillGroup[];
  readonly education: readonly Education[];
  readonly learnings: readonly Learning[];
}

/** Mirrors Clifford_Smith_Resume.pdf. Edit here, and keep the PDF in sync. */
export const RESUME: ResumeData = {
  profile:
    'A professional whose path — from Michelin-starred hospitality to eCommerce to marketing technology — has produced a rare combination of behavioral depth, technical acumen, and communication fluency. A lifelong, self-directed student of human psychology and behavioral research, with a track record of anticipating needs, navigating complexity, and building lasting trust across diverse teams and clients. Thrives where genuine human insight and technical problem-solving intersect, and brings a lifelong growth mindset to every environment — personally, intellectually, and technically.',

  jobs: [
    {
      title: 'eCommerce Specialist',
      organization: 'Herschend Entertainment',
      location: 'Peachtree Corners, GA',
      dates: 'September 2023 – Present',
      bullets: [
        'Independently designed and built a VBA/Excel automation that reduced daily workflow triage from 60+ minutes to under one minute, streamlining operations across 3-4 teams and ~20 stakeholders.',
        'Delivered daily cross-team progress visibility that enabled marketing and web content teams to accurately forecast and schedule page builds, reducing downstream coordination friction.',
        'Partnered with cross-functional stakeholders to drive utilization of custom eCommerce features, executing campaigns reaching 6M+ users and increasing conversions by over 2%.',
        'Uncovered new use cases for sales flows and promotions on bespoke HTML/API platform, expanding revenue across eight major properties (including Silver Dollar City and Dollywood).',
        'Enhanced team productivity workflows with technical optimizations (HTML, VBA, Python) to deliver measurable end-user value.',
        'Built authentic relationships across diverse teams, aligning on goals and resolving challenges with diplomacy in high-pressure settings.',
        'Excelled in relating highly technical concepts to non-technical partners (C-Suite, Directors, Managers, All Client Ranges).',
        'Contributing to UX redesign initiative, identifying platform pain points and advocating for end-user experience improvements.',
        'Participated in Agile SDLC sprint cycles using Azure DevOps, contributing to backlog management and bug tracking in a two-week sprint cadence.'
      ]
    },
    {
      title: 'Director of Sales',
      organization: 'Marc Szabo Studios, Inc.',
      location: 'Los Angeles, CA',
      dates: 'March 2023 – September 2023',
      bullets: [
        'Cultivated trust-based client relationships, delivering tailored solutions that drove strategy adoption and expanded engagement.',
        'Pioneered AI automations and optimizations (Google Ads, YouTube, email), maximizing ROI and long-term value.',
        'Introduced GPT-based workflows to the team, enabling leadership to leverage AI for strategic planning and market research.'
      ]
    },
    {
      title: 'Upscale Hospitality Professional',
      location: 'Los Angeles, CA',
      dates: '2013 – 2023',
      detail:
        'Venues include: Four Seasons, Casa del Mar, Innovative Dining Group, SBE Nightlife, and Chef Josiah Citrin’s Michelin-starred restaurants.',
      bullets: [
        'Delivered white-glove service to high-net-worth clientele — including private events for celebrities, executives, and billionaires — consistently exceeding expectations in zero-margin-for-error environments.',
        'Developed advanced behavioral literacy in client-facing settings, reading tone, body language, and temperament in real time to anticipate needs and de-escalate tension before it surfaced.',
        'Applied strategic expectation management across every client interaction, setting clear tones early and maintaining them through resolution — a discipline now central to my professional approach.',
        'Assessed team strengths and weaknesses in dynamic, high-pressure settings, deploying talent strategically to maximize performance and guest satisfaction.',
        'Co-managed bar program at a Beverly Hills Italian restaurant, maintaining rigorous quality and consistency standards across a full-service operation.'
      ]
    },
    {
      title: 'Marketing Manager',
      organization: 'Elliott Wave International',
      location: 'Gainesville, GA',
      dates: '2011 – 2013',
      bullets: [
        'Supported digital marketing initiatives including email campaign strategy and execution for a financial publishing firm.',
        'Contributed writing and copy editing to The Socionomist, an in-house financial publication.',
        'Authored a chapter on Depression-era Hollywood for Pioneering Studies in Socionomics by Robert R. Prechter, published by the Socionomics Institute.'
      ]
    }
  ],

  skillGroups: [
    {
      label: 'Technical skills',
      items: ['HTML', 'CSS', 'JavaScript', 'SQL', 'Python', 'VBA']
    },
    {
      label: 'Tools and platforms',
      items: [
        'Azure DevOps', 'Google Analytics', 'Looker', 'HubSpot', 'Smartsheet', 'Wrike',
        'Google Ads', 'YouTube Ads', 'Facebook Ads', 'Slack', 'Microsoft Teams'
      ]
    },
    {
      label: 'Core competencies',
      items: [
        'Customer & Stakeholder Management', 'Relationship Building & Trust',
        'Platform Adoption & Value Realization', 'Expansion Opportunity Identification',
        'Cross-Functional Project Leadership', 'Diplomatic Communication & Team Coordination',
        'API Integration & Custom Systems', 'Email Campaign Strategy & Automation',
        'UX Research & Design'
      ]
    }
  ],

  education: [
    {
      school: 'Bellevue University',
      credential: 'B.S. in Web Development',
      years: '2026 (expected)',
      note: 'Actively applying coursework in JavaScript and Node.js to real-world projects, including a current UX redesign initiative at Herschend Entertainment.'
    },
    {
      school: 'University of Southern California',
      credential: 'MFA in Acting, School of Dramatic Arts',
      years: '2007–2010'
    },
    {
      school: 'Brenau University',
      credential: 'Bachelor of Arts',
      years: '2000–2004'
    }
  ],

  /** Course and project learnings. Not on the PDF; edit freely. */
  learnings: [
    {
      topic: 'Angular and TypeScript',
      detail: 'Standalone components, routing with guards, template-driven and reactive forms, RxJS.'
    },
    {
      topic: 'Testing with Karma and Jasmine',
      detail: 'Writing tests as contracts, and asking what a passing suite does not cover.'
    },
    {
      topic: 'Accessibility (WCAG 2.1 AA)',
      detail: 'Measured color contrast, keyboard navigation, semantic structure, and reduced-motion support.'
    },
    {
      topic: 'Deployment with GitHub Actions',
      detail: 'A pipeline that tests, builds, and publishes to GitHub Pages on every push.'
    }
  ]
};
