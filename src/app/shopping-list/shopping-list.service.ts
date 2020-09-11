import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
    ingredientChanged = new EventEmitter<Ingredient[]>();

    ingredientAdded = new EventEmitter<Ingredient>();

    private ingredientsArray: Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Banana',15)
    ]

    getIngredient(){
        return this.ingredientsArray.slice();
    }

    onAddIngredient(ingredient: Ingredient){
        this.ingredientsArray.push(ingredient);
        // console.log(this.ingredientsArray)
        this.ingredientChanged.emit(this.ingredientsArray.slice());
        // console.log(this.ingredientChanged);
        
    }

    addIngredients(ingredients: Ingredient[]){
        // for(let ingredient of ingredients){
        //     this.onAddIngredient(ingredient);
        // }
        this.ingredientsArray.push(...ingredients);
        this.ingredientChanged.emit(this.ingredientsArray.slice())
    }
}