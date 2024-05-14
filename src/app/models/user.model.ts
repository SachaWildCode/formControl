import { FormControl } from '@angular/forms';

export class User {
  username: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  postalCode: FormControl<number | null>;
  city: FormControl<string | null>;
  street: FormControl<string | null>;
  constructor(
    username: FormControl<string | null>,
    email: FormControl<string | null>,
    password: FormControl<string | null>,
    postalCode: FormControl<number | null>,
    city: FormControl<string | null>,
    street: FormControl<string | null>
  ) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.postalCode = postalCode;
    this.city = city;
    this.street = street;
  }
}
