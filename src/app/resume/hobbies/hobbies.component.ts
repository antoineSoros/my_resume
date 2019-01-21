import { Component, OnInit } from '@angular/core';
import {HobbyModel} from '../shared/models/hobby.model';
import {HOBBIES} from '../shared/mocks/mock-hobbies';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {
public hobbies: HobbyModel[];
  constructor() {
  this.hobbies = HOBBIES;
  }

  ngOnInit() {
  }

}
