import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  form: FormGroup;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      fname: new FormControl(null, {
        updateOn: 'blur', validators: [Validators.required]
      }),
      lname: new FormControl(null, {
        updateOn: 'blur', validators: [Validators.required]
      }),
      address: new FormControl(null, {
        updateOn: 'blur', validators: [Validators.required]
      }),
      email: new FormControl(null, {
        updateOn: 'blur', validators: [Validators.required]
      }),
      phone: new FormControl(null, {
        updateOn: 'blur', validators: [Validators.required]
      }),
      website: new FormControl(null, {
        updateOn: 'blur', validators: [Validators.required]
      }),
      social: new FormControl(null, {
        updateOn: 'blur', validators: [Validators.required]
      }),
    });
  }

  submitContact() {

  }


}
