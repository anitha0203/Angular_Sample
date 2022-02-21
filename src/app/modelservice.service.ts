import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { usermodel } from './models/usermodel';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ModelserviceService {
  private url = "http://localhost:3001/";
  ValidateUser(_username: any,_password: any) {
    return true;
  }

  constructor(private http: HttpClient) { }

  fetchAll(): Observable<usermodel[]> {
    return this.http
    .get<usermodel[]>(this.url, { responseType: "json"})
    .pipe(tap((_) => console.log("fecthed data")));
  }
  
}
