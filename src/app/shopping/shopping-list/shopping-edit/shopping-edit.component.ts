import { Component, OnInit} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient(name: HTMLInputElement, amount: HTMLInputElement){
    this.shoppinglistService.add([new Ingredient(name.value, amount.valueAsNumber)]);
  }
  onClearShoppingList(){
    this.shoppinglistService.clear();
  }
}
