import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { User } from '../models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  username = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  street = new FormControl('');
  postalCode = new FormControl();
  city = new FormControl('');

  user!: User;
  createUser($event: Event) {
    $event.preventDefault();
    this.user = new User(
      this.username,
      this.email,
      this.password,
      this.postalCode,
      this.city,
      this.street
    );
  }
}
