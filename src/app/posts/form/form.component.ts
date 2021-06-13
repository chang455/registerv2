import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
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
  locationList: Location []=[];
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


  }




  }

