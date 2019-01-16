import { Component, OnInit } from '@angular/core';
import {SkillModel} from '../shared/models/skill.model';
import {SKILLS} from '../shared/mocks/mock-skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
private skills: SkillModel[];
  constructor() { }

  ngOnInit() {
    this.skills = SKILLS;
  }

}
