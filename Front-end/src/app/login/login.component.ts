import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false
  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    if(this.username === '' || this.password === '')
    {
      this.errorMessage = "Username or Password cannot be Empty";
      this.invalidLogin = true;
    }
    else{
      this.hardcodedAuthenticationService.authenticate(this.username, this.password).subscribe(
        response => this.handleSuccessfulResponse(response),
        error => this.handleErrorResponse(error));
       }
      }
  handleSuccessfulResponse(response){
    console.log(response);
    this.errorMessage = response;
    if(response)
    {
      this.username=this.username+" Admin";
    }
  else
  {
    this.username=this.username+" Client";
  } 
  this.router.navigate(['welcome', this.username])
  this.invalidLogin = false;
  sessionStorage.setItem('authenticaterUser', this.username);
}


  handleErrorResponse(error) {
   this.errorMessage = error.error.message;
   this.invalidLogin = true;
  }

}
