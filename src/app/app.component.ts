import { Component } from '@angular/core';
import { InfoComponent } from './comp/info/info.component';
import { EducationComponent } from './comp/education/education.component';
import { WorkExperienceComponent } from './comp/work-experience/work-experience.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chris Jackson - Resume';

  info: InfoComponent = new InfoComponent();
  edu: EducationComponent = new EducationComponent(); 
  exp: WorkExperienceComponent = new WorkExperienceComponent();


  infoName: string = this.info.name.valueOf();
  infoPhone: string = this.info.phoneNum.valueOf();
  infoEmail: string = this.info.email.valueOf();
  education: string = this.edu.edu.valueOf();
  expWork: string = this.exp.exp.valueOf();
 
}




