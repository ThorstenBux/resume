import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResumeNavigationComponent } from "./resume-navigation.component";
import { ResumeService } from "./resume.service";
import { ResumeContentComponent } from "./resume-content.component";
import { ResumeHeader } from "./resume-header.component";

import { ResumeRoutingModule } from "./resume-routing.module";

import { CustomDate } from "./custom-date.pipe";

@NgModule({
  declarations: [
    AppComponent,
    ResumeNavigationComponent,
    ResumeContentComponent,
    CustomDate,
    ResumeHeader
  ],
  imports: [
    BrowserModule,
    ResumeRoutingModule
  ],
  providers: [ResumeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
