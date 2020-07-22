import { Component, OnInit } from '@angular/core';
import { Star } from '../Star';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})

export class TemplateFormComponent implements OnInit {

  MyStar: Star;

  constructor() { }

  ngOnInit() {

    this.MyStar = new Star("Sun", "1 A.U", "type G")

  }

}
