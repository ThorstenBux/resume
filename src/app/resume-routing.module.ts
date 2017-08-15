import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ResumeContentComponent } from "./resume-content.component";

// The routes of the website and how they match to different components
const routes = [
      { path: "", redirectTo: "/", pathMatch: "full"},
      { path: "resume-content/:resumeItem", component: ResumeContentComponent},
    ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class ResumeRoutingModule {

}
