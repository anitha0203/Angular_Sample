import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelserviceService } from 'src/app/modelservice.service';
import { usermodel } from '../models/usermodel';

@Component({
  selector: 'app-sqldata',
  templateUrl: './sqldata.component.html',
  styleUrls: ['./sqldata.component.sass']
})
export class SqldataComponent implements OnInit {
  //data$: Observable<usermodel[]> | undefined;

  constructor(private modelservice: ModelserviceService) { }

  ngOnInit(): void {
   // this.data$ = this.modelservice.fetchAll();
  //  console.log("Its Working" + this.data$)

  }

}
