import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('pizza', 'pizza with cheese and tuna', 'https://live.staticflickr.com/5504/10000243976_7543df847f_b.jpg'),
    new Recipe('pizza', 'pizza with cheese and tuna', 'https://live.staticflickr.com/5504/10000243976_7543df847f_b.jpg')

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
