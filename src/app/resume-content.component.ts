import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { ResumeService } from "./resume.service";
import 'rxjs/add/operator/switchMap';
import { ResumeWork } from "./classes/resumeWork";


@Component({
    selector: 'resume-content',
    templateUrl: 'resume-content.component.html',
    styleUrls: ['resume-content.component.css']
})

export class ResumeContentComponent implements OnInit {
    resumeItem:string;
    resumeDetail = [];

    constructor(private resumeService: ResumeService, private route:ActivatedRoute) { }

    ngOnInit() { 
        this.route.paramMap
        .switchMap( (params: ParamMap) => { 
            this.resumeItem = params.get('resumeItem'); 
            return this.resumeService.getResumeDetail(params.get('resumeItem'))
        }).subscribe(
            resumeDetail => {
                this.resumeDetail = resumeDetail;
            }
        );
    }

    getObjectKeys(pos:number):string[]{
        return Object.keys(this.resumeDetail[pos]);
    }

    itemIsArray(object):boolean{
        return Array.isArray(object);
    }
}

//