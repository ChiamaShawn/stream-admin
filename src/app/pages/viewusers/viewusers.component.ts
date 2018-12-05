import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { PagesServicesService } from '../pages-services.service';

import { SmartTableService } from '../../@core/data/smart-table.service';

@Component({
  selector: 'ngx-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.scss']
})
export class ViewusersComponent implements OnInit {
  tableData: any;
  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      email: {
        title: 'Email Address'
      },
      created_at : {
        title: 'Created at'
      },
      updated_at: {
        title: 'Updated at'
      }
      
    }
  };
  constructor(private table_service: SmartTableService, private data_service:PagesServicesService) { }

  ngOnInit() {
    this.retrieveUsersData();
  }
  retrieveUsersData(){
    this.data_service.retrieveUsers().subscribe(data => {
      console.log(data);
      this.tableData = data;
    })
  }
}
