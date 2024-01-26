import { Injectable } from '@angular/core';
import * as bcrypt from 'bcryptjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  async register(
    first_name: string,
    last_name: string,
    birthday: Date,
    streetname: string,
    houseNumber: number,
    postalcode: number,
    city: string,
    country: string,
    email: string,
    phone: number,
    username: string,
    password: string,
  ) {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const user = {
      first_name: first_name,
      last_name: last_name,
      birthday: birthday,
      streetname: streetname,
      houseNumber: houseNumber,
      postalcode: postalcode,
      city: city,
      country: country,
      email: email,
      phone: phone,
      username: username,
      password: hashedPassword,
    };
    console.log(user);
    const result = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    return result.json();
  }

  constructor() {}
  // Dummy users wich we can replace with actual api called users
  // https://emn178.github.io/online-tools/sha256.html
  /* users = [
        { id: 1, username: 'johndoe', password: '280d44ab1e9f79b5cce2dd4f58f5fe91f0fbacdac9f7447dffc318ceb79f2d02' },
        { id: 2, username: 'janedoe', password: '280d44ab1e9f79b5cce2dd4f58f5fe91f0fbacdac9f7447dffc318ceb79f2d02' },
    ]; */

  // Returns all users

  async getUsers() {
    return (await fetch('http://localhost:3000/api/userAccounts')).json();
  }

  // delete user
  /*
    async deleteUser(id: number) {
        return (await fetch('http://localhost:8000/api/users/' + id, {
            method: 'DELETE'
        })).json()
    } */

  // delete user with fetch() method no async await

  deleteUserFetch(id: number) {
    fetch('http://localhost:3000/api/users/' + id, {
      method: 'DELETE',
    });
  }

  // Checks user credentials and returns a valid token or null
  async login(username_id: string, plainTextPassword: string) {
  let users = await this.getUsers();
  let user = users.find(
    (u: { username_id: string; password_hash: string }) => u.username_id === username_id
  );

  if (user && bcrypt.compareSync(plainTextPassword, user.password_hash)) {
    return user.id.toString();
  }
  return null;
}
}
