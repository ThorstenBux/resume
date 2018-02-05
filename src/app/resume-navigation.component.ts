import { Component, OnInit } from "@angular/core";
import { ResumeService } from "./resume.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-resume-navigation",
    templateUrl: "resume-navigation.component.html",
    styleUrls: ["resume-navigation.component.css"]
})

export class ResumeNavigationComponent implements OnInit {
    selectedNavItem: string;
    navigation: string[];

    constructor(private resumeService: ResumeService, private router: Router) { }

    ngOnInit() {
        this.getTopLevelResumeEntries(1);
    }

    // Load top level entries and use them for navigation
    getTopLevelResumeEntries(from: number= 0, to?: number) {
        this.resumeService.getTopLevelResumeData().then(
            resumeTopLevelData => {
                this.navigation = resumeTopLevelData.slice(from, to);
                console.log(this.navigation);
            }
        );
    }

    onSelectNavItem(item: string) {
        this.selectedNavItem = item;
        this.router.navigate(["/resume-content", item]);
  }
}
