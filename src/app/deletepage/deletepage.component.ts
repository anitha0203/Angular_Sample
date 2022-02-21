import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { UserService } from '../user.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-deletepage',
  templateUrl: './deletepage.component.html',
  styleUrls: ['./deletepage.component.sass']
})
export class DeletepageComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  
  constructor(private formBuilder: FormBuilder,private router:Router,private uservice: UserService) {

  }
  ngOnInit(): void{
    this.form = this.formBuilder.group({
      number: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
    })
  }  
  get f(){
    return this.form.controls;
  }
  registrationCard!: FormGroup;
  isFormSaved = false;
  submit(){
   // console.log(this.form.value);
    this.delete();
  }
  message:string='';
  mess:any;
  delete(){
    this.uservice.getData('api/deleteRows/?id=' + this.form.value.number).subscribe((response) => {
       
        console.log(response);
        this.router.navigate([`sqldatapage`]);

    }, (error) => {
      console.log('It is a error', error);
    })
  }
}
