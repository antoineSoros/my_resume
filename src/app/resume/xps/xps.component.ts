import { Component, OnInit } from '@angular/core';
import {XpModel} from '../shared/models/xp.model';
import {EXPRERIENCES} from '../shared/mocks/mock-xps';

@Component({
  selector: 'app-xps',
  templateUrl: './xps.component.html',
  styleUrls: ['./xps.component.css']
})
export class XpsComponent implements OnInit {
private xps: XpModel[];
  constructor() { }

  ngOnInit() {
    this.xps = EXPRERIENCES;
  }

}
