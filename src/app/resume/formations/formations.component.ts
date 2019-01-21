import { Component, OnInit } from '@angular/core';
import {FormationModel} from '../shared/models/formation.model';
import {FORMATIONS} from '../shared/mocks/mock-formations';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {
  public formations: FormationModel[];
  constructor() { }

  ngOnInit() {
    this.formations = FORMATIONS;
  }

}
