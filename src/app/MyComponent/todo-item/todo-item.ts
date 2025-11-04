import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  templateUrl: './todo-item.html',
  styleUrls: ['./todo-item.css'],
  imports: [CommonModule],
})
export class TodoItemComponent implements OnInit {
   @Input() todo!: Todo;
    @Input() i!: number;
   @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
    @Output() todoCheckboxToggle: EventEmitter<Todo> = new EventEmitter();
  constructor() { } 
  ngOnInit(): void {
  }
  onClick(todo:Todo){
  this.todoDelete.emit(todo); 
  console.log("on click has been triggered");
  }
  onCheckboxClick(todo:Todo){
    this.todoCheckboxToggle.emit(todo);

  }
}