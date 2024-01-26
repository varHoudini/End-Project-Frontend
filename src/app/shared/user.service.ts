import { Injectable } from '@angular/core';
import * as bcrypt from 'bcryptjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  async register(
    last_name: string,
    first_name: string,
    username: string,
    email: string,
    password: string,
    birthday: Date,
    streetname: string,
    houseNumber: number,
    postalcode: any,
    city: string,
    phone: number,
    country: string
  ) {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const user = {
      username: username,
      email: email,
      first_name: first_name,
      last_name: last_name,
      birthday: birthday,
      streetname: streetname,
      houseNumber: houseNumber,
      postalcode: postalcode,
      city: city,
      phone: phone,
      country: country,
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
    return (await fetch('http://localhost:3000/api/users')).json();
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
  async login(username: string, password: string) {
    let users = await this.getUsers();
    let user = users.find(
      (u: { name: string; password: string }) => u.name === username
    );
    if (user && bcrypt.compareSync(password, user.password)) {
      return user.id.toString();
    }
    return null;
  }
}
