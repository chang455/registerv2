import { HttpClient, HttpHeaders,HttpErrorResponse,HttpRequest,HttpEvent  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { District, Province, Vaccines,Location } from 'src/app/posts/form/district-get';

@Injectable({
  providedIn: 'root'
})
export class FormService {

private url= "http://94.237.72.103:1001/vaccine_v1/user/";

  constructor(private http:HttpClient) { }

  getrequest_leave(user: any):Observable<any> {

const url = this.url+"form_insert";
console.log(url);
console.log(user);
return this.http.post(url, user)
}

getDis(id:any){
  const url = this.url + "get_district_id?id="+id;
  console.log(url);
 return this.http.get<any>(url)
}

  getPro(){
    const url = this.url + "get_province";
    console.log(url);
    return this.http.get<any>(url);
  }

  getVac(){
    const url = this.url + "get_vaccine";
    console.log(url);
    return this.http.get<any>(url);
  }

  getHos(){
    const url = this.url + "get_hospital";
    console.log(url);
    return this.http.get<any>(url);
  }
  getjob(){
    const url = this.url + "get_job";
    console.log(url);
    return this.http.get<any>(url);
  }



  insert_from(data:any): Observable<any> {

    const url = this.url + "form_insert";
    console.log(url)
    console.log(data)
    return this.http.post(url, data);
  }

  get_vaccine(): Observable<any> {

    const url = this.url + "get_vaccine";
    console.log(url)
    // console.log(data)
    return this.http.get(url);
  }


}
