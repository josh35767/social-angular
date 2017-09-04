import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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
    private auth: AuthService,
    private router: Router
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
      this.router.navigate(['/profile'])
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
