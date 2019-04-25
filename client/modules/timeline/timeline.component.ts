import { Component, OnInit } from '@angular/core';
import { TimelineService } from '../services/timeline.service';
import { Timeline } from '../models/timeline.model'
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  timeline: Timeline = new Timeline();
  timelineForm: FormGroup;
  loading = false;
  submitted = false;
  constructor(
    private timelineService: TimelineService,
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService
    ) { }

  ngOnInit() {
    this.timelineForm = this.formBuilder.group({
      'title' : [this.timeline.title,[Validators.required]],
      'description': [this.timeline.description,[Validators.required]]
      });
  }
  get f() { return this.timelineForm.controls; }

  onFormSubmit(){
    alert(this.timeline.title + ' ' + this.timeline.description );
    const timeline ={
      title: this.timeline.title,
      description: this.timeline.description
    }
    this.submitted = true;

        // stop here if form is invalid
        if (this.timelineForm.invalid) {
            return;
        }

        this.loading = true;
        this.timelineService.addTimeline(this.timelineForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    alert('Timeline added successful');
                    this.router.navigate(['/']);
                },
                error => {
                    console.log(error);
                    this.loading = false;
                });

          }
}
