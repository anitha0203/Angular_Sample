import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; 
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../user.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-addstudentdetails',
  templateUrl: './addstudentdetails.component.html',
  styleUrls: ['./addstudentdetails.component.sass']
})
export class AddstudentdetailsComponent implements OnInit {
  mess: string='';
  pipe = new DatePipe('en-US');
  dob:any;
  constructor(private router:Router,private uservice: UserService) { }

  ngOnInit(): void {
  }


  loginfrm = new FormGroup({
    Student_Id: new FormControl(),
    Student_Name: new FormControl(),
    Gender: new FormControl(),
    Date_Of_Birth: new FormControl(),
    Borrower_Id: new FormControl(),
    Department: new FormControl(),
    contact_Number:new FormControl()
  })
message:string='';
  getDataFormAPI(){
    this.dob = this.pipe.transform(this.loginfrm.value.Date_Of_Birth, 'Y-m-d')
    this.uservice.getData('api/addStuDetails/?Student_Id=' + this.loginfrm.value.Student_Id + '&Student_Name=' + this.loginfrm.value.Student_Name + 
    '&Sex=' + this.loginfrm.value.Gender + '&Date_Of_Birth=' + this.dob + '&Borrower_Id=' + 
    this.loginfrm.value.Borrower_Id + '&Department=' + this.loginfrm.value.Department + '&contact_Number=' + this.loginfrm.value.contact_Number).subscribe((response) => {
       
        console.log('Its Working', response);
        this.message = JSON.stringify(response);
       // this.router.navigate([`library`]);
    }, (error) => {
      console.log('It is a error', error);
    })
  console.log(this.loginfrm.value.Gender)
  }

  onSubmit(): void{
  this.getDataFormAPI();
  }
}
