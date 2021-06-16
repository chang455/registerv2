import { HttpClient } from "@angular/common/http";
import { identifierModuleUrl } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { FormService } from "src/app/form-service/form.service";
import { District, Province, Vaccines,Location } from "./district-get";
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { MustMatch } from 'src/app/posts/form/must-match.validator';
import { DatePipe } from '@angular/common';

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

  constructor(private service:FormService,private fb:FormBuilder) {


    this.service.getPro()
    .subscribe(response=>{
      this.provinceList=response;
      console.log("response", response);
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
   registerForm = new FormGroup({

    // title: new FormControl('', [Validators.required]),

    // firstName: new FormControl('', [Validators.required]),

    // lastName: new FormControl('', Validators.required)

  });



// registerForm : FormGroup
    submitted = false;



    ngOnInit() {
        this.registerForm = this.fb.group({
            vac: ['', Validators.required],
            id_vaccine: ['', Validators.required],
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
            email: ['', [Validators.required, Validators.email]],

        }, {
            validator: MustMatch('vac', 'id_vaccine',)
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // if(this.registerForm.status === 'VALID'){

        //     console.log(this.registerForm.value);

        //   }

console.log(this.registerForm.value)

        // stop here if form is invalid
        if (this.registerForm.invalid) {
          alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
          return;
        }




        // display form values on success

    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }

    onchange(){
      console.log(this.provinceID);
      this.service.getDis(this.provinceID)
      .subscribe(response=>{
        this.districtList=response;
        console.log("response",response);
      })
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

