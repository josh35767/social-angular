import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  signupEmail: string = "";
  signupFullName: string = "";
  signupPassword: string = "";
  loginEmail: string = "";
  loginPassword: string = "";

  message: string = "";

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  signup() {
    this.auth.signup(
      this.signupEmail,
      this.signupFullName,
      this.signupPassword
    ).then(theUser => {
      console.log(theUser);
      console.log("Sign up Successful!");
    })
    .catch((err) => {
       const parsedError = err.json();
       console.log(parsedError.message);
     });
  }

  login() {
    this.auth.login(
      this.loginEmail,
      this.loginPassword
    ).then(theUser => {
      console.log(theUser);
      console.log("Login Successful.");
      
      this.loginEmail = "";
      this.loginPassword = "";
    })
    .catch((err) => {
      const parsedError = err.json();
      console.log(parsedError.message);
    });
  }

  submitForm(signupForm) {
    console.log(signupForm);
  }

}
