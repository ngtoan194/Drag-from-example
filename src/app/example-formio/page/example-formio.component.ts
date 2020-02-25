import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-example-formio',
  templateUrl: './example-formio.component.html',
  styleUrls: ['./example-formio.component.scss']
})
export class ExampleFormioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('json', { static: false }) jsonElement?: ElementRef;
  public form: Object = {
    components: []
  };

  onChange(event) {
    this.jsonElement.nativeElement.innerHTML = '';
    this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));
  }

}
