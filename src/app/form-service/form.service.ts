// import { HttpClient, HttpHeaders,HttpErrorResponse,HttpRequest,HttpEvent  } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { Observable } from 'rxjs';
// import { District, Province, Vaccines,Location } from 'src/app/posts/form/district-get';

// @Injectable({
//   providedIn: 'root'
// })
// export class FormService {

// private url= "http://94.237.72.103:1001/vaccine_v1/user/";

//   constructor(private http:HttpClient) { }

//   getrequest_leave(user: any):Observable<any> {

// const url = this.url+"form_insert";
// // console.log(url);
// // console.log(user);
// return this.http.post(url, user)
// }

// getDis(id:any){
//   const url = this.url + "get_district_id?id="+id;
//   // console.log(url);
//  return this.http.get<any>(url)
// }

//   getPro(){
//     const url = this.url + "get_province";
//     // console.log(url);
//     return this.http.get<any>(url);
//   }

//   getVac(){
//     const url = this.url + "get_vaccine";
//     // console.log(url);
//     return this.http.get<any>(url);
//   }

//   getHos(){
//     const url = this.url + "get_hospital";
//     // console.log(url);
//     return this.http.get<any>(url);
//   }
//   getjob(){
//     const url = this.url + "get_job";
//     // console.log(url);
//     return this.http.get<any>(url);
//   }




//   insert_from(data:any): Observable<any> {

//     const url = this.url + "form_insert";
//     // console.log(url)
//     // console.log(data)
//     return this.http.post(url, data);
//   }

//   get_vaccine(): Observable<any> {

//     const url = this.url + "get_vaccine";
//     // console.log(url)
//     // console.log(data)
//     return this.http.get(url);
//   }


// }
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
// private url= "http://localhost:1001/vaccine_v1/user/";
private token= "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJUZXN0IVYxIiwidW5hbWUiOiJCaVNlblRvIiwidWVtYWlsIjoic21hcnR2YWNjaW5lbGFvc0BnbWFpbC5jb20iLCJ1c3RhdHVzIjoic3RvcCIsInJ1bGUiOiJhY3RpdmUiLCJpYXQiOjE2MjM5NTQwMzQsImV4cCI6MTkzOTMxNDAzNCwiYXVkIjoiaHR0cDovL0F0Y29kZWxhby5jbyIsImlzcyI6IkF0Y29kZSBMdGQiLCJzdWIiOiJBdGNvZGVsYW9AZ21haWwuY29tIn0.mYPFmXy4cmG5ggvYw7Thxi2NSRm2fDXD9J5gXq43hentLqp-qiCwOiFQhEWVIUFiSV30LlFVtekLayQIc0zmuPhmuYj7_Z0wVKokz7FjjyBJpmKpaOtsF1USKhReiAoIyV6TscqP6HC_PzFuHWQWnTKMPLcvbUfHLtz8qokYg_U";

  constructor(private http:HttpClient) { }

getrequest_leave(user: any):Observable<any> {
  let header = new HttpHeaders().set(
    "x-access-token",this.token
  );
const url = this.url+"form_insert";
// console.log(url);
// console.log(user);
// return this.http.post(url, user)
return this.http.post(url,user,{headers:header});
}

getDis(id:any){
  let header = new HttpHeaders().set(
    "x-access-token",this.token
  );
  const url = this.url + "get_district_id?id="+id;
  // console.log(url);
  return this.http.get<any>(url, {headers:header});
}

  getPro(){
    let header = new HttpHeaders().set(
      "x-access-token",this.token
    );
    const url = this.url + "get_province";
    // console.log(url);
    return this.http.get<any>(url, {headers:header});
  }

  getVac(){
    let header = new HttpHeaders().set(
      "x-access-token",this.token
    );
    const url = this.url + "get_vaccine";
    // console.log(url);
    return this.http.get<any>(url, {headers:header});
  }

  getHos(){
    let header = new HttpHeaders().set(
      "x-access-token",this.token
    );
    const url = this.url + "get_hospital";
    // console.log(url);
    return this.http.get<any>(url, {headers:header});
  }
  getjob(){
    let header = new HttpHeaders().set(
      "x-access-token",this.token
    );
    const url = this.url + "get_job";
    return this.http.get<any>(url, {headers:header});
  }

  getvillage(id:any){
    let header = new HttpHeaders().set(
      "x-access-token",this.token
    );
    const url = this.url + "get_village_id?id="+id;
    return this.http.get<any>(url, {headers:header});

  }
  getdisease(){
    let header = new HttpHeaders().set(
      "x-access-token",this.token
    );
    const url = this.url + "get_disease";
    return this.http.get<any>(url, {headers:header});
  }
  getticket(id:any){
    let header = new HttpHeaders().set(
      "x-access-token",this.token
    );
    const url = this.url + "get_ticket?id="+id;
    return this.http.get<any>(url, {headers:header});
  }





  insert_from(data:any): Observable<any> {
    let header = new HttpHeaders().set(
      "x-access-token",this.token
    );
    const url = this.url + "form_insert";
    return this.http.post(url,data,{headers:header});
  }


  // insert_from(data:any): Observable<any> {

  //   const url = this.url + "form_insert";
  //   return this.http.post(url,data);
  // }

  get_vaccine(): Observable<any> {

    const url = this.url + "get_vaccine";
    // console.log(url)
    // console.log(data)
    return this.http.get(url);
  }


}
