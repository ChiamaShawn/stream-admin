import { Component, OnInit } from '@angular/core';
import { PagesServicesService } from '../pages-services.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-smspromo',
  templateUrl: './smspromo.component.html',
  styleUrls: ['./smspromo.component.scss']
})
export class SmspromoComponent implements OnInit {
  smsForm: any;
  constructor(private data_service: PagesServicesService) {
    const sms_body = new FormControl();


    this.smsForm = new FormGroup({
      sms_body: sms_body
    })
  }


  ngOnInit() {
  }

  sendSmsPromo() {
    this.data_service.sendSmsPromo(this.smsForm.value).subscribe(response => {
      console.log(response);
    })
  }
