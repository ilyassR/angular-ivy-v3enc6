import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecepesComponent } from './recepes/recepes.component';
import { RecepeDetailComponent } from './recepes/recepeDetail/recepeDetail.component';
import { RecepeListComponent } from './recepes/recepeList/recepeList.component';
import { RecepeItemComponent } from './recepes/recepeList/recepeItem/recepeItem.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeaderComponent, RecepesComponent, RecepeListComponent, RecepeItemComponent, RecepeDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
