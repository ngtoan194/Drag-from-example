import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-control-directive',
  templateUrl: './control-directive.component.html',
  styleUrls: ['./control-directive.component.scss']
})
export class ControlDirectiveComponent implements OnInit {

  @Input('col') col: any;
  
  constructor() {
  }

  ngOnInit() {
  }

}
