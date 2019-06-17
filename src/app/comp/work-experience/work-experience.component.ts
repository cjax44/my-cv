import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product.class'

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  exp: string = "Director of Technology - STG Development Group"
  hide: boolean = true;
  products: Product[] = [];

  constructor() {
   
   }

  ngOnInit() {
    //create 5 products
    //put them into 
    this.products = [new Product(1, "sql", "SQL Book", 42.99),
                     new Product(2, "java", "Java Book", 45.99),
                     new Product(3, "php", "PHP Book", 35.99),
                     new Product(4, "spring", "Spring Book", 44.99),
                     new Product(5, "hrml", "HTML Book", 25.99)]
  }

  logIt() {
    console.log("log button pressed");
  }

}
