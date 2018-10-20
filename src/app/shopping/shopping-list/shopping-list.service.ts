import { Ingredient } from "src/app/shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService{
    listChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient("tomatoes", 10),
        new Ingredient("apples", 5)
      ];

    getIngredients(){
        return this.ingredients.slice();
    }

    clear(){
        this.ingredients.splice(0, this.ingredients.length);
        this.listChanged.emit(this.ingredients.slice());
    }

    add(ingredients: Ingredient[]){
        ingredients.forEach(element => {
            this.ingredients.push(element);
        });
        this.listChanged.emit(this.ingredients.slice());
    }

}