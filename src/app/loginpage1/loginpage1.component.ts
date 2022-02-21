import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-loginpage1',
  templateUrl: './loginpage1.component.html',
  styleUrls: ['./loginpage1.component.sass']
})
export class Loginpage1Component implements OnInit {

  constructor(private fb: FormBuilder) { }
  title: any;

  ngOnInit(): void {
  }
  User: any = ['Super Admin', 'Author', 'Reader'];
  
  onlogin(form: NgForm){  
    console.log(form.value);  
  }  
  

}
