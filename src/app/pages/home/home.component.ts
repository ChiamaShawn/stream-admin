import { Component, OnInit } from '@angular/core';
import { PagesServicesService } from '../pages-services.service';
@Component({
  selector: 'ngx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  media_items: any;
  constructor(private provider_service: PagesServicesService) { }

  ngOnInit() {
    this.retrieveMediaItems();
  }
  retrieveMediaItems() {
    this.provider_service.retrieveMedia().subscribe(data => {
      this.media_items = data;
    })
  }
  
} 
