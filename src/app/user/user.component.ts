import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {

  constructor() { }

  @Input() public parentObj = "second";  
    
  @Output() public childComponentEvent = new EventEmitter();  
    
  getData(values:any){
    this.childComponentEvent.emit(values);
  }
 
  /* sendData(){  
    this.childComponentEvent.emit('Child Component data');  
  }*/ 
  ngOnInit(): void {
  }

}
