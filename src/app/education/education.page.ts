import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.page.html',
  styleUrls: ['./education.page.scss'],
})
export class EducationPage implements OnInit {
  level: string;
  school: string;
  graduation: string;

  constructor() { }

  ngOnInit() {
      }

}
