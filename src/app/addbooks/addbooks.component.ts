import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; 
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.sass']
})
export class AddbooksComponent implements OnInit {

  mess: string='';
  constructor(private router:Router,private uservice: UserService) { }

  ngOnInit(): void {
  }


  loginfrm = new FormGroup({
    ISBN_Code: new FormControl(),
    Book_Title: new FormControl(),
    Language: new FormControl(),
    No_Copies_Actual: new FormControl(),
    No_Copies_Current: new FormControl(),
    Publication_year: new FormControl()
  })
message:string='';
  getDataFormAPI(){
    this.uservice.getData('api/addBooks/?ISBN_Code=' + this.loginfrm.value.ISBN_Code + '&Book_Title=' + this.loginfrm.value.Book_Title + 
    '&Language=' + this.loginfrm.value.Language + '&No_Copies_Actual=' + this.loginfrm.value.No_Copies_Actual + '&No_Copies_Current=' + 
    this.loginfrm.value.No_Copies_Current + '&Publication_year=' + this.loginfrm.value.Publication_year).subscribe((response) => {
       
        console.log('Its Working', response);
        this.message = JSON.stringify(response);
        this.router.navigate([`library`]);
    }, (error) => {
      console.log('It is a error', error);
    })
  console.log(this.loginfrm.value.ISBN_Code)
  }

  //addBooks/?ISBN_Code=0012&Book_Title=Data Structures&Language=English&No_Copies_Actual=12&No_Copies_Current=08&Publication_year=2001
  onSubmit(): void{
  this.getDataFormAPI();
  }


}
