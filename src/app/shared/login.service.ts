import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  tokenUrl = 'http://127.0.0.1:8000/api/user/token/';
  user = {};
  token = '';
  headers = new HttpHeaders({'content-type': 'application/json'});

  constructor(private httpClient: HttpClient) { }

  login(userEmail: string, userPassword: string){
    this.user = {'email': userEmail, 'password': userPassword};
    return this.getToken();
  }

  getToken(): Observable<any>{
    if(this.user != {}){
      return this.httpClient.post(this.tokenUrl, this.user, {headers: this.headers});
    }
    else{
      return throwError('Please Log in first');
    }
  }
}
