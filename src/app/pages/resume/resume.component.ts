import { Component } from '@angular/core';

import { RESUME } from './resume.data';

@Component({
  selector: 'app-resume',
  standalone: true,
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  readonly resume = RESUME;
}
