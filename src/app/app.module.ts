import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecepesComponent } from './recepes/recepes.component';
import { RecepeDetailComponent } from './recepes/recepeDetail/recepeDetail.component';
import { RecepeListComponent } from './recepes/recepeList/recepeList.component';
import { RecepeItemComponent } from './recepes/recepeList/recepeItem/recepeItem.component';

import { shoppingListComponent } from './shoppingList/shoppingList.component';
import { ShoppingEditComponent } from './shoppingList/shoppingEdit/shoppingEdit.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeaderComponent, RecepesComponent, RecepeListComponent, RecepeItemComponent, RecepeDetailComponent,
  ShoppingEditComponent, shoppingListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
