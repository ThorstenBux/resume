import { Component, OnInit } from '@angular/core';
import { Resume } from "./classes/resume";
import { ResumeService } from "./resume.service";

@Component({
    selector: 'resume-header',
    templateUrl: 'resume-header.component.html'
})

export class ResumeHeader implements OnInit {
    resumeDataBasics: Resume;

    constructor(private resumeService:ResumeService) { }

    ngOnInit() {
        this.getResumeHeaderData();
    }

    getResumeHeaderData(){
        this.resumeService.getResumeDetail('basics').then(resumeData => this.resumeDataBasics = resumeData);
        console.log("Resume Header: " + this.resumeDataBasics);
    }
}