import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  constructor(
    private http: Http
  ) { }

  baseURL = environment.apiBase;

//!req.body.signupEmail || !req.body.signupFullName || !req.body.signupPassword
  signup(emailInput, fullNameInput, passwordInput) {
    return this.http
      .post(
        this.baseURL + 'api/signup',
        {
          signupEmail: emailInput,
          signupFullName: fullNameInput,
          signupPassword: passwordInput
        },
        { withCredentials: true }
      )
      .toPromise()
      .then(res => res.json())
  }

  login(emailInput, passwordInput) {
    return this.http
      .post(
        this.baseURL + 'api/login',
        {
          loginEmail: emailInput,
          loginPassword: passwordInput
        },
        { withCredentials: true }
      )
      .toPromise()
      .then(res => res.json())

  }

}
