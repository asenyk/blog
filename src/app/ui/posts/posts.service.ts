import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()

export class PostsService {

  private _urlPosts: string = 'https://jsonplaceholder.typicode.com/posts';
  private _urlUsers: string = 'https://jsonplaceholder.typicode.com/posts';
  private _urlComments: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private _http: HttpClient) {}
  getPosts(){
    return this._http.get(this._urlPosts);
  }
  getUsers(){
    return this._http.get(this._urlUsers);
  }
  getComments(){
    return this._http.get(this._urlComments);
  }

}
