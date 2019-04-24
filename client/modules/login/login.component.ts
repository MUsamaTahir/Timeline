import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: LoginModel = new LoginModel();
  loginForm: FormGroup;
  hide=true;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor ( 
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        ) {
          if (this.authenticationService.currentUserValue) { 
            this.router.navigate(['/']);
          }
         }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email':[this.user.email, [Validators.required, Validators.email]],
      'password' : [this.user.password,[Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }

  get f() { return this.loginForm.controls; }


  onLoginSubmit(){
    alert(this.user.email + ' ' + this.user.password);
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.email.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                console.log(error);
                this.loading = false;
            });
  }
}
