import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Samosa', 'I like samosa. It is made up of aloo and in pyramidal shape.', 'https://i.ytimg.com/vi/k07vro65OWY/maxresdefault.jpg'),
    new Recipe('AalooBonda', 'Aloo bonda is also made up of aloo, but its in circular shape.', 'https://rasamtales.com/wp-content/uploads/2019/09/aloo-bonda-simplytadka1.jpg')
  ];

  @Output() detailedRecipe = new EventEmitter<Recipe>();

  onSelectedRecipe(selectedRecipe:Recipe){
    this.detailedRecipe.emit(selectedRecipe);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
