import { Component, OnInit } from '@angular/core';
import {ProjectModel} from '../shared/models/project.model';
import {PROJECTS} from '../shared/mocks/mock-projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
public projects: ProjectModel[];
  constructor() { }

  ngOnInit() {
    this.projects = PROJECTS;
  }

}
