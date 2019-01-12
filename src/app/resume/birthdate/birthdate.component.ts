import {Component, Input, OnInit} from '@angular/core';
import {BirthdateModel} from '../shared/models/birthdate.model';

@Component({
  selector: 'app-birthdate',
  templateUrl: './birthdate.component.html',
  styleUrls: ['./birthdate.component.css']
})
export class BirthdateComponent implements OnInit {
@Input() birthDate: BirthdateModel;
  constructor() {
    this.birthDate = new BirthdateModel();
    this.birthDate.day = '26';
    this.birthDate.month = '05';
    this.birthDate.year = '1983';
  }

  ngOnInit() {
  }

}
