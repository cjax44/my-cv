import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './comp/info/info.component';
import { WorkExperienceComponent } from './comp/work-experience/work-experience.component';
import { EducationComponent } from './comp/education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    WorkExperienceComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
