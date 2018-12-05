import { NgModule } from '@angular/core';
import { TablesRoutingModule, routedComponents } from './tables/tables-routing.module';
import { SmartTableService } from '../@core/data/smart-table.service';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { ButtonsModule } from './ui-features/buttons/buttons.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { HomeComponent } from './home/home.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { RegisterComponent } from './authentication/register/register.component';
import { EditmovieComponent } from './editmovie/editmovie.component';
import { ViewusersComponent } from './viewusers/viewusers.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { TablesModule } from './tables/tables.module';
import { MomentModule }  from 'angular2-moment';
import { ViewmoviesComponent } from './viewmovies/viewmovies.component';
import { FileUploadModule } from 'ng2-file-upload';
import { EditcarouselComponent } from './editcarousel/editcarousel.component';
import { ImageCropperModule } from 'ng2-img-cropper';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { MultiplemailComponent } from './multiplemail/multiplemail.component';
import { BulksmsComponent } from './bulksms/bulksms.component';
import { SinglemailComponent } from './singlemail/singlemail.component';
import { SmspromoComponent } from './smspromo/smspromo.component';
const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    ECommerceModule,
    ButtonsModule,
    MiscellaneousModule,
    TablesModule,
    FileUploadModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    MomentModule,
    ImageCropperModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    HomeComponent,
    AddmovieComponent,
    AuthenticationComponent,
    SigninComponent,
    RegisterComponent,
    EditmovieComponent,
    ViewusersComponent,
    ViewmoviesComponent,
    EditcarouselComponent,
    AddcategoryComponent,
    SinglemailComponent,
    MultiplemailComponent,
    BulksmsComponent,
    SmspromoComponent,
  ],
  providers: [
    SmartTableService,
  ],
})
export class PagesModule {
}
