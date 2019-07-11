import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor(private http: HttpClient) { }

  createContact(name: string,
                lname: string,
                address: string,
                email: string,
                phone: string,
                website: string,
                social: string) {

  }
}
