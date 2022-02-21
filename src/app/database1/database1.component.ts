import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; 
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-database1',
  templateUrl: './database1.component.html',
  styleUrls: ['./database1.component.sass']
})
export class Database1Component implements OnInit {


  message: string='';
  users = {uname:'',age:0,email:'',address:'',phone:'',code:'',table:''};

  constructor(private router:Router,private user: UserService) { }
  ngOnInit(): void {  
  }

  onSubmit(){
    
     console.log(this.users.uname + '  ' +  this.users.age + '  ' + this.users.uname + '  ' + this.users.email + '  ' +this.users.address + '  ' + this.users.phone + '  ' + this.users.code);
     this.getDataFormAPI();
     
 
  }
    getDataFormAPI(){
    this.user.getData('api/getCustomerByOrderCount/?tablename=' + this.users.table).subscribe((response) => {
       
        console.log('Its Working', response);
        this.message = JSON.stringify(response);
    }, (error) => {
      console.log('It is a error', error);
    })
  }
  /*getDataFormAPI(){
    this.user.getData('api/getCustomerByOrderCount/?users=' + this.users).subscribe((response) => {
       
        console.log('Its Working', response);
        this.message = JSON.stringify(response);
    }, (error) => {
      console.log('It is a error', error);
    })
  }*/

}