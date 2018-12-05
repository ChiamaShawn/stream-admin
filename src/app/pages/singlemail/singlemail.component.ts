import { Component, OnInit } from '@angular/core';

import { PagesServicesService } from '../pages-services.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'ngx-singlemail',
  templateUrl: './singlemail.component.html',
  styleUrls: ['./singlemail.component.scss']
})
export class SinglemailComponent implements OnInit {
  mailingForm: any;
  constructor(private data_service: PagesServicesService) {
    const email_address = new FormControl();
    const subject = new FormControl();
    const body = new FormControl();

    this.mailingForm= new FormGroup({
      email_address: email_address,
      subject: subject,
      body:body
    });
  }


  ngOnInit() {
  }



  submitForm() {
    this.data_service.sendSingleEmail(this.mailingForm.value).subscribe(response => {
      console.log(response);
    })
  }
}
