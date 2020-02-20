import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  collapedSideBar: boolean;

  constructor() { }

  ngOnInit() { }

  receiveCollapsed($event) {
    this.collapedSideBar = $event;
  }
}
