import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../_services/register.service';
import { LoginService } from '../../_services/login.service';
import { User } from '../../_models/user';
import * as $ from 'jquery';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
  userLogin = new User(0, '', '', '', '', '', '');
  userRegister = new User(0, '', '', '', '', '', '');

  constructor(
    private registerService: RegisterService,
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('token') != null) {
	    this.router.navigate(['./']);
	  }
  }

  onRegister(f) : void {
    this.registerService.storeUser(this.userRegister)
      .subscribe(
        (data: any) => {
          let token = data.data;
          localStorage.setItem('token', token);
          window.alert('You have been successfully registered!');
          this.router.navigate(['./']);
        },
        err => {
          let $element = $('#regAlert');
          $element.html(err.error.error);
          $element.show();
        }
    );
  }

  onLogin(l) : void {
    this.loginService.getUsers(this.userLogin)
      .subscribe(
        (data: any) => {
          let token = data.data;
          localStorage.setItem('token', token);
          this.router.navigate(['./']);
        },
        err => {
          let $element = $('#logAlert');
          $element.html(err.error.error);
          $element.show();
        }
      );
  }

}
