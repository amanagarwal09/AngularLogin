import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../app.constants';


@Injectable({
  providedIn: 'root'
})


export class HardcodedAuthenticationService {

  constructor(private http:HttpClient) { }

  authenticate(username, password) {
  return this.http.get(`http://localhost:8080/authenticate/${username}/${password}`);
    }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser')
  }

}
