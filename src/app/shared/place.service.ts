import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  token = 'e7be9ede056065d9e49c3fcae918a5ddbe49a73a';
  placeUrl = 'http://127.0.0.1:8000/api/place/';
  headers = new HttpHeaders({'content-type': 'application/json'});

  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService) { }

  listPlaceType(): Observable <any>{
    // this.loginService.getToken().subscribe(
    //   data => {
    //     console.log(data);
    //     this.token = data.token;
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
    return this.httpClient.get(this.placeUrl + 'placetype/', {headers: new HttpHeaders({'content-type': 'application/json', 'authorization': this.token})});
  }

  addPlaceType(name: string): Observable <any>{
    return this.httpClient.post(this.placeUrl + 'placetype/', {'name': name}, {headers: new HttpHeaders({'content-type': 'application/json', 'authorization': this.token})});
  }
}
