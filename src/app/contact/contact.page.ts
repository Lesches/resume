import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {count} from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
fname: string;
lname: string;
address: string;
email: string;
phone: string;
website: string;
social: string;
  constructor() { }

  ngOnInit() {
  }

  submitContact() {
  }

}
