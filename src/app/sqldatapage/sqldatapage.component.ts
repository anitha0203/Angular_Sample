import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; 
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sqldatapage',
  templateUrl: './sqldatapage.component.html',
  styleUrls: ['./sqldatapage.component.sass']
})
export class SqldatapageComponent implements OnInit {
  control: FormControl = new FormControl('');
  profile: string='';
  url_img:string='';
  //url_img = "src\images\Spring-Landscape-Background1.jpg";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  loginfrm = new FormGroup({
    profile: new FormControl()
  })
  addemployee(): void{
    this.router.navigate([`addemppage`]);
  }
  deleteemployee(): void{
    this.router.navigate([`deletepage`]);
  }
  searchemp(){
    console.log(this.profile);
  }  gotoList() {
    this.router.navigate(['/addemppage']);
  }

}
