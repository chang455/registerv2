import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { District, Province, Vaccines,Location } from 'src/app/posts/form/district-get';

@Injectable({
  providedIn: 'root'
})
export class FormService {

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
}
