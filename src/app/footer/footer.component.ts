import { Component, OnInit } from '@angular/core';
import {pages} from '../navbar/navbar.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  pages=pages;

  constructor() { }

  ngOnInit() {
  }

}
