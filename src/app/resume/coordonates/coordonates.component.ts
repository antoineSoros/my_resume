import {Component, Input, OnInit} from '@angular/core';
import {CoordonatesModel} from '../shared/models/coordonates.model';

@Component({
  selector: 'app-coordonates',
  templateUrl: './coordonates.component.html',
  styleUrls: ['./coordonates.component.css']
})
export class CoordonatesComponent implements OnInit {
@Input() coordonates: CoordonatesModel;
  constructor() {
    this.coordonates = new CoordonatesModel();
    this.coordonates.address = '19 rue louis Braille \n 69100 Villeurbanne';
    this.coordonates.phoneNumber = '06.31.44.28.91';
    this.coordonates.mail = 'antoine.soros@orange.fr';
  }

  ngOnInit() {
  }

}
