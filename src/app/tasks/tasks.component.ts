import {Component, Input} from '@angular/core';

import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";

import {type TaskData} from "./new-task/task-data.model";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() userId!: string;
  @Input() name?: string;
  tasks = [
    {
      id: "t1",
      userId: "u1",
      title: "Master Angular",
      summary: "Learn all the basic and advanced features of Angular & how to apply them",
      dueDate: "2025-12-31",
    },
    {
      id: "t2",
      userId: "u3",
      title: "Build first prototype",
      summary: "Build a first prototype of the online shop website",
      dueDate: "2024-12-30",
    },
    {
      id: "t3",
      userId: "u3",
      title: "Prepare issue template",
      summary: "Prepare and describe an issue template which will help with project management",
      dueDate: "2025-10-20",
    }
  ]
  constructor() {
    let tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }

  }
  get selectedUserTasks() {
    return this.tasks.filter(task => this.userId === task.userId)!;
  }
  onComplete(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
  isAddingTask = false;
  onIsAddingTask() {
    this.isAddingTask = true;
  }
  onCloseAddingTask() {
    this.isAddingTask = false;
  }
  onAddingNewTask(newTask: TaskData) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.dueDate,
    })
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
