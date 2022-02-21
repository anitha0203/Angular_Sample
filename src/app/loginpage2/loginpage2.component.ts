import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; 
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginpage2',
  templateUrl: './loginpage2.component.html',
  styleUrls: ['./loginpage2.component.sass']
})
export class Loginpage2Component implements OnInit {
  username: string='';
  password: string='';
  mess: string='';
  constructor(private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registrationCard = this.formBuilder.group({
    guestFName: ['', Validators.required],
    emailAddress: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]] }, {
    // Custom Validators can be added here
    });
  }


  loginfrm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  })
  

  onSubmit(pageName:string): void{
    let users = []
    if(localStorage.getItem('user'))
    {
      users = JSON.parse(localStorage.getItem('user') || '{}');
    
    this.mess = JSON.stringify(users.UserName);
    this.username = this.loginfrm.value["username"];
    this.password = this.loginfrm.value['password'];
    console.log(JSON.stringify(users));
    for(var key of users)
    {
       if(this.username === key.UserName && this.password === key.Password)
      {
        console.log('Its working')
        this.router.navigate([`${pageName}`]);

      }
    }
    
  }
  }
  title = 'registration-card';
  registrationCard!: FormGroup;
  isFormSaved = false;
  
  saveCardDetails() {
  this.isFormSaved = true;
  if (this.registrationCard.invalid) {
  return;
  }
  console.log(' Form has Been Saved Successfully');
  }
  get regCard() {
  return this.registrationCard.controls;
  }

  onclick() {
  }
  


}
