import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.scss'],
})
export class EmploymentComponent implements OnInit {
  employment = new FormGroup({
      employer: new FormControl(''),
      position: new FormControl(''),
    description: new FormControl(''),
      beginning: new FormControl(''),
      end: new FormControl('')
    });

  constructor() { }

  ngOnInit() {}

}
