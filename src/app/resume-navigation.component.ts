import { Component, OnInit } from '@angular/core';
import { ResumeService } from "./resume.service";
import { Router } from "@angular/router";

@Component({
    selector: 'resume-navigation',
    templateUrl: 'resume-navigation.component.html',
    styleUrls: ['resume-navigation.component.css']
})

export class ResumeNavigationComponent implements OnInit {
    selectedNavItem : string;
    navigation: string[];

    constructor(private resumeService: ResumeService, private router: Router) { }

    ngOnInit() { 
        this.getTopLevelResumeEntries(1);
    }

    getTopLevelResumeEntries(from:number=0,to:number=undefined){
        this.resumeService.getTopLevelResumeData(from).then(resumeTopLevelData => this.navigation = resumeTopLevelData );
    }

    onSelectNavItem(item:string){
        this.selectedNavItem = item;
        this.router.navigate(['/resume-content', item]);
  }
}