import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { ResumeNavigationComponent } from "./resume-navigation.component";
import { ResumeService } from "./resume.service";
import { ResumeContentComponent } from "./resume-content.component";
import { ResumeHeaderComponent } from "./resume-header.component";

import { ResumeRoutingModule } from "./resume-routing.module";

import { CustomDate } from "./custom-date.pipe";

@NgModule({
  declarations: [
    AppComponent,
    ResumeNavigationComponent,
    ResumeContentComponent,
    CustomDate,
    ResumeHeaderComponent
  ],
  imports: [
    BrowserModule,
    // Contains the URL-routing information
    ResumeRoutingModule,
    HttpModule
  ],
  // Provides the ResumeService as dependency injection to all components
  providers: [ResumeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
