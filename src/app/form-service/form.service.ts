import { HttpClient, HttpHeaders,HttpErrorResponse,HttpRequest,HttpEvent  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { District, Province, Vaccines,Location } from 'src/app/posts/form/district-get';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

private url= "http://94.237.72.103:1001/vaccine_v1"

  constructor(private http:HttpClient) { }

  /////
  httpProvince(){
    return this.http.get<Province[]>('http://94.237.72.103:1001/vaccine_v1/user/get_province?fbclid=IwAR3n58wB0N9JaOsgMbsjDBXSEBOZv_MwYz7p01Tw4xVdbZm3WsxlaXMfMIA')
  }
  /////
  httpDistrict(){
    return this.http.get<District[]>('http://94.237.72.103:1001/vaccine_v1/user/get_district?fbclid=IwAR3a3syBiHpYiz4Z0QEn8bClsFZPF-ssN7dMgs_leRHWDwcVC7BM5qaJMm0')
  }
  /////
  httpVaccines(){
    return this.http.get<Vaccines[]>('http://94.237.72.103:1001/vaccine_v1/user/get_vaccine')
  }
  /////
  httpLocation(){
    return this.http.get<Location[]>('http://94.237.72.103:1001/vaccine_v1/user/get_hospital?fbclid=IwAR1aEebxGZgV_KVtJb_dkR9Z6ltcsI02JZMjNWRdS3Z9oO8ckoVyj7qA32s')
  }



  insert_from(data:any): Observable<any> {

    const url = this.url + '/user/form_insert';
    console.log(url)
    console.log(data)
    return this.http.post(url, data);
  }

  get_vaccine(): Observable<any> {

    const url = this.url + '/user/get_vaccine';
    console.log(url)
    // console.log(data)
    return this.http.get(url);
  }


}
