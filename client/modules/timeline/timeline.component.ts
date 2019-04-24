import { Component, OnInit } from '@angular/core';
import { PostModel } from '../models/post.model';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  posts: PostModel []= [
  ] 
  constructor() { }

  ngOnInit() {
    
    
  }

}
