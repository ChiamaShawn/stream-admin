import { Component, OnInit } from '@angular/core';
import { PagesServicesService } from '../pages-services.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'ngx-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.scss']
})
export class AddcategoryComponent implements OnInit {

  categoryForm: FormGroup;
  constructor(private data_service: PagesServicesService) { 
    const category_name = new FormControl();
    const meta_description = new FormControl();

    this.categoryForm = new FormGroup({
      category_name : category_name,
      meta_description: meta_description
    });
  }

  
  ngOnInit() {
  }



  submitForm(){
    this.data_service.createCategories(this.categoryForm.value).subscribe(response => {
      console.log(response);
    })
  }
}
