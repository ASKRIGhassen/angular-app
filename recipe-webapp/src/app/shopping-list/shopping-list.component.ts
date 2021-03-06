import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../commons/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
 ingredients: Ingredient[] = [
   new Ingredient('Apples', 5 , 'piece'),
   new Ingredient('Bananas',  4 , 'piece'),
   new Ingredient('milk', 500, 'ml')
 ];
  constructor() { }

  ngOnInit(): void {
  }

}
