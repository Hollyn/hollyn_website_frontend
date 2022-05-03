import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hd-resume-button',
  templateUrl: './resume-button.component.html',
  styleUrls: ['./resume-button.component.css'],
})
export class ResumeButtonComponent implements OnInit {
  constructor() {}

  downloadCv() {
    window.location.href = 'http://10.0.0.153:3000/api/download-cv';
  }

  ngOnInit(): void {}
}
