import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { Job } from '../../models/jobs.model';

@Component({
  selector: 'hd-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent implements OnInit {
  jobs: Job[] = [];
  jobs$ = new BehaviorSubject<Job[]>([]);

  constructor(private httpService: HttpService) {}

  getJobs() {
    this.httpService.getJobsFromFile().subscribe((res: any) => {
      this.jobs = res;
      this.jobs$.next(res);
    });
  }

  ngOnInit(): void {
    this.getJobs();
  }
}
