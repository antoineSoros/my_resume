import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordonatesComponent } from './coordonates.component';

describe('CoordonatesComponent', () => {
  let component: CoordonatesComponent;
  let fixture: ComponentFixture<CoordonatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordonatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordonatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
