import { Component } from '@angular/core';

import { PROJECTS } from './projects.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  readonly projects = PROJECTS;
}
