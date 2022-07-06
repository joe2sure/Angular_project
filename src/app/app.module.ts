import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './pages/todos/todos.component';
import { TodoComponent } from './pages/todo/todo.component';
import { TodosServices } from './service/todos.services';
import { ApiService } from './service/api.service';
import { Sports } from './providers/sport';
import { SportUiComponent } from './pages/sport-ui/sport-ui.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

 
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoComponent,
    SportUiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    TodosServices,
    ApiService,
    Sports
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
