import { Component, OnInit } from '@angular/core';
import {SOCIAL_SKILLS} from '../shared/mocks/mock-social-skills';
import {SocialSkillModel} from '../shared/models/socialSkill.model';
@Component({
  selector: 'app-social-skills',
  templateUrl: './social-skills.component.html',
  styleUrls: ['./social-skills.component.css']
})
export class SocialSkillsComponent implements OnInit {
private socialSkills: SocialSkillModel[];
  constructor() { }

  ngOnInit() {
  this.socialSkills = SOCIAL_SKILLS;
  }

}
