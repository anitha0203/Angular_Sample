import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; 
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.sass']
})
export class SignuppageComponent implements OnInit {

  user={UserName:'',Password:''};
  constructor(private router:Router) { }
  hide = true;
  ngOnInit(): void {
  }
  signup(){
    this.addItems();
  }
  login() : void{
    this.router.navigate([`loginpage`]);

  }
  signUp4() : void {
    this.router.navigate([`signuppage`]);
  }
  /*email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.user.UserName.hasError('required')) {
      return 'You must enter a value';
    }

    return this.user.UserName.hasError('email') ? 'Not a valid email' : '';
  }*/

  addItems(){
    let exm = [];
    if(localStorage.getItem('user')) {
      exm = JSON.parse(localStorage.getItem('user') || '{}');
      exm = [this.user, ...exm];
    }else {
      exm = [this.user];
    }
    localStorage.setItem('user',JSON.stringify(exm));

  }
}

