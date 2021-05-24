import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent{

  task: string;
  tasksList: string[] = [];

  constructor() { }

  addTask(): void {
    this.tasksList.push(this.task);
  }

  removeTask(task: string): void {
    const taskIndex = this.tasksList.indexOf(task);
    this.tasksList.splice(taskIndex, 1);
  }

}
