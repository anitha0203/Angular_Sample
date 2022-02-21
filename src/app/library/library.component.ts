import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; 
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { syntaxError } from '@angular/compiler';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.sass']
})
export class LibraryComponent implements OnInit {

  constructor(private router:Router,private formBuilder: FormBuilder,private uservice: UserService) { }
  
   users = [{ISBN_Code:'', Book_Title:'', Language:'', No_Copies_Actual:'', No_Copies_Current:'', Publication_year:''}]


  ngOnInit(): void {
    this.getDataFormAPI();

  }

  user1:string='';
  getDataFormAPI(){
   // this.dob1 = this.pipe.transform(this.user.dob, 'Y-m-d')
    this.uservice.getData('api/getList1').subscribe((response) => {
       
      //  console.log('Its Working', response);
        this.user1 = JSON.stringify(response);
      //  console.log('users values' + this.user1);
        this.users = JSON.parse(this.user1);
        this.router.navigate([`library`]);
       // this.message = "Details are submitted";
    }, (error) => {
      console.log('It is a error', error);
    })
}
}
