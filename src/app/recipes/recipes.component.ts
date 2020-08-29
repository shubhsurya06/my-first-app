import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipeDetail:Recipe;

  selectedRecipeForDetail(detailRecipe:Recipe){
    this.recipeDetail = detailRecipe;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
