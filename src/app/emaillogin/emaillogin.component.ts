import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; 
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-emaillogin',
  templateUrl: './emaillogin.component.html',
  styleUrls: ['./emaillogin.component.sass']
})
export class EmailloginComponent implements OnInit {
  
  mess: string='';
  constructor(private router:Router,private formBuilder: FormBuilder,private uservice: UserService) { }

  ngOnInit(): void {
    this.registrationCard = this.formBuilder.group({
    FirstName: ['', Validators.required],
    Email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]] }, {
 
    });
  }

  onSubmit(){    
      
  }

  message:string='';

  getDataFormAPI(){
    this.uservice.getData('api/getList/?Email=' + this.registrationCard.value.Email + '&Password=' + this.registrationCard.value.password).subscribe((response) => {
       
        console.log('Its Working', response);
        this.router.navigate([`addemppage`]);
        this.message = JSON.stringify(response);

    }, (error) => {
      console.log('It is a error', error);
      this.mess='You entered correct details';
    })
  }

  title = 'registration-card';
  registrationCard!: FormGroup;
  isFormSaved = false;
  
  saveCardDetails() {
  this.isFormSaved = true;
  if (this.registrationCard.invalid) {
    
    this.mess = 'Enter the Details';
  return;
  }
  this.getDataFormAPI();
  }

  get regCard() {
  return this.registrationCard.controls;
  }

}
