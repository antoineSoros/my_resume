import {Component, Input, OnInit, Output} from '@angular/core';
import {NameModel} from '../shared/models/name.model';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
@Input() name: NameModel;
  constructor() {
   this.name = new NameModel();
    this.name.firstName = 'ANTOINE';
    this.name.lastName = 'SOROS';

  }

  ngOnInit() {
  }

}

