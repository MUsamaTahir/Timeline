import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './welcome.html',
  styleUrls: ['./welcome.scss']
})

export class WelcomeComponent implements OnInit {

  constructor(    
    private router: Router,
    private authenticationService: AuthenticationService
    ) { }

  ngOnInit() {
  }
  public userSignedIn()
  {
    if (this.authenticationService.currentUserValue) { 
      return true;
    }
   else{
      return false;
   }
  }

  public logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
