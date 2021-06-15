import { HttpClient } from "@angular/common/http";
import { identifierModuleUrl } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { FormService } from "src/app/form-service/form.service";
import { District, Province, Vaccines,Location } from "./district-get";
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';


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
  myForm: FormGroup;
  usedata : any

  constructor(private service:FormService,private fb:FormBuilder) {

    this.myForm = new FormGroup({
      location_to_get: new FormControl('',Validators.required),
      date_to_get: new FormControl('',Validators.required),
      gender: new FormControl('',Validators.required),
      name: new FormControl('',Validators.required),
      lastname: new FormControl('',Validators.required),
      province: new FormControl('',Validators.required),
      district: new FormControl('',Validators.required),
      islao: new FormControl('',Validators.required),
      id_or_passportid: new FormControl('',Validators.required),
      phone: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),

})


    this.service.getPro()
    .subscribe(response=>{
      this.provinceList=response;
      console.log("response", response);
    })


    this.service.getDis()
    .subscribe(response=>{
      this.districtList=response;
      console.log("response",response);
    })

    this.service.getVac()
    .subscribe(response=>{
      this.vaccinesList=response;
      console.log("response", response);
    })

    this.service.getHos()
    .subscribe(response=>{
      this.locationList=response;
      console.log("response",response);
    })

    this.myForm = this.fb.group({
      dose:'',
      id_vaccine:'',
      location_to_get:'',
      date_to_get:'',
      gender:'',
      name:'',
      lastname:'',
      province:'',
      district:'',
      islao:'',
      id_or_passportid:'',
      phone:'',
      email:'',
      // tb_form_create_date:''
   });

   }

  onSubmit(data: any):void {
    console.log(data);


    // console.log(data.value);
    // console.log(data.value.first);  // { first: '', last: '' }

      // const datas ={
      //   'id_vaccine':data.value.id_vaccine,
      //   'dose':data.value.dose,
      //   'location_to_get':data.value.location_to_get,
      //   'date_to_get':data.value.date_to_get,
      //   'gender':data.value.gender,
      //   'name':data.value.name,
      //   'lastname':data.value.lastname,
      //   'district':data.value.district,
      //   'province':data.value.province,
      //   'islao':data.value.islao,
      //   'id_or_passportid':data.value.id_or_passportid,
      //   'phone':data.value.phone,
      //   'email':data.value.email
      // }
      // console.log(datas)

      /*this.service.insert_from(data).subscribe(result=>{
      console.log(result)
      })*/
  }

  ngOnInit(): void {

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

