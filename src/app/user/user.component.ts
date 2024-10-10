import {Component, EventEmitter, Input, Output} from '@angular/core';

import { CardComponent } from '../shared/card/card.component';

import { type User } from "./user.model";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 @Input({required: true}) isActive!: boolean;
 @Input({required: true}) user!: User;
 @Output() selectedUserId = new EventEmitter<string>();
 get pathImage() {
   return `assets/users/${this.user.avatar}`
 }
 onSelectedUser() {
   this. selectedUserId.emit(this.user.id);
 }
}
