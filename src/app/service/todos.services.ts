import { Injectable } from "@angular/core";
import { todosData } from "../../assets/db/todos-data";
import { Todo } from "../models";

@Injectable({
 providedIn: "root"
})

export  class TodosServices{
 db_todos: Todo[] = [];

 constructor(){
  this.db_todos = todosData;
 }
 
 retrieveTodos(): Todo[]{
  return this.db_todos;
  // let data: Todo[] = [];
  // setTimeout(()=> {
  //  data = this.db_todos;
  // }, 5000)   //where 1sec = 1000milsec (5sec = 5000milsec)
  // return data;
 }

 createTodos(payload: any){
  setTimeout(()=>{
   this.db_todos.push(payload);
  },5000)
 }
}