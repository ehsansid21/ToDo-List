import { Component } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todos',
  imports: [CommonModule],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
 
})
export class Todos {
  todos!: Todo[];
  constructor(){
    this.todos = [
      {
        sno: 1,
        title: "This Is Title",
        desc: "This Is Description",
        active: true
      },
      {
        sno: 2,
        title: "This Is Second Title",
        desc: "This Is Second Description",
        active: true
      },
      {
        sno: 3,
        title: "This Is Third Title",
        desc: "This Is Third Description",
        active: false
      }   
    ]
  }

}
