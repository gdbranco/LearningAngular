import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("tomatoes", 10),
    new Ingredient("apples", 5)
  ];

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

  clearIngredient(){
    this.ingredients.splice(0, this.ingredients.length);
  }
  constructor() { }

  ngOnInit() {
  }

}
