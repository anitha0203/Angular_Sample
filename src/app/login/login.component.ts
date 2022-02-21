import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
  mess: string='';
  constructor(private router:Router) { }


  ngOnInit(): void {
  }
  login() : void{
    this.router.navigate([`login1`]);

  }

  signUp() : void {
    this.router.navigate([`signup1`]);
  }

  loginUser(pageName:string): void{
    let users = JSON.parse(localStorage.getItem('user') || '{}');
    this.mess = users.UserName;
    console.log(users.UserName);
    if(this.username==users.UserName && this.password==users.Password)
    {
      this.router.navigate([`${pageName}`]);

    }
    /*else if(this.username!=users.UserName && this.password==users.Password)
    {
      this.username = '';
      this.mess = 'Enter correct Username';
    }else if(this.password!=users.UserName && this.username==users.Password)
    {
      this.password = '';
      this.mess = 'Enter correct Password';
    }else
    {
      this.username='';
      this.password='';
      this.mess='Enter correct Username and Password'
    }*/
  }

}
