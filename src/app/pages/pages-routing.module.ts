import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import  { EditmovieComponent } from './editmovie/editmovie.component';
import { ViewusersComponent } from './viewusers/viewusers.component';
import { ViewmoviesComponent } from './viewmovies/viewmovies.component';
import { EditcarouselComponent } from './editcarousel/editcarousel.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { SinglemailComponent } from './singlemail/singlemail.component';
import { MultiplemailComponent } from './multiplemail/multiplemail.component';
import { SmspromoComponent } from './smspromo/smspromo.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent,
  }, 
  {
    path: 'addmedia',
    component: AddmovieComponent

  },
  {
    path: 'editmedia',
    component: EditmovieComponent

  },
  {
    path: 'viewmedia',
    component: ViewmoviesComponent

  },
  {
    path: 'viewusers',
    component: ViewusersComponent

  },
  {
    path: 'editcarousel',
    component: EditcarouselComponent

  },
  {
    path: 'addcategory',
    component: AddcategoryComponent
  },
  {
    path: 'singlemail',
    component: SinglemailComponent

  },
  {
    path:'smspromo',
    component:SmspromoComponent
  },
  {
    path: 'multiplemail',
    component: MultiplemailComponent
  },
  {
    path: 'iot-dashboard',
    component: DashboardComponent,
  }, {
    path: 'ui-features',
    loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
  }, {
    path: 'components',
    loadChildren: './components/components.module#ComponentsModule',
  }, {
    path: 'maps',
    loadChildren: './maps/maps.module#MapsModule',
  }, {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsModule',
  }, {
    path: 'editors',
    loadChildren: './editors/editors.module#EditorsModule',
  }, {
    path: 'forms',
    loadChildren: './forms/forms.module#FormsModule',
  }, {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule',
  }, {
    path: 'miscellaneous',
    loadChildren: './miscellaneous/miscellaneous.module#MiscellaneousModule',
  }, {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '**',
    component: NotFoundComponent,
  },{
    path: 'home',
    component: HomeComponent
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
