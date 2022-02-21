import { Injectable } from '@angular/core';
import { usermodel } from 'src/app/models/usermodel';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeedataService {

 /* employees: usermodel[] = [  
    {  
      id: 1,  
      name: 'Test Name1',  
      email: 'Test Address'
    },  
    {  
      id: 1,  
      name: 'Test Name2',  
      email: 'Test Address2'  
    },  
    {  
      id: 1,  
      name: 'Test Name3',  
      email: 'Test Address3'
    }  
  ];  
    
  getEmployees(): Observable<usermodel[]> {  
    return of(this.employees);  
  } */
}
