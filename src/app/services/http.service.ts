import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getLatestWorks() {
    return this.http.get(`http://10.0.0.153:3000/api/works/latest`);
  }

  getWorksFromfile() {
    return this.http.get('/assets/data/works.json');
  }

  getJobsFromFile() {
    return this.http.get('/assets/data/jobs.json');
  }
}
