import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private contactService: ContactService) { }

  contactDescription;

  contactUsForm = this.formBuilder.group({
    name: [''],
    email: [''],
    phone: ['']
  });

  resolved(captchaResponse: string) {
    console.log('Resolved captcha with response: ${captchaResponse}');
}

  ngOnInit() {
    //this.contactDescription =  this.contactService.getContactDescription();
    // tslint:disable-next-line: max-line-length
    this.contactDescription = 'We love to meet up with fellow travelers and explore areas together. The adventure is not only about the area you are checking out, but the people you are checking it out with.';
  }

  onContactSubmit() {
    this.contactService.postContactData(this.contactUsForm.value)
    .subscribe(
      response => console.log('Successfully submit', response),
      error => console.log('Error', error)
    );

  }

}
