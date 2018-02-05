import { Component, OnInit } from "@angular/core";
import { Resume } from "./classes/resume";
import { ResumeService } from "./resume.service";
import { ANIMATION_TYPES } from "ngx-loading";



@Component({
    selector: "app-resume-header",
    templateUrl: "resume-header.component.html"
})

export class ResumeHeaderComponent implements OnInit {
    resumeDataBasics: {};
    ANIMATION_TYPES: {};

    constructor(private resumeService: ResumeService) {
        this.ANIMATION_TYPES = ANIMATION_TYPES;
     }

    ngOnInit() {
        this.getResumeHeaderData();
    }

    // Load top 'basics' section from the resume
    getResumeHeaderData() {
        this.resumeService.getResumeDetail("basics").then(
            resumeData => {
                this.resumeDataBasics = resumeData;
            });
    }
}
