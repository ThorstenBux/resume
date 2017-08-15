import { Component, OnInit } from "@angular/core";
import { Resume } from "./classes/resume";
import { ResumeService } from "./resume.service";

@Component({
    selector: "app-resume-header",
    templateUrl: "resume-header.component.html"
})

export class ResumeHeaderComponent implements OnInit {
    resumeDataBasics: {};

    constructor(private resumeService: ResumeService) { }

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
