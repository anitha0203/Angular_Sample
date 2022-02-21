import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-defaultloginpage',
  templateUrl: './defaultloginpage.component.html',
  styleUrls: ['./defaultloginpage.component.sass']
})
export class DefaultloginpageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
   // this.router.navigate([`loginpage`]);
  }

}
