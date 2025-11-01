import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todos } from './MyComponent/todos/todos';

@Component({
  selector: 'app-root',
  imports: [Todos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo-list');
}
