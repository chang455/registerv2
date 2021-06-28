import { HttpClient } from "@angular/common/http";
import { identifierModuleUrl } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { FormService } from "src/app/form-service/form.service";
import { District, Province, Vaccines,Location, Job, Village } from "./district-get";
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { MustMatch } from 'src/app/posts/Register/must-match.validator';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
import Swal from "sweetalert2";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ModalDismissReasons, NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
@Component({
  selector: 'form-create',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})

export class FormCreate implements OnInit{
  provinceList: Province []= [];
  districtList: District []= [];
  vaccinesList: Vaccines []= [];
  villageList: Village []= [];
  locationList: Location []=[];
  jobList: Job[]=[];
  usedata : any
  provinceID:any;
  districtID:Array<Object>= [];
  now1 = new Date();

  villageinput:any;

  radio1 = false
  radio2 = false
  current_date = moment().add(2,'days').format("YYYY-MM-DD");
  current_date_covide = moment().format("YYYY-MM-DD");
  current_date_max=moment().add(20,'days').format("YYYY-MM-DD");
  age_radio1= false
  age_radio2=false
  age_radio3=false
  age_date:any;
  age_calculate:any;
  age_name :any
  valuetest:any;

  vac1:any;
  vac2:any;
  location_code:any;

  closeModal: any;

  disease:any;
  country_manual:any;
  elementType:any;
  CorrectionLevel:any;
  value :any;
  siteKey:any;
  location_name:any;
  vaccin_name:any
  province_name:any
  district_name:any;
  nation_name:any;
  show_name:any;
  show_lastname:any;
  show_nation:any;
  show_id:any;
  show_phone:any;
  show_dob:any;
  show_province:any;
  show_district:any;
  show_nationInter:any;
  constructor(private service:FormService,private fb:FormBuilder,private modalService: NgbModal ,config: NgbModalConfig) {

    config.backdrop = 'static';
    config.keyboard = false;

    this.service.getPro()
    .subscribe(response=>{
      this.provinceList=response;

    })




    this.service.getVac()
    .subscribe(response=>{
      this.vaccinesList=response;

    })

    this.service.getjob()
    .subscribe(response=>{
      this.jobList=response;

    })

    this.service.getHos()
    .subscribe(response=>{
      this.locationList=response;
      // console.log(response)

    })


    this.service.getdisease()
    .subscribe(response=>{
      this.disease=response;
      // console.log(response)

    })
    this.service.getticket('LHM47VXV') //DP-WHWV61ID
    .subscribe(response=>{
      // this.disease=response;
      // console.log(response)

    })


   }
   registerForm = new FormGroup({});



// registerForm : FormGroup
    submitted = false;



