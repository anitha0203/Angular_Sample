import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; 
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-tookbook',
  templateUrl: './tookbook.component.html',
  styleUrls: ['./tookbook.component.sass']
})
export class TookbookComponent implements OnInit {

  constructor(private router:Router,private uservice: UserService) { }

  ngOnInit(): void {
  }

}
