import {Component, EventEmitter, Input, Output} from '@angular/core';

import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) title!: string;
  @Input({required: true}) time!: string;
  @Input({required: true}) summary!: string;
  @Input({required: true}) taskId!: string;
  @Output() complete = new EventEmitter();
  onComplete() {
    this.complete.emit(this.taskId);
  }
}
