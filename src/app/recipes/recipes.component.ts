import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from './recipe.service';

import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  recipeDetail:Recipe;

  // selectedRecipeForDetail(detailRecipe:Recipe){
  //   this.recipeDetail = detailRecipe;
  // }

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.selectedRecipe.subscribe(
      (recipe: Recipe) => {
        this.recipeDetail = recipe;
      }
    );
  }

}
