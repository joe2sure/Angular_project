import { Component,OnInit } from "@angular/core";
import { Todo } from '../../models'
import { TodosServices } from "../../service/todos.services";


@Component({
 selector: 'app-todos',
 templateUrl: "./todos.component.html",
 styleUrls:["./todos.component.scss"]
})

export class TodosComponent implements OnInit{
 todoRecords: Todo[] = [];
 constructor(private todoServices: TodosServices){}

 ngOnInit(): void {
  this.getTodoRecords();
 }



 getTodoRecords(): void {
  this.todoRecords = this.todoServices.retrieveTodos();
  console.log('todos', this.todoRecords)
 }
}