import {Component, Input, OnInit} from '@angular/core';
import {PictureModel} from '../shared/models/picture.model';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {
@Input() picture: PictureModel;
  constructor() {
    this.picture = new PictureModel();
    this.picture.uri = 'assets/id_pic.jpg';
  }

  ngOnInit() {
  }

}
