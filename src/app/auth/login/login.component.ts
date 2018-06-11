/**
 * Created by RenukaThakurAdmin on 10/06/18.
 */

import { Component, OnInit, Inject } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent {
  form: FormGroup;
  loginForm: any;
  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = fb.group({
      email: ["", Validators.required],
      password: ["" ,Validators.required]
    });
  }
  validateLogin(){
    console.log('clickkkkkk');
    this.router.navigate(['/main/users']);

  }
}
