import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  // Getting this RECIPE ITEM from the RECIPE LIST
  @Input() recipeItem : Recipe;

  @Output() selectedRecipeItem = new EventEmitter<Recipe>();

  // Calling function when selected RECIPE ITEM
  selectedItem(itemRecipe: Recipe){
    this.selectedRecipeItem.emit(itemRecipe);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
