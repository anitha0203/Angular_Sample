import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup1',
  templateUrl: './signup1.component.html',
  styleUrls: ['./signup1.component.sass']
})
export class Signup1Component implements OnInit {
   //user: User = new User;
  user={UserName:'',Password:''}
   //user = Array<{ UserName: string;Password: string }>;
  // employee:any;
   // employee: { emp_id: number, emp_name: string, emp_desg: string }[];

   emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
   // this.resetForm();
  }
/*  resetForm(form?:NgForm)
  {
    if(form!=null)
    form.reset();
    this.user={
      UserName:'',
      Password:'',
      CPassword:''
    }
  }*/

submit(){
  //localStorage.clear();
 // localStorage.setItem("UserName",JSON.stringify(this.user));
  this.addUser();
  
}
addUser(){
  let exm = [];
  if(localStorage.getItem('user')) {
    exm = JSON.parse(localStorage.getItem('user') || '{}');
    exm = [this.user, ...exm];
  }else {
    exm = [this.user];
  }
  localStorage.setItem('user',JSON.stringify(exm));
}

  onSubmit(form:NgForm){
    //localStorage.setItem("UserName","Anitha")
     //this.userService.registerUser(form.value)
     //.subscribe((data:any)=>{
     //  if(data.Succeeded == true)
     //  {
     //    this.resetForm(form);
    //   }
    // })
  }

}
