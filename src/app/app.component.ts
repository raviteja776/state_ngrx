import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from './tasks/task.model';
import { Store } from '@ngrx/store';
import { addTask, deleteTask, updateTask } from './tasks/task.action';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { AppState } from './store/app.store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngrx_store';
  tasks$:Observable<Task[]>;
  constructor(private store:Store<AppState>) {
      this.tasks$ = this.store.select((state) => state.tasks.tasks);
  }

  addNewTask(len: number) {
    const newTask:Task = {
      id:len+1,
      title:'New Title',
      description:'New Description'
    }

    this.store.dispatch(addTask({task:newTask}));
  }

  updateTask(task:Task) {
    const updatedTask = {...task, title:'Update Task', description:'Updated Description'};
    this.store.dispatch(updateTask({task:updatedTask}));
  }

  deletedTask(id:number) {
    this.store.dispatch(deleteTask({id}));
  }
}
