import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, RouterStateSnapshot } from '@angular/router';

import { Recipe } from './recipe.model';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeService } from './recipe.service';

@Injectable({ providedIn: 'root'})

export class RecipeResolverService implements Resolve<Recipe[]>{

    constructor(private dataStorageService: DataStorageService, private recipeService: RecipeService){}

    resolve(){
        const recipes = this.recipeService.getRecipe();
        if(recipes.length === 0){
            return this.dataStorageService.fetchRecipes()
        }
        else{
            return recipes;
        }
    }

}