import {Component, Input, OnInit} from '@angular/core';
import {ProfessionModel} from '../shared/models/profession.model';

@Component({
  selector: 'app-profession',
  templateUrl: './profession.component.html',
  styleUrls: ['./profession.component.css']
})
export class ProfessionComponent implements OnInit {
@Input() profession: ProfessionModel;
  constructor() {
    this.profession = new ProfessionModel();
    this.profession.profession = 'Développeur Junior';
  }

  ngOnInit() {
  }

}
