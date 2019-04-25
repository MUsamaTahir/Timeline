import { Component, OnInit } from '@angular/core';
import { Timeline } from '../models/timeline.model'
import { TimelineService } from '../services/timeline.service'
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  timelines: Timeline[] = [];
  constructor(
    private timelineService: TimelineService,
    private router: Router,
    private authenticationService: AuthenticationService
    ) { }

  ngOnInit() {
      if (this.authenticationService.currentUserValue) { 
        this.router.navigate(['/']);
      }
      this.loadTimelines();
  }

  private loadTimelines() {
    this.timelineService.getTimeline().pipe(first())
    .subscribe(
        data => {
            this.timelines = data;
            console.log(data);
          },
        error => {
            console.log(error);
        });
  }
 
}
