import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { RegisterModel } from '../models/register.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  
  user: RegisterModel = new RegisterModel();
  registerForm: FormGroup;
  hide=true;
  loading = false;
  submitted = false;

  constructor( 
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      'name' : [this.user.name,[Validators.required]],
      'email':[this.user.email, [Validators.required, Validators.email]],
      'password' : [this.user.password,[Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    });

    if (this.authenticationService.currentUserValue) { 
      this.router.navigate(['/']);
  }
  }
  get f() { return this.registerForm.controls; }

  onRegisterSubmit(){
    alert(this.user.name + ' ' + this.user.email + ' ' + this.user.password);
    const user ={
      name: this.user.name,
      email: this.user.email,
      password: this.user.password
    }
    this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    alert('Registration successful');
                    this.router.navigate(['/login']);
                },
                error => {
                    console.log(error);
                    this.loading = false;
                });

          }
}
