export class User {
  username: string;
  email: string;
  password: string;
  postalCode: number;
  city: string;
  street: number;
  constructor(
    username: string,
    email: string,
    password: string,
    postalCode: number,
    city: string,
    street: number
  ) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.postalCode = postalCode;
    this.city = city;
    this.street = street;
  }
}
