import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-addemppage',
  templateUrl: './addemppage.component.html',
  styleUrls: ['./addemppage.component.sass']
})
export class AddemppageComponent implements OnInit {
user ={id:'',fname:'',lname:'',dob:'',address:'',designation:'',salary:'' };
message:any;
  constructor(private rtr: Router,private uservice: UserService) { }

  ngOnInit(): void {
  }
  pipe = new DatePipe('en-US');
  mess:string='';
  dob1:any;
  CheckUser() {
    //this.mess = "Details are submitted";
    console.log(this.user.id + '  ' + this.user.lname + '  ' + this.user.dob + '  ' + this.user.fname + '  ' + this.user.address + '  ' + this.user.designation + '  ' + this.user.salary)
    this.getDataFormAPI();
  }
  getDataFormAPI(){
    this.dob1 = this.pipe.transform(this.user.dob, 'Y-m-d')
    this.uservice.getData('api/getCustomerByOrderCount/?fname=' + this.user.fname + '&lname=' + this.user.lname + '&dob=' + 
    this.dob1 + '&address=' + this.user.address + '&designation=' + this.user.designation + '&salary=' + this.user.salary).subscribe((response) => {
       
        console.log('Its Working', response);
        this.message = JSON.stringify(response);
        this.rtr.navigate([`sqldatapage`]);
       // this.message = "Details are submitted";
    }, (error) => {
      console.log('It is a error', error);
    })
  }

  


}
