import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  name: string = "Chris";
  phoneNum: string = "513-207-4329";
  email: string = "cjax44@gmail.com";

  constructor() {
    
   }

  ngOnInit() {
  }

}
