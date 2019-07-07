import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.page.html',
  styleUrls: ['./education.page.scss'],
})
export class EducationPage implements OnInit {
  education = new FormGroup({
    level: new FormControl(''),
    school: new FormControl(''),
    graduation: new FormControl('')
  });
  constructor() { }

  ngOnInit() {
      }

}
