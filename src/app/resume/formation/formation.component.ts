import {Component, Input, OnInit} from '@angular/core';
import {FormationModel} from '../shared/models/formation.model';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
@Input() formation: FormationModel;
  constructor() {
    this.formation = new FormationModel();
  }

  ngOnInit() {
  }

}
