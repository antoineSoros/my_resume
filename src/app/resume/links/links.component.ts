import { Component, OnInit } from '@angular/core';
import {LinkModel} from '../shared/models/link.model';
import {LINKS} from '../shared/mocks/mock-links';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
 public links: LinkModel[];
  constructor() { }

  ngOnInit() {
    this.links = LINKS;
  }

}
