import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ResumeContentComponent } from "./resume-content.component";


const routes = [
      { path: '', redirectTo: '/', pathMatch: 'full'},
      { path: 'resume-content/:resumeItem', component: ResumeContentComponent},
    ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class ResumeRoutingModule{

}