import {Component, EventEmitter, Output} from '@angular/core';
import {categories, Category} from "../categories";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  @Output() categorySell : EventEmitter<string> = new EventEmitter<string>();
  currentCategory : string = "";
  flag : number = 0;

  categories : Category[] = categories;

  selectCategory(name : string) {
    if(name !== "None"){
      this.currentCategory = name;
      this.categorySell.emit(name);
    } else{
      this.currentCategory = "";
      this.categorySell.emit("");
    }

  }

  passInto() {
    this.flag ^= 1;
  }
}
