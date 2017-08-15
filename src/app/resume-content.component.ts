import { Component, OnInit, Input} from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Location } from "@angular/common";

import { ResumeService } from "./resume.service";
import "rxjs/add/operator/switchMap";
import { ResumeWork } from "./classes/resumeWork";


@Component({
    selector: "app-resume-content",
    templateUrl: "resume-content.component.html",
    styleUrls: ["resume-content.component.css"]
})

export class ResumeContentComponent implements OnInit {
    resumeItem: string;
    resumeDetail: {};

    // Inject ResumeService and ActivatedRoute into this component
    constructor(private resumeService: ResumeService, private route: ActivatedRoute) { }

    ngOnInit() {
        // Evaluate the URL/route to see the entry point and to load data respectively
        this.route.paramMap
        .switchMap( (params: ParamMap) => {
            this.resumeItem = params.get("resumeItem");
            return this.resumeService.getResumeDetail(params.get("resumeItem"));
        }).subscribe(
            resumeDetail => {
                this.resumeDetail = resumeDetail;
            }
        );
    }

    // Get all the keys of the loaded resume content. Needed to evaluate which key the HTML processes to use the correct styling
    getObjectKeys(pos: number): string[] {
        return Object.keys(this.resumeDetail[pos]);
    }

    // Handle arrays differently in HTML
    itemIsArray(object): boolean {
        return Array.isArray(object);
    }
}

