import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; 
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.sass']
})
export class LoginpageComponent implements OnInit {
  username: string='';
  password: string='';
  mess: string='';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }



  loginfrm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  })
  
  login() : void{
    this.router.navigate([`loginpage`]);

  }
  signUp() : void {
    this.router.navigate([`signuppage`]);
  }

  onSubmit(pageName:string): void{
    let users = []
    if(localStorage.getItem('user'))
    {
      users = JSON.parse(localStorage.getItem('user') || '{}');
    
    //this.mess = JSON.stringify(users.UserName);
    this.username = this.loginfrm.value["username"];
    this.password = this.loginfrm.value['password'];
   // console.log(JSON.stringify(users));
    for(var key of users)
    {
      
     // console.log(JSON.stringify(key))
    //  console.log(JSON.stringify(key.UserName) + ' fg  ' + JSON.stringify(this.loginfrm.value["username"]) + '  ' + this.loginfrm.value['password'])
      if(this.username === key.UserName && this.password === key.Password)
      {
        console.log('Its working')
        this.router.navigate([`${pageName}`]);

      }else if(this.username != key.UserName && this.password == key.Password)
      {
        this.mess = 'Enter correct Username';
      }else if(this.username === key.UserName && this.password != key.Password)
      {
        this.mess = 'Enter correct Password';
      }else
      {
        this.mess = 'Enter correct Details';
      }
    }
    
   /* if(this.username === users.UserName && this.password === users.Password)
    {
      this.router.navigate([`${pageName}`]);

    }*/
  }
  }

}