    ngOnInit() {


      this.siteKey='6LceNVobAAAAAOqEADQI6XTeGyInMVXkCtH7znSW';



        this.registerForm = this.fb.group({
            vac: ['', Validators.required],
            // id_vaccine: ['', Validators.required],
            id_vaccine:['', Validators.required],
            // vac_detais: ['', Validators.required],
            vac_details:'' ,
            location_to_get: ['', Validators.required],
            date_to_get: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
            // gender:['',Validators.required],
            name:['',Validators.required],
            lastName: ['', Validators.required],
            village:'',
            province:['',Validators.required],
            district:['',Validators.required],
            country:'',
            title:['',Validators.required],
            dob:['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
            islao:['',Validators.required],
            id_or_passportid:['',Validators.required],
            phone:['',Validators.required],
            job:['',Validators.required],
            email: '',
            recaptcha: ['', Validators.required],
       // email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
            work_location:['',Validators.required],
            date_covid:'',
            ques1:['',Validators.required],
            ques2:['',Validators.required],
            ques3:['',Validators.required],
            ques4:['',Validators.required],
            ques5:['',Validators.required],
            ques6:['',Validators.required],
            ques7:['',Validators.required],
            ques8:['',Validators.required],
            ques9:['',Validators.required],
            Disease:['',Validators.required],
            villageinput:'',

        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit(content:any,loading:any) {
      // console.log(this.location_code)
      // console.log(this.ageFromDateOfBirthday('2000-01-01'))
//       console.log(this.registerForm.value.country)
// console.log(this.registerForm.value)
// console.log(this.registerForm.value.id_vaccine)
// console.log(this.registerForm.value.province+"-p--")
// console.log(this.registerForm.value.village+"--v-")
// console.log(this.registerForm.value.villageinput+'--VIP--')


if (this.registerForm.value.village !=""){
// console.log('whattt')
}
if (this.registerForm.value.vac == '2' && this.registerForm.value.vac_details == ""){
  this.submitted = true;
 Swal.fire({
        icon: 'warning',
        title: 'ກະລຸນາກວດສອບຂໍ້ມູນຂອງຸທ່ານ',
        text: 'ລາຍລະອຽດວິກຊີນເຂັມສອງຍັງມີບ່ອນວ່າງ',
        })
}else if(this.registerForm.value.province != '1'&& this.registerForm.value.villageinput ==""  ){
  this.submitted = true;
  Swal.fire({
    icon: 'warning',
    title: 'ກະລຸນາກວດສອບຂໍ້ມູນຂອງຸທ່ານ',
    text: 'ລາຍລະອຽດບ້ານຍັງມີບ່ອນວ່າງ',
    })
}else{
  this.submitted = true;

  if (this.registerForm.value.islao ==1){
    this.country_manual = 'Laos'
  }else{
    this.country_manual = this.registerForm.value.country
  }

      const data={

        'id_vaccine':this.registerForm.value.id_vaccine,
      'dose':this.registerForm.value.vac,
      'cvid_ref':this.registerForm.value.vac_details,
      'location_to_get':this.registerForm.value.location_to_get,
      'date_to_get':this.registerForm.value.date_to_get,
      'gender':this.registerForm.value.title,
      'name':this.registerForm.value.name,
      'lastname':this.registerForm.value.lastName,
      'village':this.registerForm.value.village,
      'villageinput':this.registerForm.value.villageinput,
      'district':this.registerForm.value.district,
      'province':this.registerForm.value.province,
      'islao':this.registerForm.value.islao,     //1 = lao 2 = another
      'job':this.registerForm.value.job,
      'country':this.country_manual, // COUNTRY
      'id_or_passportid':this.registerForm.value.id_or_passportid,
      'phone':this.registerForm.value.phone,
      'email':this.registerForm.value.email,
      'dob':this.registerForm.value.dob,
      //'national':this.registerForm.value.national,  //NATIONAL
      'work_location':this.registerForm.value.work_location,
      'date_covid':this.registerForm.value.date_covid,
      'ques1':this.registerForm.value.ques1,
      'ques2':this.registerForm.value.ques2,
      'ques3':this.registerForm.value.ques3,
      'ques4':this.registerForm.value.ques4,
      'ques5':this.registerForm.value.ques5,
      'ques6':this.registerForm.value.ques6,
      'ques7':this.registerForm.value.ques7,
      'ques8':this.registerForm.value.ques8,
      'ques9':this.registerForm.value.ques9,
      'Disease':this.registerForm.value.Disease

    }

        if(this.registerForm.status=='INVALID'){
          //  console.log(data)
          // console.log(this.registerForm.value)
          // console.log("Status: Invalid")


        }else if(this.registerForm.status=='VALID'){
          // console.log(this.registerForm.value)

  //         // console.log(data)
  // console.log("Status: Valid")
  //       // console.log(result)
  this.vacines_info(this.registerForm.value.id_vaccine)
  this.hospital_info(this.registerForm.value.location_to_get)
  this.province_info(this.registerForm.value.province)
  this.district_info(this.registerForm.value.district)
  // this.nation_info(this.registerForm.value.islao)
  // console.log(this.location_name);
  // console.log(this.vaccin_name);
  // console.log(this.province_name);
  // console.log(this.district_name);
  // console.log(this.country_manual);
        Swal.fire({
          title: 'ລະບົບຈອງຄິວ',
          text: 'ກະລຸນາກວດສອບຂໍ້ມູນຂອງຸທ່ານ',
          imageWidth: 150,
          imageHeight: 150,
          imageUrl:'assets/assets/images/Untitled2222-removebg-preview.png',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'ຕົກລົງ'

        }).then((result) => {
          if (result.isConfirmed) {
            this.modalService.open(loading,{size:'sm'});
            console.log();
            this.service.insert_from(data).subscribe(result=>{

              if(result.resultCode == '00'){
                // console.log("Code"+result.resultCode)
                // Swal.fire({
                //   icon: 'success',
                //   title: 'ລະຫັດຂອງທ່ານ:  '+result.ticket_id,
                //   text: 'ເອົາໄວ້ຍືນຍັນແກ່ທ່ານໝໍ',
                //   confirmButtonText: 'ຕົກລົງ'
                //   }).then(function() {

                //   window.location.reload();
                  // setTimeout(()=>{
                  //   this.submitted = false;
                  //   this.registerForm.reset();
                  //   window.location.reload();
                  // }, 4000)
                // });
                this.show_name=this.registerForm.value.name;
                this.show_lastname=this.registerForm.value.lastName;
                // this.show_nation=this.nation_name;
                this.show_id=this.registerForm.value.id_or_passportid;
                this.show_phone=this.registerForm.value.phone;
                this.show_dob=this.registerForm.value.date_to_get;
                this.show_province=this.province_name;
                this.show_district=this.district_name;
                this.show_nationInter=this.country_manual;


                // console.log(result)
                this.elementType = NgxQrcodeElementTypes.URL;
                // this.value = result.ticket_id
                // +'+'+this.registerForm.value.name
                // +'+'+this.registerForm.value.lastName
                // +'+'+this.registerForm.value.id_or_passportid
                // +'+'+this.registerForm.value.phone
                // +'+'+this.vaccin_name
                // +'+'+this.location_name
                // +'+'+this.registerForm.value.dob
                // +'+'+this.registerForm.value.date_to_get
                // +'+'+this.province_name

                // +'+'+this.district_name
                // ;

                this.value = result.ticket_id;
                this.CorrectionLevel= NgxQrcodeErrorCorrectionLevels.HIGH;
                this.modalService.open(content);

                // this.registerForm.reset();

                return  this.value,
                this.show_name,
                this.show_lastname,
                this.show_nation, this.show_id,this.show_phone,this.show_dob,this.show_province,
                this.show_district,this.show_nationInter;
              }
              else if(result.resultCode == '03'){
                Swal.fire({
                  icon: 'error',
                  title: 'ໂຮງໝໍທີ່ທ່ານເລືອກຖືກຈຳກັດ',
                  text: 'ກະລຸນາເລືອກໂຮງໝໍອື່ນ ຫຼື ປ່ຽນເປັນວັນທີອື່ນ',
                  confirmButtonText: 'ຕົກລົງ'
                  })/*.then(function() {

                  window.location.reload();
                  // setTimeout(()=>{
                  //   this.submitted = false;
                  //   this.registerForm.reset();
                  //   window.location.reload();
                  // }, 4000)
                });*/
              }
              else{
                Swal.fire({
                  icon: 'warning',
                  title: 'ການສະໝັກລົ້ມເຫຼວ  ',
                  text: 'ກະລຸນາລອງໃໝ້ອີກຄັ້ງ',
                  })
                  setTimeout(()=>{
                    // this.submitted = false;
                    // this.age_calculate = ''
                    this.registerForm.reset();
                    window.location.reload();
                  }, 4000)

              }

            // this.submitted = false;
            // this.registerForm.reset();
            // window.location.reload();
            })
          }
        })
        }
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
      // console.log(" Value is : ", event );
   }

    onchange(){
      // console.log(this.provinceID);
      this.service.getDis(this.provinceID)
      .subscribe(response=>{
        this.districtList=response;

        // console.log("response",response);
      })
    }

    disonchange(){
      this.service.getvillage(this.districtID)
      .subscribe(response=>{
        this.villageList=response;
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

    changeNt(event:any) {
      // this.radio2 = event.target.value
      // console.log (event.target.value)
      // console.log(this.current_date)
      if (event.target.value == 2){
        this.radio2 = true
      }else{
        this.radio2 = false
      }

    }

    changeAge(event:any){
      if (event.target.value == 1){
        this.age_radio1 = true
      }else{
        this.age_radio1 = false
      }
      if(event.target.value==2){
        this.age_radio2= true
      }else{
        this.age_radio2=false
      }
      if(event.target.value ==3){
        this.age_radio3=true
      }else{
        this.age_radio3=false
      }
    }
    public ageFromDateOfBirthday(dateOfBirth: any): number {
      const today = new Date();
      const birthDate = new Date(dateOfBirth);
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();

      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      return age;
    }
    age_cal(){
      // console.log(this.age_date)
      this.age_calculate= this.ageFromDateOfBirthday(this.age_date)


      // if ( this.age_calculate <= 17 ){
      //   this.age_name = 'ອາຍຸຂອງທ່ານແມ່ນ '+this.age_calculate+' ບໍ່ສາມາດຮັບວັກຊິນໄດ້'
      // }

      // if ( this.age_calculate >=18  ){
      //   this.age_name = 'ອາຍຸຂອງທ່ານແມ່ນ '+this.age_calculate+' ສາມາດຮັບວັກຊິນໄດ້'
      // }



    }
    // triggerModal(content:any) {
    //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
    //     this.closeModal = `Closed with: ${res}`;
    //   }, (res) => {
    //     this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    //   });
    // }


    // private getDismissReason(reason: any): string {
    //   if (reason === ModalDismissReasons.ESC) {
    //     return 'by pressing ESC';
    //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    //     return 'by clicking on a backdrop';
    //   } else {
    //     return  `with: ${reason}`;
    //   }
    // }

    open(content:any) {
      this.modalService.open(content ,{ centered: true});
    }

    loading(content:any){
      this.modalService.open(content ,{ centered: true})
    }



    reload(){
      window.location.reload();
    }
    countries = [
      { code: "AF", code3: "AFG", name: "Afghanistan", number: "004" },
      { code: "AL", code3: "ALB", name: "Albania", number: "008" },
      { code: "DZ", code3: "DZA", name: "Algeria", number: "012" },
      { code: "AS", code3: "ASM", name: "American Samoa", number: "016" },
      { code: "AD", code3: "AND", name: "Andorra", number: "020" },
      { code: "AO", code3: "AGO", name: "Angola", number: "024" },
      { code: "AI", code3: "AIA", name: "Anguilla", number: "660" },
      { code: "AQ", code3: "ATA", name: "Antarctica", number: "010" },
      { code: "AG", code3: "ATG", name: "Antigua and Barbuda", number: "028" },
      { code: "AR", code3: "ARG", name: "Argentina", number: "032" },
      { code: "AM", code3: "ARM", name: "Armenia", number: "051" },
      { code: "AW", code3: "ABW", name: "Aruba", number: "533" },
      { code: "AU", code3: "AUS", name: "Australia", number: "036" },
      { code: "AT", code3: "AUT", name: "Austria", number: "040" },
      { code: "AZ", code3: "AZE", name: "Azerbaijan", number: "031" },
      { code: "BS", code3: "BHS", name: "Bahamas (the)", number: "044" },
      { code: "BH", code3: "BHR", name: "Bahrain", number: "048" },
      { code: "BD", code3: "BGD", name: "Bangladesh", number: "050" },
      { code: "BB", code3: "BRB", name: "Barbados", number: "052" },
      { code: "BY", code3: "BLR", name: "Belarus", number: "112" },
      { code: "BE", code3: "BEL", name: "Belgium", number: "056" },
      { code: "BZ", code3: "BLZ", name: "Belize", number: "084" },
      { code: "BJ", code3: "BEN", name: "Benin", number: "204" },
      { code: "BM", code3: "BMU", name: "Bermuda", number: "060" },
      { code: "BT", code3: "BTN", name: "Bhutan", number: "064" },
      { code: "BO", code3: "BOL", name: "Bolivia (Plurinational State of)", number: "068" },
      { code: "BQ", code3: "BES", name: "Bonaire, Sint Eustatius and Saba", number: "535" },
      { code: "BA", code3: "BIH", name: "Bosnia and Herzegovina", number: "070" },
      { code: "BW", code3: "BWA", name: "Botswana", number: "072" },
      { code: "BV", code3: "BVT", name: "Bouvet Island", number: "074" },
      { code: "BR", code3: "BRA", name: "Brazil", number: "076" },
      { code: "IO", code3: "IOT", name: "British Indian Ocean Territory (the)", number: "086" },
      { code: "BN", code3: "BRN", name: "Brunei Darussalam", number: "096" },
      { code: "BG", code3: "BGR", name: "Bulgaria", number: "100" },
      { code: "BF", code3: "BFA", name: "Burkina Faso", number: "854" },
      { code: "BI", code3: "BDI", name: "Burundi", number: "108" },
      { code: "CV", code3: "CPV", name: "Cabo Verde", number: "132" },
      { code: "KH", code3: "KHM", name: "Cambodia", number: "116" },
      { code: "CM", code3: "CMR", name: "Cameroon", number: "120" },
      { code: "CA", code3: "CAN", name: "Canada", number: "124" },
      { code: "KY", code3: "CYM", name: "Cayman Islands (the)", number: "136" },
      { code: "CF", code3: "CAF", name: "Central African Republic (the)", number: "140" },
      { code: "TD", code3: "TCD", name: "Chad", number: "148" },
      { code: "CL", code3: "CHL", name: "Chile", number: "152" },
      { code: "CN", code3: "CHN", name: "China", number: "156" },
      { code: "CX", code3: "CXR", name: "Christmas Island", number: "162" },
      { code: "CC", code3: "CCK", name: "Cocos (Keeling) Islands (the)", number: "166" },
      { code: "CO", code3: "COL", name: "Colombia", number: "170" },
      { code: "KM", code3: "COM", name: "Comoros (the)", number: "174" },
      { code: "CD", code3: "COD", name: "Congo (the Democratic Republic of the)", number: "180" },
      { code: "CG", code3: "COG", name: "Congo (the)", number: "178" },
      { code: "CK", code3: "COK", name: "Cook Islands (the)", number: "184" },
      { code: "CR", code3: "CRI", name: "Costa Rica", number: "188" },
      { code: "HR", code3: "HRV", name: "Croatia", number: "191" },
      { code: "CU", code3: "CUB", name: "Cuba", number: "192" },
      { code: "CW", code3: "CUW", name: "Curaçao", number: "531" },
      { code: "CY", code3: "CYP", name: "Cyprus", number: "196" },
      { code: "CZ", code3: "CZE", name: "Czechia", number: "203" },
      { code: "CI", code3: "CIV", name: "Côte d'Ivoire", number: "384" },
      { code: "DK", code3: "DNK", name: "Denmark", number: "208" },
      { code: "DJ", code3: "DJI", name: "Djibouti", number: "262" },
      { code: "DM", code3: "DMA", name: "Dominica", number: "212" },
      { code: "DO", code3: "DOM", name: "Dominican Republic (the)", number: "214" },
      { code: "EC", code3: "ECU", name: "Ecuador", number: "218" },
      { code: "EG", code3: "EGY", name: "Egypt", number: "818" },
      { code: "SV", code3: "SLV", name: "El Salvador", number: "222" },
      { code: "GQ", code3: "GNQ", name: "Equatorial Guinea", number: "226" },
      { code: "ER", code3: "ERI", name: "Eritrea", number: "232" },
      { code: "EE", code3: "EST", name: "Estonia", number: "233" },
      { code: "SZ", code3: "SWZ", name: "Eswatini", number: "748" },
      { code: "ET", code3: "ETH", name: "Ethiopia", number: "231" },
      { code: "FK", code3: "FLK", name: "Falkland Islands (the) [Malvinas]", number: "238" },
      { code: "FO", code3: "FRO", name: "Faroe Islands (the)", number: "234" },
      { code: "FJ", code3: "FJI", name: "Fiji", number: "242" },
      { code: "FI", code3: "FIN", name: "Finland", number: "246" },
      { code: "FR", code3: "FRA", name: "France", number: "250" },
      { code: "GF", code3: "GUF", name: "French Guiana", number: "254" },
      { code: "PF", code3: "PYF", name: "French Polynesia", number: "258" },
      { code: "TF", code3: "ATF", name: "French Southern Territories (the)", number: "260" },
      { code: "GA", code3: "GAB", name: "Gabon", number: "266" },
      { code: "GM", code3: "GMB", name: "Gambia (the)", number: "270" },
      { code: "GE", code3: "GEO", name: "Georgia", number: "268" },
      { code: "DE", code3: "DEU", name: "Germany", number: "276" },
      { code: "GH", code3: "GHA", name: "Ghana", number: "288" },
      { code: "GI", code3: "GIB", name: "Gibraltar", number: "292" },
      { code: "GR", code3: "GRC", name: "Greece", number: "300" },
      { code: "GL", code3: "GRL", name: "Greenland", number: "304" },
      { code: "GD", code3: "GRD", name: "Grenada", number: "308" },
      { code: "GP", code3: "GLP", name: "Guadeloupe", number: "312" },
      { code: "GU", code3: "GUM", name: "Guam", number: "316" },
      { code: "GT", code3: "GTM", name: "Guatemala", number: "320" },
      { code: "GG", code3: "GGY", name: "Guernsey", number: "831" },
      { code: "GN", code3: "GIN", name: "Guinea", number: "324" },
      { code: "GW", code3: "GNB", name: "Guinea-Bissau", number: "624" },
      { code: "GY", code3: "GUY", name: "Guyana", number: "328" },
      { code: "HT", code3: "HTI", name: "Haiti", number: "332" },
      { code: "HM", code3: "HMD", name: "Heard Island and McDonald Islands", number: "334" },
      { code: "VA", code3: "VAT", name: "Holy See (the)", number: "336" },
      { code: "HN", code3: "HND", name: "Honduras", number: "340" },
      { code: "HK", code3: "HKG", name: "Hong Kong", number: "344" },
      { code: "HU", code3: "HUN", name: "Hungary", number: "348" },
      { code: "IS", code3: "ISL", name: "Iceland", number: "352" },
      { code: "IN", code3: "IND", name: "India", number: "356" },
      { code: "ID", code3: "IDN", name: "Indonesia", number: "360" },
      { code: "IR", code3: "IRN", name: "Iran (Islamic Republic of)", number: "364" },
      { code: "IQ", code3: "IRQ", name: "Iraq", number: "368" },
      { code: "IE", code3: "IRL", name: "Ireland", number: "372" },
      { code: "IM", code3: "IMN", name: "Isle of Man", number: "833" },
      { code: "IL", code3: "ISR", name: "Israel", number: "376" },
      { code: "IT", code3: "ITA", name: "Italy", number: "380" },
      { code: "JM", code3: "JAM", name: "Jamaica", number: "388" },
      { code: "JP", code3: "JPN", name: "Japan", number: "392" },
      { code: "JE", code3: "JEY", name: "Jersey", number: "832" },
      { code: "JO", code3: "JOR", name: "Jordan", number: "400" },
      { code: "KZ", code3: "KAZ", name: "Kazakhstan", number: "398" },
      { code: "KE", code3: "KEN", name: "Kenya", number: "404" },
      { code: "KI", code3: "KIR", name: "Kiribati", number: "296" },
      { code: "KP", code3: "PRK", name: "Korea (the Democratic People's Republic of)", number: "408" },
      { code: "KR", code3: "KOR", name: "Korea (the Republic of)", number: "410" },
      { code: "KW", code3: "KWT", name: "Kuwait", number: "414" },
      { code: "KG", code3: "KGZ", name: "Kyrgyzstan", number: "417" },
      { code: "LA", code3: "LAO", name: "Laos", number: "418" },
      { code: "LV", code3: "LVA", name: "Latvia", number: "428" },
      { code: "LB", code3: "LBN", name: "Lebanon", number: "422" },
      { code: "LS", code3: "LSO", name: "Lesotho", number: "426" },
      { code: "LR", code3: "LBR", name: "Liberia", number: "430" },
      { code: "LY", code3: "LBY", name: "Libya", number: "434" },
      { code: "LI", code3: "LIE", name: "Liechtenstein", number: "438" },
      { code: "LT", code3: "LTU", name: "Lithuania", number: "440" },
      { code: "LU", code3: "LUX", name: "Luxembourg", number: "442" },
      { code: "MO", code3: "MAC", name: "Macao", number: "446" },
      { code: "MG", code3: "MDG", name: "Madagascar", number: "450" },
      { code: "MW", code3: "MWI", name: "Malawi", number: "454" },
      { code: "MY", code3: "MYS", name: "Malaysia", number: "458" },
      { code: "MV", code3: "MDV", name: "Maldives", number: "462" },
      { code: "ML", code3: "MLI", name: "Mali", number: "466" },
      { code: "MT", code3: "MLT", name: "Malta", number: "470" },
      { code: "MH", code3: "MHL", name: "Marshall Islands (the)", number: "584" },
      { code: "MQ", code3: "MTQ", name: "Martinique", number: "474" },
      { code: "MR", code3: "MRT", name: "Mauritania", number: "478" },
      { code: "MU", code3: "MUS", name: "Mauritius", number: "480" },
      { code: "YT", code3: "MYT", name: "Mayotte", number: "175" },
      { code: "MX", code3: "MEX", name: "Mexico", number: "484" },
      { code: "FM", code3: "FSM", name: "Micronesia (Federated States of)", number: "583" },
      { code: "MD", code3: "MDA", name: "Moldova (the Republic of)", number: "498" },
      { code: "MC", code3: "MCO", name: "Monaco", number: "492" },
      { code: "MN", code3: "MNG", name: "Mongolia", number: "496" },
      { code: "ME", code3: "MNE", name: "Montenegro", number: "499" },
      { code: "MS", code3: "MSR", name: "Montserrat", number: "500" },
      { code: "MA", code3: "MAR", name: "Morocco", number: "504" },
      { code: "MZ", code3: "MOZ", name: "Mozambique", number: "508" },
      { code: "MM", code3: "MMR", name: "Myanmar", number: "104" },
      { code: "NA", code3: "NAM", name: "Namibia", number: "516" },
      { code: "NR", code3: "NRU", name: "Nauru", number: "520" },
      { code: "NP", code3: "NPL", name: "Nepal", number: "524" },
      { code: "NL", code3: "NLD", name: "Netherlands (the)", number: "528" },
      { code: "NC", code3: "NCL", name: "New Caledonia", number: "540" },
      { code: "NZ", code3: "NZL", name: "New Zealand", number: "554" },
      { code: "NI", code3: "NIC", name: "Nicaragua", number: "558" },
      { code: "NE", code3: "NER", name: "Niger (the)", number: "562" },
      { code: "NG", code3: "NGA", name: "Nigeria", number: "566" },
      { code: "NU", code3: "NIU", name: "Niue", number: "570" },
      { code: "NF", code3: "NFK", name: "Norfolk Island", number: "574" },
      { code: "MP", code3: "MNP", name: "Northern Mariana Islands (the)", number: "580" },
      { code: "NO", code3: "NOR", name: "Norway", number: "578" },
      { code: "OM", code3: "OMN", name: "Oman", number: "512" },
      { code: "PK", code3: "PAK", name: "Pakistan", number: "586" },
      { code: "PW", code3: "PLW", name: "Palau", number: "585" },
      { code: "PS", code3: "PSE", name: "Palestine, State of", number: "275" },
      { code: "PA", code3: "PAN", name: "Panama", number: "591" },
      { code: "PG", code3: "PNG", name: "Papua New Guinea", number: "598" },
      { code: "PY", code3: "PRY", name: "Paraguay", number: "600" },
      { code: "PE", code3: "PER", name: "Peru", number: "604" },
      { code: "PH", code3: "PHL", name: "Philippines (the)", number: "608" },
      { code: "PN", code3: "PCN", name: "Pitcairn", number: "612" },
      { code: "PL", code3: "POL", name: "Poland", number: "616" },
      { code: "PT", code3: "PRT", name: "Portugal", number: "620" },
      { code: "PR", code3: "PRI", name: "Puerto Rico", number: "630" },
      { code: "QA", code3: "QAT", name: "Qatar", number: "634" },
      { code: "MK", code3: "MKD", name: "Republic of North Macedonia", number: "807" },
      { code: "RO", code3: "ROU", name: "Romania", number: "642" },
      { code: "RU", code3: "RUS", name: "Russian Federation (the)", number: "643" },
      { code: "RW", code3: "RWA", name: "Rwanda", number: "646" },
      { code: "RE", code3: "REU", name: "Réunion", number: "638" },
      { code: "BL", code3: "BLM", name: "Saint Barthélemy", number: "652" },
      { code: "SH", code3: "SHN", name: "Saint Helena, Ascension and Tristan da Cunha", number: "654" },
      { code: "KN", code3: "KNA", name: "Saint Kitts and Nevis", number: "659" },
      { code: "LC", code3: "LCA", name: "Saint Lucia", number: "662" },
      { code: "MF", code3: "MAF", name: "Saint Martin (French part)", number: "663" },
      { code: "PM", code3: "SPM", name: "Saint Pierre and Miquelon", number: "666" },
      { code: "VC", code3: "VCT", name: "Saint Vincent and the Grenadines", number: "670" },
      { code: "WS", code3: "WSM", name: "Samoa", number: "882" },
      { code: "SM", code3: "SMR", name: "San Marino", number: "674" },
      { code: "ST", code3: "STP", name: "Sao Tome and Principe", number: "678" },
      { code: "SA", code3: "SAU", name: "Saudi Arabia", number: "682" },
      { code: "SN", code3: "SEN", name: "Senegal", number: "686" },
      { code: "RS", code3: "SRB", name: "Serbia", number: "688" },
      { code: "SC", code3: "SYC", name: "Seychelles", number: "690" },
      { code: "SL", code3: "SLE", name: "Sierra Leone", number: "694" },
      { code: "SG", code3: "SGP", name: "Singapore", number: "702" },
      { code: "SX", code3: "SXM", name: "Sint Maarten (Dutch part)", number: "534" },
      { code: "SK", code3: "SVK", name: "Slovakia", number: "703" },
      { code: "SI", code3: "SVN", name: "Slovenia", number: "705" },
      { code: "SB", code3: "SLB", name: "Solomon Islands", number: "090" },
      { code: "SO", code3: "SOM", name: "Somalia", number: "706" },
      { code: "ZA", code3: "ZAF", name: "South Africa", number: "710" },
      { code: "GS", code3: "SGS", name: "South Georgia and the South Sandwich Islands", number: "239" },
      { code: "SS", code3: "SSD", name: "South Sudan", number: "728" },
      { code: "ES", code3: "ESP", name: "Spain", number: "724" },
      { code: "LK", code3: "LKA", name: "Sri Lanka", number: "144" },
      { code: "SD", code3: "SDN", name: "Sudan (the)", number: "729" },
      { code: "SR", code3: "SUR", name: "Suriname", number: "740" },
      { code: "SJ", code3: "SJM", name: "Svalbard and Jan Mayen", number: "744" },
      { code: "SE", code3: "SWE", name: "Sweden", number: "752" },
      { code: "CH", code3: "CHE", name: "Switzerland", number: "756" },
      { code: "SY", code3: "SYR", name: "Syrian Arab Republic", number: "760" },
      { code: "TW", code3: "TWN", name: "Taiwan", number: "158" },
      { code: "TJ", code3: "TJK", name: "Tajikistan", number: "762" },
      { code: "TZ", code3: "TZA", name: "Tanzania, United Republic of", number: "834" },
      { code: "TH", code3: "THA", name: "Thailand", number: "764" },
      { code: "TL", code3: "TLS", name: "Timor-Leste", number: "626" },
      { code: "TG", code3: "TGO", name: "Togo", number: "768" },
      { code: "TK", code3: "TKL", name: "Tokelau", number: "772" },
      { code: "TO", code3: "TON", name: "Tonga", number: "776" },
      { code: "TT", code3: "TTO", name: "Trinidad and Tobago", number: "780" },
      { code: "TN", code3: "TUN", name: "Tunisia", number: "788" },
      { code: "TR", code3: "TUR", name: "Turkey", number: "792" },
      { code: "TM", code3: "TKM", name: "Turkmenistan", number: "795" },
      { code: "TC", code3: "TCA", name: "Turks and Caicos Islands (the)", number: "796" },
      { code: "TV", code3: "TUV", name: "Tuvalu", number: "798" },
      { code: "UG", code3: "UGA", name: "Uganda", number: "800" },
      { code: "UA", code3: "UKR", name: "Ukraine", number: "804" },
      { code: "AE", code3: "ARE", name: "United Arab Emirates (the)", number: "784" },
      { code: "GB", code3: "GBR", name: "United Kingdom of Great Britain and Northern Ireland (the)", number: "826" },
      { code: "UM", code3: "UMI", name: "United States Minor Outlying Islands (the)", number: "581" },
      { code: "US", code3: "USA", name: "United States of America (the)", number: "840" },
      { code: "UY", code3: "URY", name: "Uruguay", number: "858" },
      { code: "UZ", code3: "UZB", name: "Uzbekistan", number: "860" },
      { code: "VU", code3: "VUT", name: "Vanuatu", number: "548" },
      { code: "VE", code3: "VEN", name: "Venezuela (Bolivarian Republic of)", number: "862" },
      { code: "VN", code3: "VNM", name: "Viet Nam", number: "704" },
      { code: "VG", code3: "VGB", name: "Virgin Islands (British)", number: "092" },
      { code: "VI", code3: "VIR", name: "Virgin Islands (U.S.)", number: "850" },
      { code: "WF", code3: "WLF", name: "Wallis and Futuna", number: "876" },
      { code: "EH", code3: "ESH", name: "Western Sahara", number: "732" },
      { code: "YE", code3: "YEM", name: "Yemen", number: "887" },
      { code: "ZM", code3: "ZMB", name: "Zambia", number: "894" },
      { code: "ZW", code3: "ZWE", name: "Zimbabwe", number: "716" },
      { code: "AX", code3: "ALA", name: "Åland Islands", number: "248" }
  ];



  hospital_info(id:any){

        switch (id) {
        case 'DP':
        this.location_name='ວັດຈີນດົງປ່າແຫຼບ'
        break;

        case 'HF':
          this.location_name='ໂຮງຫມໍ150'
        break;
        case 'ST':
          this.location_name='ໂຮງໝໍເສດຖາ'
        break;
        case 'SS':
          this.location_name='ໂຮງໝໍເມືອງຈັນ​ທະ​ບູ​ລີ'
        break;
        case 'PP':
          this.location_name='ສະມາຄົມຈີນ'
        break;
        case 'CT':
          this.location_name='ໂຮງໝໍເມືອງສີໂຄດຕະບອງ'
        break;
        case 'CC':
          this.location_name='ສະໂມສອນປົກຄອງເມືອງຈັນທະບຸລີ'
        break;
        case 'SS':
          this.location_name='ມ.ຕ ສີໄຄ'
        break;
        case 'SK':
          this.location_name='ສະໂມສອນປົກຄອງເມືອງສີໂຄດຕະບອງ'
        break;
        case 'SH':
          this.location_name='ໂຮງໝໍເມືອງໄຊ​ເສດ​ຖາ'
        break;
        case 'VH':
          this.location_name='ມ.ສ ມິດຕະພາບລາວຫວຽດ'
        break;
        case 'SB':
          this.location_name='ສະໜາມກິລາຮົມບຶງຂະຫຍອງ'
        break;
        case 'NH':
          this.location_name='ໂຮງໝໍເມືອງສີສັດຕະນາກ'
        break;
        case 'EH':
          this.location_name='ໂຮງໝໍນ້ອຍອີໄລ'
        break;
        case 'XH':
          this.location_name='ໂຮງໝໍເມືອງນາຊາຍທອງ'
        break;
        case 'KH':
          this.location_name='ໂຮງໝໍນ້ອຍໂຄດສີວິໄລ'
        break;
        case 'XC':
          this.location_name='ສະໂມສອນປົກຄອງເມືອງໄຊທານີ'
        break;
        case 'HH':
          this.location_name='ໂຮງໝໍເມືອງໄຊທານີ'
        break;
        case 'FH':
          this.location_name='ໂຮງໝໍເມືອງຫາດຊາຍຟອງ(ຕຶກໃໝ້)'
        break;
        case 'AH':
          this.location_name='ໂຮງໝໍນ້ອຍນາສາ'
        break;
        case 'NC':
          this.location_name='ນາຈະເລີນ'
        break;
        case 'RH':
          this.location_name='ໂຮງໝໍເມືອງຫາດຊາຍຟອງ'
        break;
        case 'PH':
          this.location_name='ໂຮງໝໍນ້ອຍປາກຕອນ'
        break;
        case 'GH':
          this.location_name='ໂຮງໝໍເມືອງສັງທອງ'
        break;
        case 'EH':
          this.location_name='ໂຮງໝໍເມືອງປາກງື່ມ(ຈຸດ 2)'
        break;
        case 'DS':
          this.location_name='ດົງໂພສີ'
        break;
        case 'IT':
          this.location_name='ໄອເຕັກ'
        break;
        case 'NH':
          this.location_name='ໂຮງໝໍເມືອງປາກງື່ມ'
        break;

}


}

vacines_info(id:any){
switch (id) {
  case '1':
     this.vaccin_name='Pfizer'
      break;
  case '2':
        this.vaccin_name='AstraZeneca'
      break;
  case '3':
        this.vaccin_name='Sinopharm'
      break;
      case '4':
        this.vaccin_name='Sputnik'
      break;
      case '5':
        this.vaccin_name='Covax'
      break;
      case '6':
        this.vaccin_name='Sinovac'
      break;
      case '7':
        this.vaccin_name='Moderna'
      break;
      case '8':
        this.vaccin_name='Jonhson & Jonhson'
      break;

      }
    }

  province_info(id:any){
    switch (id) {
      case '1':
         this.province_name='ນະຄອນຫຼວງວຽງຈັນ'
          break;
      case '2':
            this.province_name='ຜົ້ງສາລີ'
          break;
      case '3':
            this.province_name='ຫຼວງນ້ຳທາ'
          break;
          case '4':
            this.province_name='ອຸດົມໄຊ'
          break;
          case '5':
            this.province_name='ບໍ່ແກ້ວ'
          break;
          case '6':
            this.province_name='ຫຼວງພະບາງ'
          break;
          case '7':
            this.province_name='ຫົວພັນ'
          break;
          case '8':
            this.province_name='ໄຊຍະບູລີ'
          break;

          case '9':
            this.province_name='ຊຽງຂວາງ'
          break;
          case '10':
            this.province_name='ແຂວງວຽງຈັນ'
          break;
          case '11':
            this.province_name='ບໍລິຄຳໄຊ'
          break;
          case '12':
            this.province_name='ຄຳມ່ວນ'
          break;
          case '13':
            this.province_name='ສະຫວັນນະເຂດ'
          break;
          case '14':
            this.province_name='ສາລະວັນ'
          break;
          case '15':
            this.province_name='ເຊກອງ'
          break;
          case '16':
            this.province_name='ຈຳປາສັກ'
          break;
          case '17':
            this.province_name='ອັດຕະປື'
          break;
          case '18':
            this.province_name='ໄຊສົມບູນ'
          break;

          }
  }


  district_info(id:any){
    switch (id) {
      case '1':
         this.district_name='ຈັນ​ທະ​ບູ​ລີ'
          break;
      case '2':
            this.district_name='ສີ​ໂຄດ​ຕະ​ບອງ'
          break;
      case '3':
            this.district_name='ໄຊ​ເສດ​ຖາ'
          break;
          case '4':
            this.district_name='ສີ​ສັດ​ຕະ​ນາກ'
          break;
          case '5':
            this.district_name='ນາ​ຊາຍ​ທອງ'
          break;
          case '6':
            this.district_name='ໄຊ​ທາ​ນີ'
          break;
          case '7':
            this.district_name='ຫາດ​ຊາຍ​ຟອງ'
          break;
          case '8':
            this.district_name='ສັງ​ທອງ'
          break;

          case '9':
            this.district_name='ປາກ​ງື່ມ'
          break;
          case '10':
            this.district_name='ເມືອງ​ຜົ້ົ້ງ​ສາ​ລີ'
          break;
          case '11':
            this.district_name='ເມືອງ​ໄໝ່'
          break;
          case '12':
            this.district_name='ເມືອງ​ຂວາ'
          break;
          case '13':
            this.district_name='ເມືອງ​ສຳ​ພັນ'
          break;
          case '14':
            this.district_name='ເມືອງ​ບູນ​ເໜືອ'
          break;
          case '15':
            this.district_name='ເມືອງຍອດ​ອູ'
          break;
          case '16':
            this.district_name='ເມືອງ​ບູນ​ໃຕ້'
          break;
          case '17':
            this.district_name='ເມືອງ​ນ້ຳ​ທາ'
          break;
          case '18':
            this.district_name='ເມືອງ​ສິງ'
          break;
          case'19':
          this.district_name='ເມືອງ​ລອງ'
          break;
          case'20':
          this.district_name='ເມືອງວຽງ​ພູ​ຄາ'
          break;
          case'21':
          this.district_name='ເມືອງ​ນາ​ແລ'
          break;
          case'22':
          this.district_name='ເມືອງ​ໄຊ'
          break;
          case'23':
          this.district_name='ເມືອງ​ຫຼາ'
          break;
          case'24':
          this.district_name='ເມືອງນາ​ໝໍ້'
          break;
          case'25':
          this.district_name='ເມືອງ​ງາ'
          break;
          case'26':
          this.district_name='ເມືອງ​ແບ່ງ'
          break;
          case'27':
          this.district_name='ເມືອງ​ຮຸນ'
          break;
          case'28':
          this.district_name='ເມືອງ​ປາກ​ແບ່ງ'
          break;
          case'29':
          this.district_name='ເມືອງ​ຫວ້ຍ​ຊາຍ'
          break;
          case'30':
          this.district_name='ເມືອງ​ຕົ້ົ້ນ​ເຜິ້ງ'
          break;
          case'31':
          this.district_name='ເມືອງ​ເມິງ'
          break;
          case'32':
          this.district_name='ເມືອງ​ຜາ​ອຸ​ດົມ'
          break;
          case'33':
          this.district_name='ເມືອງ​ປາກ​ທາ'
          break;
          case'34':
          this.district_name='ເມືອງ​ຫຼວງ​ພະ​ບາງ'
          break;
          case'35':
          this.district_name='ເມືອງຊຽງ​ເງິນ'
          break;
          case'36':
          this.district_name='ເມືອງ​ນານ'
          break;
          case'37':
          this.district_name='ເມືອງ​ປາກ​ອູ'
          break;
          case'38':
          this.district_name='ເມືອງ​ນ້ຳ​ບາກ'
          break;
          case'39':
          this.district_name='ເມືອງງອຍ'
          break;
          case'40':
          this.district_name='ເມືອງ​ປາກ​ແຊງ'
          break;
          case'41':
          this.district_name='ເມືອງ​ໂພນ​ໄຊ'
          break;
          case'42':
          this.district_name='ເມືອງ​ຈອມ​ເພັດ'
          break;
          case'43':
          this.district_name='ເມືອງວຽງ​ຄຳ'
          break;
          case'44':
          this.district_name='ເມືອງ​ພູ​ຄູນ'
          break;
          case'45':
          this.district_name='ເມືອງ​ຊຳ​ເໜືອ'
          break;
          case'46':
          this.district_name='ເມືອງ​ຊຽງ​ຄໍ້'
          break;
          case'47':
          this.district_name='ເມືອງວຽງ​ທອງ'
          break;
          case'48':
          this.district_name='ເມືອງວຽງ​ໄຊ'
          break;
          case'49':
          this.district_name='ເມືອງ​ຫົວ​ເມືອງ'
          break;
          case'50':
          this.district_name='ເມືອງ​ຊຳ​ໃຕ້'
          break;
          case'51':
          this.district_name='ເມືອງ​ໄຊ​ຍະ​ບູ​ລີ'
          break;
          case'52':
          this.district_name='ເມືອງ​ຄອບ'
          break;
          case'53':
          this.district_name='ເມືອງ​ຫົງ​ສາ'
          break;
          case'54':
          this.district_name='ເມືອງ​ເງິນ'
          break;
          case'55':
          this.district_name='ເມືອງ​ຊຽງ​ຫ​ອ່ນ'
          break;
          case'56':
          this.district_name='ເມືອງ​ພຽງ'
          break;
          case'57':
          this.district_name='ເມືອງ​ປາກ​ລາຍ'
          break;
          case'58':
          this.district_name='ເມືອງ​ແກ່ນ​ທ້າວ'
          break;
          case'59':
          this.district_name='ເມືອງ​ບໍ່​ແຕນ'
          break;
          case'60':
          this.district_name='ເມືອງ​ທົ່ງ​ມີ​ໄຊ'
          break;
          case'61':
          this.district_name='ເມືອງ​ແປກ'
          break;
          case'62':
          this.district_name='ເມືອງ​ຄຳ'
          break;
          case'63':
          this.district_name='ເມືອງ​ໜອງ​ແຮດ'
          break;
          case'64':
          this.district_name='ເມືອງ​ຄູນ'
          break;
          case'65':
          this.district_name='ເມືອງ​ໝອກ​ໄໝ່'
          break;
          case'66':
          this.district_name='ເມືອງ​ພູ​ກູດ'
          break;
          case'67':
          this.district_name='ເມືອງ​ຜາ​ໄຊ'
          break;
          case'68':
          this.district_name='ໂພນ​ໂຮງ'
          break;
          case'69':
          this.district_name='ທູ​ລະ​ຄົມ'
          break;
          case'70':
          this.district_name='​ແກ້ວ​ອຸ​ດົມ'
          break;
          case'71':
          this.district_name='​ກາ​ສີ'
          break;
          case'72':
          this.district_name='ວັງ​ວຽງ'
          break;
          case'73':
          this.district_name='ເຟືອງ'
          break;
          case'74':
          this.district_name='​ຊະ​ນາ​ຄາມ'
          break;
          case'75':
          this.district_name='​ແມດ'
          break;
          case'76':
          this.district_name='​ຫີນ​ເຫີບ'
          break;
          case'77':
          this.district_name='ວຽງ​ຄຳ'
          break;
          case'78':
          this.district_name='ເມືອງ​ປາກ​ຊັນ'
          break;
          case'79':
          this.district_name='ເມືອງ​ທ່າ​ພະ​ບາດ'
          break;
          case'80':
          this.district_name='ເມືອງ​ປາກ​ກະ​ດິງ'
          break;
          case'81':
          this.district_name='ເມືອງ​ບໍ​ລິ​ຄັນ'
          break;
          case'82':
          this.district_name='ເມືອງ​ຄຳ​ເກີດ'
          break;
          case'83':
          this.district_name='ເມືອງວຽງ​ທອງ'
          break;
          case'84':
          this.district_name='ເມືອງ​ທ່າ​ແຂກ'
          break;
          case'85':
          this.district_name='ເມືອງ​ມະ​ຫາ​ໄຊ'
          break;
          case'86':
          this.district_name='ເມືອງ​ໜອງ​ບົກ'
          break;
          case'87':
          this.district_name='ເມືອງ​ຫີນ​ບູນ'
          break;
          case'88':
          this.district_name='ເມືອງ​ຍົມ​ມະ​ລາດ'
          break;
          case'89':
          this.district_name='ເມືອງ​ບົວ​ລະ​ພາ'
          break;
          case'90':
          this.district_name='ເມືອງ​ນາ​ກາຍ'
          break;
          case'91':
          this.district_name='ເມືອງ​ເຊ​ບັ້ງ​ໄຟ'
          break;
          case'92':
          this.district_name='ເມືອງ​ໄຊ​ບົວ​ທອງ'
          break;
          case'93':
          this.district_name='ໄກສອນພົມວິຫານ'
          break;
          case'94':
          this.district_name='ອຸ​ທຸມ​ພອນ'
          break;
          case'95':
          this.district_name='ອາດ​ສະ​ພັງ​ທອງ'
          break;
          case'96':
          this.district_name='​ພິນ'
          break;
          case'97':
          this.district_name='ເຊ​ໂປນ'
          break;
          case'98':
          this.district_name='ນອງ'
          break;
          case'99':
          this.district_name='ທ່າ​ປາງ​ທອງ'
          break;
          case'100':
          this.district_name='ສອງ​ຄອນ'
          break;
          case'101':
          this.district_name='ຈຳ​ພອນ'
          break;
          case'102':
          this.district_name='ຊົນ​ບຸ​ລີ'
          break;
          case'103':
          this.district_name='ໄຊ​ບຸ​ລີ'
          break;
          case'104':
          this.district_name='ສາ​ລະ​ວັນ'
          break;
          case'105':
          this.district_name='ຕະ​ໂອຍ'
          break;
          case'106':
          this.district_name='ຕຸ້ມ​ລານ'
          break;
          case'107':
          this.district_name='ລະ​ຄອນ​ເພັງ'
          break;
          case'108':
          this.district_name='ວາ​ປີ'
          break;
          case'109':
          this.district_name='ຄົງ​ເຊ​ໂດນ'
          break;
          case'110':
          this.district_name='ເລົ່າ​ງາມ'
          break;
          case'111':
          this.district_name='ສະ​ມ່ວຍ'
          break;
          case'112':
          this.district_name='ລະ​ມາມ'
          break;
          case'113':
          this.district_name='ກະ​ລຶມ'
          break;
          case'114':
          this.district_name='ດັກ​ຈຶງ'
          break;
          case'115':
          this.district_name='ປາກ​ເຊ'
          break;
          case'116':
          this.district_name='ຊະ​ນະ​ສົມ​ບູນ'
          break;
          case'117':
          this.district_name='ບາ​ຈຽງ​ຈະ​ເລີນ​ສຸກ'
          break;
          case'118':
          this.district_name='ປາກ​ຊ່ອງ'
          break;
          case'119':
          this.district_name='ປະ​ທຸມ​ພອນ'
          break;
          case'120':
          this.district_name='ໂພນ​ທອງ'
          break;
          case'121':
          this.district_name='ຈຳ​ປາ​ສັກ'
          break;
          case'122':
          this.district_name='ສຸ​ຂຸມ​ມາ'
          break;
          case'123':
          this.district_name='ມູນ​ລະ​ປະ​ໂມກ'
          break;
          case'124':
          this.district_name='ໂຂງ'
          break;
          case'125':
          this.district_name='ໄຊ​ເສດ​ຖາ'
          break;
          case'126':
          this.district_name='ສາ​ມັກ​ຄີ​ໄຊ'
          break;
          case'127':
          this.district_name='ສະ​ໜາມ​ໄຊ'
          break;
          case'128':
          this.district_name='ສານ​ໄຊ'
          break;
          case'129':
          this.district_name='ພູ​ວົງ'
          break;
          case'130':
          this.district_name='ໄຊ​ສົມ​ບູນ'
          break;
          case'131':
          this.district_name='ທ່າ​ໂທມ'
          break;
          case'132':
          this.district_name='ຮົ່ມ'
          break;
          case'133':
          this.district_name='ລ້ອງ​ຊານ'
          break;
          case'134':
          this.district_name='ພູນ'
          break;
          case'135':
          this.district_name='ສົບເບົ້າ'
          break;
          case'136':
          this.district_name='ແອດ'
          break;
          case'137':
          this.district_name='ວິລະບູລີ'
          break;
          case'138':
          this.district_name='ອາດສະພອນ'
          break;
          case'139':
          this.district_name='ໄຊພູທອງ'
          break;
          case'140':
          this.district_name='ທ່າພະລານໄຊ'
          break;
          case'141':
          this.district_name='ທ່າແຕງ'
          break;
          case'142':
          this.district_name='ລອງຊານ'
          break;
          case'143':
          this.district_name='ຮົ່ມ'
          break;
          case'144':
          this.district_name='ໄຊສົມບູນ'
          break;
          case'145':
          this.district_name='ໜື່ນ'
          break;
          case'146':
          this.district_name='ທ່າໂທມ'
          break;
          case'147':
          this.district_name='ເມືອງໄຊຈຳພອນ'
          break;
          case'148':
          this.district_name='ເມືອງ​ໂພນທອງ'
          break;
          case'149':
          this.district_name='ເມືອງຄູນຄຳ'
          break;

          }
  }
  nation_info(id:any){
    switch (id) {
      case '1':
      this.nation_name='ລາວ'
      break;
      case '2':
        this.nation_name=''
      break;
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

