import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import { NameComponent } from './name/name.component';
import { SentenceComponent } from './sentence/sentence.component';
import { PictureComponent } from './picture/picture.component';
import { CoordonatesComponent } from './coordonates/coordonates.component';
import { SkillComponent } from './skill/skill.component';
import { SkillsComponent } from './skills/skills.component';
import { BirthdateComponent } from './birthdate/birthdate.component';
import { ProfessionComponent } from './profession/profession.component';
import { FormationComponent } from './formation/formation.component';
import { FormationsComponent } from './formations/formations.component';
import { SocialSkillsComponent } from './social-skills/social-skills.component';
import { HobbyComponent } from './hobby/hobby.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { SocialSkillComponent } from './social-skill/social-skill.component';
import {SharedModule} from '../shared/shared.module';
import { XpComponent } from './xp/xp.component';
import { XpsComponent } from './xps/xps.component';
import { LinkComponent } from './link/link.component';
import { LinksComponent } from './links/links.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [ResumeComponent,
    NameComponent,
    SentenceComponent,
    PictureComponent,
    CoordonatesComponent,
    SkillComponent,
    SkillsComponent,
    BirthdateComponent,
    ProfessionComponent,
    FormationComponent,
    FormationsComponent,
    SocialSkillsComponent,
    HobbyComponent,
    HobbiesComponent,
    SocialSkillComponent,
    XpComponent,
    XpsComponent,
    LinkComponent,
    LinksComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
  ResumeComponent,

  ]
})
export class ResumeModule { }
