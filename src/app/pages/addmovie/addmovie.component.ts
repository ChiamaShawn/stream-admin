import { Component, OnInit } from '@angular/core';
import { PagesServicesService } from '../pages-services.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { FileUploader } from 'ng2-file-upload';
import { HttpClient } from '@angular/common/http';
import { ImageCropperComponent, CropperSettings } from 'ng2-img-cropper';

@Component({
  selector: 'ngx-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.scss']
})

export class AddmovieComponent implements OnInit {
  uploadURL: string = "http://localhost:8000/api/upload_image";

  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;
  cropperSettings: CropperSettings;
  movieForm: FormGroup;
  categories: any;
  selectedFile: null;
  data: any;


  constructor(private data_service: PagesServicesService) {
    const media_name = new FormControl();
    const category = new FormControl();
    const description = new FormControl();

    this.movieForm = new FormGroup({
      media_name: media_name,
      category: category,
      description: description
    });

    //Image Cropper attributes
    this.cropperSettings = new CropperSettings();
    this.cropperSettings.width = 296;
    this.cropperSettings.height = 296;
    this.cropperSettings.croppedWidth = 100;
    this.cropperSettings.croppedHeight = 100;
    this.cropperSettings.canvasWidth = 400;
    this.cropperSettings.canvasHeight = 300;

    this.data = {};
  }
  public uploader: FileUploader = new FileUploader(
    {
      url: this.uploadURL
    }
  );
  ngOnInit() {
    this.retrieveCategories();  

  }
  retrieveData() {
    this.data_service.retrieveMedia()
  }

  fileSelect(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];
  }
  submitFile() {

  }
  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }
  retrieveCategories() {
    this.data_service.getCategories().subscribe(response => {
      console.log(response);
      this.categories = response;
    })
  }

  submitForm() {
    this.uploader.onBuildItemForm = (item, form) => {
      form.append("movie_name", this.movieForm.value.media_name);
      form.append("category", this.movieForm.value.category);
      form.append("description", this.movieForm.value.category);
      console.log(this.uploader.queue);
      // console.log(form.append);
    };
    this.uploader.uploadAll();
    this.uploader.onSuccessItem = (item: any, response: any, status: number, headers: any): any => {
      if (response) {
        console.log(item);
        console.log(status);
        console.log(response);

      }
    }
  }
}
