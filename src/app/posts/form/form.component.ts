import { HttpClient } from "@angular/common/http";
import { identifierModuleUrl } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { FormService } from "src/app/form-service/form.service";
import { District, Province, Vaccines,Location } from "./district-get";

@Component({
  selector: 'form-create',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormCreate implements OnInit{
  provinceList: Province []= [];
  districtList: District []= [];
  vaccinesList: Vaccines []= [];
  locationList: Location []= [];

  constructor(private service:FormService) {


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


  }

  Submit(user: NgForm){
    const data = {
      'id_vaccine': user.value.id_vaccine,
      'dose': user.value.dose,
      'location_to_get': user.value.location_to_get,
      'date_to_get': user.value.date_to_get,
      'gender': user.value.gender,
      'name': user.value.name,
      'lastname': user.value.lastname,
      'village': user.value.village,
      'district': user.value.district,
      'province':  user.value.province,
      'islao': user.value.islao,
      'id_or_passportid': user.value.id_or_passportid,
      'phone': user.value.phone,
      'email': user.value.email,
      'tb_form_create_date': user.value.tb_form_create_date
      };
    console.log(data);
    this.service.getrequest_leave(data).subscribe(response => {
      console.log("response", response)
    })
  }

  ngOnInit(): void {

  }
}


