import { HttpClient } from "@angular/common/http";
import { identifierModuleUrl } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { FormService } from "src/app/form-service/form.service";
import { District, Province, Vaccines,Location } from "./district-get";
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { MustMatch } from 'src/app/posts/form/must-match.validator';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
import Swal from "sweetalert2";
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
  provinceID:Array<Object>= [];
  now1 = new Date();

  radio1 = false
  current_date = moment().format("YYYY-MM-DD");

  constructor(private service:FormService,private fb:FormBuilder) {



    this.service.getPro()
    .subscribe(response=>{
      this.provinceList=response;

    })




    this.service.getVac()
    .subscribe(response=>{
      this.vaccinesList=response;

    })

    this.service.getHos()
    .subscribe(response=>{
      this.locationList=response;

    })

    this.registerForm = this.fb.group({
      vac:'',
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
   registerForm = new FormGroup({});



// registerForm : FormGroup
    submitted = false;



    ngOnInit() {
        this.registerForm = this.fb.group({
            vac: ['', Validators.required],
            id_vaccine: ['', Validators.required],
            vac_detais: ['', Validators.required],
            location_to_get: ['', Validators.required],
            date_to_get: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
            gender:['',Validators.required],
            name:['',Validators.required],
            lastName: ['', Validators.required],
            province:['',Validators.required],
            district:['',Validators.required],
            islao:['',Validators.required],
            id_or_passportid:['',Validators.required],
            phone:['',Validators.required],
            job:['',Validators.required],
            email: ['', [Validators.required, Validators.email]],

        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
      this.submitted = true;
      const data={
        'id_vaccine':this.registerForm.value.id_vaccine,
      'dose':this.registerForm.value.dose,
      'cvid_ref':'123456789',
      'location_to_get':this.registerForm.value.location_to_get,
      'date_to_get':this.registerForm.value.date_to_get,
      'gender':this.registerForm.value.gender,
      'name':this.registerForm.value.name,
      'lastname':this.registerForm.value.lastname,
      'village':'ບ້ານໜ່ອງແຕ່ງ',
      'district':this.registerForm.value.district,
      'province':this.registerForm.value.provinceID,
      'islao':this.registerForm.value.islao,
      'country':this.registerForm.value.country,
      'id_or_passportid':this.registerForm.value.id_or_passportid,
      'phone':this.registerForm.value.phone,
      'email':this.registerForm.value.email
    }
        if(this.registerForm.status=='INVALID'){

          console.log(this.registerForm)
          console.log("Status: Invalid")
        }else if(this.registerForm.status=='VALID'){
          console.log(this.registerForm.value)
          console.log("Status: Valid")

        this.service.insert_from(data).subscribe(result=>{
        console.log(result)
        Swal.fire({
        icon: 'success',
        title: 'ລະຫັດຂອງທ່ານ:  '+result.ticket_id,
        text: 'ເອົາໄວ້ຍືນຍັນແກ່ທ່ານໝໍ',
        })
        })
        this.registerForm.reset();
        }
        // if(this.registerForm.status === 'VALID'){

        //     console.log(this.registerForm.value);

        //   }

// console.log(this.registerForm.value)

        // stop here if form is invalid
        // if (this.registerForm.invalid) {
        //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
        //   return;
        // }




        // display form values on success

    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }

    onItemChange(){
      console.log(" Value is : ", event );
   }

    onchange(){
      // console.log(this.provinceID);
      this.service.getDis(this.provinceID)
      .subscribe(response=>{
        this.districtList=response;
        // console.log("response",response);
      })
    }


    changeFn(event:any) {
      // this.radio1 = event.target.value
      // console.log (event.target.value)
      // console.log(this.current_date)
      if (event.target.value == 2){
        this.radio1 = true
      }else{
        this.radio1 = false
      }

    }



}




  // onSubmit(data: any):void {
  //   console.log(data);

  //     /*this.service.insert_from(data).subscribe(result=>{
  //     console.log(result)
  //     })*/

   //   // console.log(data.value);
  //   // console.log(data.value.first);  // { first: '', last: '' }

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
  // }

  // ngOnInit(): void {

  // }



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

