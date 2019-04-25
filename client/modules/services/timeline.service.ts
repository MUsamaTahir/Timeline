import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Timeline } from '../models/Timeline.model';


@Injectable({
  providedIn: 'root'
})
export class TimelineService {
    apiUrl = "http://localhost:8000/api/v1";

  constructor(private http:HttpClient) {  }

getAll() {
    return this.http.get<Timeline[]>(`${this.apiUrl}/timelines/`);
}


getTimeline() {
    return this.http.get<Timeline[]>(`${this.apiUrl}/timelines/timeline`);
}

addTimeline(timeline: Timeline) {
    return this.http.post(`${this.apiUrl}/timelines/timeline`, timeline);
}

updateTimeline(timeline: Timeline) {
    return this.http.put(`${this.apiUrl}/timelines/timeline/${timeline.id}`, timeline);
}

deleteTimeline(id: number) {
    return this.http.delete(`${this.apiUrl}/timelines/timeline/${id}`);
}
}