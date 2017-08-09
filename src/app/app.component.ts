import { Component, OnInit } from '@angular/core';

import { Resume } from './classes/resume';
import { ResumeService } from "./resume.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ResumeService]
})
export class AppComponent implements OnInit{
  resume: Resume;
  title: string;

  constructor(private resumeService:ResumeService){}

  ngOnInit(): void {
    this.getResume();
  }

  getResume(){
    this.resumeService.getResumeData().then(resumeData => this.resume = resumeData ).then(resumeData => this.initScreen(resumeData));
  }
  initScreen(resumeData){
    this.title = `${this.resume.basics.name}'s resume`;
  }
}
