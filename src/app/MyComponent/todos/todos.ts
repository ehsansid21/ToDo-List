import { Component } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item';
import { AddTodo } from "../add-todo/add-todo";

@Component({
  selector: 'app-todos',
  imports: [CommonModule, TodoItemComponent, AddTodo],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
 
})
export class Todos {
  localItem!:string;
  todos!: Todo[];
  constructor(){
    this.localItem=localStorage.getItem("todos")!;
    if(this.localItem==null){
      this.todos=[];
      }else{
        this.todos=JSON.parse(this.localItem);    
    }
    
  }
  deleteTodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  addTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  toggleTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
}
