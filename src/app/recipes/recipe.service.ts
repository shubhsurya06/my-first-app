import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';


@Injectable()
export class RecipeService{

    selectedRecipe = new EventEmitter<Recipe>();

    recipesChanged = new Subject<Recipe[]>();

    // private recipes: Recipe[] = [
    //     new Recipe(
    //         'Samosa', 
    //         'I like samosa. It is made up of aloo and in pyramidal shape.', 
    //         'https://i.ytimg.com/vi/k07vro65OWY/maxresdefault.jpg',
    //         [
    //             new Ingredient('Aloo', 20),
    //             new Ingredient('Matar', 25),
    //             new Ingredient('Oil',30)
    //         ]),
    //     new Recipe(
    //         'AalooBonda', 
    //         'Aloo bonda is also made up of aloo, but its in circular shape.', 
    //         'https://rasamtales.com/wp-content/uploads/2019/09/aloo-bonda-simplytadka1.jpg',
    //         [
    //             new Ingredient('Sambhar', 40),
    //             new Ingredient('Kadhi Patta', 5)
    //         ])
    // ];

    private recipes: Recipe[] = []

    constructor(private slService: ShoppingListService){}

    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    // As we have make 'RECIPES' array a private, so we can't access it from outside
    getRecipe(){
        // .slice() method here, copies the recipes array and we are returning it from here. We are not providing original array
        return this.recipes.slice();
    }
    
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    getRecipes(index: number){
        return this.recipes[index];
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, recipe: Recipe){
        this.recipes[index] = recipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
    }

}