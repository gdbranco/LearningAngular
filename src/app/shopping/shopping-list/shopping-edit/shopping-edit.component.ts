import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() onIngredientAdded = new EventEmitter<Ingredient>();
  @Output() onClearIngredients = new EventEmitter<void>();
  addIngredient(name: HTMLInputElement, amount: HTMLInputElement){
    this.onIngredientAdded.emit(new Ingredient(name.value, amount.valueAsNumber));
  }
  clearEvent(){
    this.onClearIngredients.emit();
  }
  constructor() { }

  ngOnInit() {
  }

}
