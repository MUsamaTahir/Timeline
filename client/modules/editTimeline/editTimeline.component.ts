import { Component, OnInit } from '@angular/core';
import { TimelineService } from '../services/timeline.service';
import { Timeline } from '../models/timeline.model'
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-editTimeline',
  templateUrl: './editTimeline.component.html',
  styleUrls: ['./editTimeline.component.scss']
})
export class EditTimelineComponent implements OnInit {
  timeline: Timeline = new Timeline();
  timelines: Timeline[] = [];
  editForm: FormGroup;
  loading = false;
  submitted = false;
  constructor(
    private timelineService: TimelineService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.getTimeline();
      this.editForm = this.formBuilder.group({
      'title' : [this.timeline.title],
      'description': [this.timeline.description]
      });
  }
  getTimeline(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.timelineService.getTimelineById(id).pipe(first())
    .subscribe(
        data => {
            this.timelines = data;
            console.log(data);
          },
        error => {
            console.log(error);
        });
  }

  get f() { return this.editForm.controls; }

  onSubmit(){
    const id = +this.route.snapshot.paramMap.get('id');
    alert(this.timeline.title + ' ' + this.timeline.description );
    const timeline ={
      title: this.timeline.title,
      description: this.timeline.description
    }
    this.submitted = true;

        // stop here if form is invalid
        if (this.editForm.invalid) {
            return;
        }

        this.loading = true;
        this.timelineService.updateTimeline(id,this.editForm.value)
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
