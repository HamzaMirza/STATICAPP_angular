import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css']
})
export class SlidebarComponent implements OnInit {
  isControlOpaque:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  displayControls()
  {
    this.isControlOpaque=true;
  }
  hideControls()
  {
    this.isControlOpaque=false;
  }
}
