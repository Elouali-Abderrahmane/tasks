import {Component, EventEmitter, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { type TaskData } from "./task-data.model";

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() close = new EventEmitter<void>();
  @Output() newTask = new EventEmitter<TaskData>();
  onClose() {
    this.close.emit();
  }

  enteredTitle = "";
  enteredSummary = "";
  enteredDate = ""

  onCreate() {
    this.newTask.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate
    })
    this.close.emit();
  }

}
