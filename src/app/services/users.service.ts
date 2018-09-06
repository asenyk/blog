import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, zip} from "rxjs";
import {map} from "rxjs/operators";

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) {
  }

  private urlUsers: string = 'https://jsonplaceholder.typicode.com/users';
  private users: Map<number, Observable<User>> = new Map();

  getUserById(userId) {
    if (this.users.has(userId)) {
      return this.users.get(userId);
    } else {
      const user = this.http.get<User>(this.urlUsers + '/' + userId);
      this.users.set(userId, user);
      return user;
    }
  }

  getUsersList(ids: number[]): Observable<Map<number, User>> {
    return zip(...ids.map(id => this.getUserById(id)), (...args) => [...args]).pipe(
      map(users => {
        const result: Map<number, User> = new Map();
        users.forEach(user => result.set(user.id, user));
        return result;
      })
    );
  }

}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
  }};
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  }
}
