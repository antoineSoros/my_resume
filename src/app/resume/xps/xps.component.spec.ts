import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XpsComponent } from './xps.component';

describe('XpsComponent', () => {
  let component: XpsComponent;
  let fixture: ComponentFixture<XpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
