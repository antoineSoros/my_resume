import {Component, Input, OnInit} from '@angular/core';
import {SentenceModel} from '../shared/models/sentence.model';

@Component({
  selector: 'app-sentence',
  templateUrl: './sentence.component.html',
  styleUrls: ['./sentence.component.css']
})
export class SentenceComponent implements OnInit {
@Input() sentence: SentenceModel;
  constructor() {
    this.sentence = new SentenceModel();
    this.sentence.sentence = 'Après avoir goûté à la programmation dans le spectacle,\n' +
      'je suis en reconversion dans le développement informatique.';
  }

  ngOnInit() {
  }

}
