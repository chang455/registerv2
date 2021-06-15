import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { District, Province, Vaccines,Location } from 'src/app/posts/form/district-get';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  /////
  private vacUrl = "http://94.237.72.103:1001/vaccine_v1/user/";

  constructor(private http:HttpClient) { }

  getrequest_leave(user: any):Observable<any> {

const url = this.vacUrl+"form_insert";
console.log(url);
console.log(user);
return this.http.post(url, user)
}

  getDis(){
    const url = this.vacUrl + "get_district";
    console.log(url);
   return this.http.get<any>(url)
  }

  getPro(){
    const url = this.vacUrl + "get_province";
    console.log(url);
    return this.http.get<any>(url);
  }

  getVac(){
    const url = this.vacUrl + "get_vaccine";
    console.log(url);
    return this.http.get<any>(url);
  }

  getHos(){
    const url = this.vacUrl + "get_hospital";
    console.log(url);
    return this.http.get<any>(url);
  }



}
