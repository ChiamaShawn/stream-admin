import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})

export class PagesServicesService {


  site_url: String = "http://localhost:8000/api/";
  public loginheaders = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  public requestheaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) 
  {

   }
    initializeheaders(token){
      //check if the token has expired
      //then refresh it if it has
      let authheaders = new HttpHeaders(
        {
          'Content-Type': 'application/json',
          "Authorization": "Bearer " + token
        })
      
      

      localStorage.setItem("headers", JSON.stringify(authheaders))
      //return authheaders;
    }

   login(loginDetails: any){
     interface loginResponse{
      success_status: string;
      access_token:string;
      username: string 

    }
    return this.http.post(this.site_url+ 'register', loginDetails, 
    {headers: this.loginheaders}).map((response:Response) => {
      console.log(response);
      return response;
    });


   }
   signup(signupDetails: any){
     interface signupResponse{
      success_status: string;
      access_token:string;
      username: string 

    }
    return this.http.post<signupResponse>(this.site_url+ 'login', signupDetails, 
    {headers: this.loginheaders}).map(response => {
      console.log(response);
      return response;
    });

   }
   retrieveUsers(){
      return this.http.get(this.site_url+ 'userInfo', {headers: this.loginheaders}).map(response => {
        console.log(response);
        return response;
      })

   }
   createUser(){

   }
   createMediaItem(){

   }
   createCategories(categoryData){
      return this.http.post(this.site_url + 'create_category', categoryData).map(response => {
        console.log(response);
        return response;
      })
   }
   retrieveMedia(){
     return this.http.get(this.site_url + 'get_media_listing').map(response => {
       console.log(response);
       return response;
     })
   }
   updateMediaItems(){

   }
   deleteMediaItems(){

   }
   getCategories(){
      return this.http.get(this.site_url + 'get_categories').map(response => {
       console.log(response);
       return response;
     })
   }
   sendSingleEmail(email_data){
    return this.http.post(this.site_url + 'singleEmail', email_data ).map(response => {
      console.log(response);
    })
   }
   sendSmsPromo(smsData:any){
     return this.http.post(this.site_url+ 'smspromo', smsData).map(response => {
       console.log(response); 
     })

   }
}
