import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.page.html',
  styleUrls: ['./employment.page.scss'],
})
export class EmploymentPage implements OnInit {
  employer: string;
  position: string;
  description: string;
  beginning: string;
  end: string;

  constructor() { }

  ngOnInit() {
  }

}
