import { HttpClient } from "@angular/common/http";
import { Component, OnInit, ɵɵtrustConstantResourceUrl } from "@angular/core";
import { FormService } from "src/app/form-service/form.service";
import { District, Province, Vaccines,Location } from "./district-get";
import {NgForm} from '@angular/forms';


@Component({
  selector: 'form-create',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormCreate implements OnInit{
  provinceList: Province []= [];
  districtList: District []= [];
  vaccinesList: Vaccines []= [];
  locationList: Location []=[];

  usedata : any

  constructor(private service:FormService) {

    this.service.httpProvince()
    .subscribe(response=>{
      this.provinceList=response;
    })


    this.service.httpDistrict()
    .subscribe(response=>{
      this.districtList=response;
    })

    this.service.httpVaccines()
    .subscribe(response=>{
      this.vaccinesList=response;
    })

    this.service.httpLocation()
    .subscribe(response=>{
      this.locationList=response;
    })

   }
  ngOnInit(): void {

//  this.service.get_vaccine().subscribe(result=>{
//       console.log(result)
//       this.vaccinesList=result;
//       })




  }




  submit(){

  }


  onSubmit(data: NgForm) {
    // console.log(data.value);
    // console.log(data.value.first);  // { first: '', last: '' }

      const datas ={
        'id_vaccine':data.value.id_vaccine,
        'dose':data.value.dose,
        'location_to_get':data.value.location_to_get,
        'date_to_get':data.value.date_to_get,
        'gender':data.value.gender,
        'name':data.value.name,
        'lastname':data.value.lastname,
        'district':data.value.district,
        'province':data.value.province,
        'islao':data.value.islao,
        'id_or_passportid':data.value.id_or_passportid,
        'phone':data.value.phone,
        'email':data.value.email
      }
      console.log(datas)

      this.service.insert_from(datas).subscribe(result=>{
      console.log(result)
      })





  }

  }
  /*const data = {
'id_vaccine': '1',
'dose': '2',
'location_to_get': '1',
'date_to_get': '2021-06-15',
'gender': 'male',
'name': 'test1',
'lastname': 'test1',
'village': 'test1',
'district': '1',
'province':  '1',
'islao': 'Yes',
'id_or_passportid': 'P1234567',
'phone': '2077778888',
'email': 'test1@gmail.com',
'tb_form_create_date': '2021-06-15'
}; */

