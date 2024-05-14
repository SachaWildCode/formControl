import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  constructor(private fb: FormBuilder) {}

  userForm = this.fb.group({
    credentials: this.fb.group({
      username: 'JohnDoe',
      email: 'JohnDoe@gmail.com',
      password: 'eeeeee',
    }),
    address: this.fb.group({
      street: 16,
      postalCode: 69870,
      city: 'New York',
    }),
  });

  user!: User;

  createUser($event: Event) {
    $event.preventDefault();

    // Ensure form values are not null or undefined before accessing their properties
    const credentials = this.userForm.value.credentials;
    const address = this.userForm.value.address;

    if (credentials && address) {
      this.user = new User(
        credentials.username!,
        credentials.email!,
        credentials.password!,
        address.postalCode!,
        address.city!,
        address.street!
      );
    }
    return null;
  }
}
