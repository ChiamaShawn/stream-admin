import { Component, OnInit } from '@angular/core';
import { PagesServicesService } from '../pages-services.service';
import { LocalDataSource } from 'ng2-smart-table';
import { ImageCropperComponent, CropperSettings } from 'ng2-img-cropper';
import { SmartTableService } from '../../@core/data/smart-table.service';

@Component({
  selector: 'ngx-editcarousel',
  templateUrl: './editcarousel.component.html',
  styleUrls: ['./editcarousel.component.scss']
})
export class EditcarouselComponent implements OnInit {
  tableData: any;
  source: LocalDataSource = new LocalDataSource();
  cropperSettings: CropperSettings;
  data:any;
  
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
  constructor(private data_service:PagesServicesService) {
    this.cropperSettings = new CropperSettings();
    this.cropperSettings.width = 1280;
    this.cropperSettings.height = 600;
    this.cropperSettings.croppedWidth =100;
    this.cropperSettings.croppedHeight = 100;
    this.cropperSettings.canvasWidth = 600;
    this.cropperSettings.canvasHeight = 300;

    this.data = {};
   }

  ngOnInit() {
  }
  fetchCarouselData(){

  }
  createCarouselData(){

  }


}
