import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.page.html',
  styleUrls: ['./employment.page.scss'],
})
export class EmploymentPage implements OnInit {
  employment = new FormGroup({
    employer: new FormControl(''),
    position: new FormControl(''),
    description: new FormControl(''),
    beginning: new FormControl(''),
    end: new FormControl('')
  });
  constructor() { }

  ngOnInit() {
  }

}
