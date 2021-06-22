import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/form-service/form.service';
import { Ticket } from './ticket-interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {


  tiketGet:any;
  getTicket: Ticket[]= [];

  constructor(private service:FormService) {


  }

  ngOnInit(): void {
  }

  ticketfun(){

    this.service.getticket(this.tiketGet) //DP-WHWV61ID LHM47VXV
    .subscribe(response=>{

      // console.log("HOOO"+response.Status)
      if (response.Status=='Error') {
        // console.log(response.Status)
        Swal.fire({
          icon: 'error',
          title: 'ບໍ່ພົບຂໍ້ມູນ',
          text: 'ກະລຸນາກວດສອບລະຫັດຂອງທ່ານ',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'ຕົກລົງ'

        })
        this.tiketGet=='';
        return this.getTicket=[];
      }else if(response.Status=='success'){
        // console.log("Hello"+response.Status)

        return this.getTicket=response.Result;
      }
      // this.disease=response;

    })
  }

}
