import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  // Getting this RECIPE ITEM from the RECIPE LIST
  @Input() recipeItem : Recipe;

  @Input() index: number;

  // @Output() selectedRecipeItem = new EventEmitter<Recipe>();
  
  constructor(private recipeService: RecipeService) { }

  // Calling function when selected RECIPE ITEM
  // selectedItem(){
  //   // this.selectedRecipeItem.emit(itemRecipe);
  //   this.recipeService.selectedRecipe.emit(this.recipeItem);
  // }

  ngOnInit(): void {
  }

}
