import { Component, OnInit } from '@angular/core';
import { PagesServicesService } from '../pages-services.service';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableService } from '../../@core/data/smart-table.service';


@Component({
  selector: 'ngx-viewmovies',
  templateUrl: './viewmovies.component.html',
  styleUrls: ['./viewmovies.component.scss']
})
export class ViewmoviesComponent implements OnInit {
  tableData: any;
  source: LocalDataSource = new LocalDataSource();
  settings = {
    actions: {
      add: false  
    },
    columns: {
      id: {
        title: 'ID'
      },
      media_name: {
        title:  'Movie Name'
      },
      created_at: {
        title: 'Creation Date'
      },
      updated_at: {
        title: 'Last Updated'
      }
    }
  };
  constructor(private table_service: SmartTableService, private data_service: PagesServicesService) { }

  ngOnInit() {
    this.getMediaInfo();
  }
  getMediaInfo(){
    this.data_service.retrieveMedia().subscribe(data => {
      console.log(data);
      this.tableData = data; 
      this.source.load(this.tableData);
    })
  }
}
