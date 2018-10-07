import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test recipe', 'testing out', 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?cs=srgb&dl=food-dinner-lunch-70497.jpg&fm=jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
