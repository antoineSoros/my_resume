import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialSkillComponent } from './social-skill.component';

describe('SocialSkillComponent', () => {
  let component: SocialSkillComponent;
  let fixture: ComponentFixture<SocialSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
