import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contactUrl = '';
  constructor(private httpContact: HttpClient) { }
  getContactDescription() {
    return this.httpContact.get<string>(this.contactUrl);
  }


  postContactData(contactData) {
    return this.httpContact.post(this.contactUrl, contactData);
  }
}
