import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; 
import { UserService } from '../user.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-signuppage1',
  templateUrl: './signuppage1.component.html',
  styleUrls: ['./signuppage1.component.sass']
})
export class Signuppage1Component implements OnInit {
  
  constructor(private router:Router,private formBuilder: FormBuilder,private uservice: UserService) { }
  hide = true;
  ngOnInit(): void {
    this.registrationCard = this.formBuilder.group({
    FirstName: ['', Validators.required],
    LastName: ['', Validators.required],
    Email: ['', [Validators.required, Validators.email]],
    Password: ['', [Validators.required, Validators.minLength(6)]] }, {
    });
  }
  goto(){
    this.router.navigate([`emaillogin`]);
  }
  message:string='';
  getDataFormAPI(){
    this.uservice.getData('api/getDetails/?FirstName=' + this.registrationCard.value.FirstName + '&LastName=' + this.registrationCard.value.LastName
     + '&Email=' + this.registrationCard.value.Email + '&Password=' + this.registrationCard.value.Password).subscribe((response) => {
       
        console.log('Its Working', response);
        this.message = JSON.stringify(response);

    }, (error) => {
      console.log('It is a error', error);
    })
  }

  title = 'registration-card';
  registrationCard!: FormGroup;
  isFormSaved = false;

  saveCardDetails() {
      this.isFormSaved = true;
      if (this.registrationCard.invalid) {
      return;
      }
      console.log('Form has Been Saved Successfully' + JSON.stringify(this.registrationCard.value.FirstName));
      this.getDataFormAPI();
  }
  get regCard() {
      return this.registrationCard.controls;
  }
  

}

