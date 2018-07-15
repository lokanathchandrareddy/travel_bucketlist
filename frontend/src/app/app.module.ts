import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewListComponent } from './new-list/new-list.component';
import { DisplayListComponent } from './display-list/display-list.component';

import { ListService } from './service/list.service';

@NgModule({
  declarations: [
    AppComponent,
    NewListComponent,
    DisplayListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
