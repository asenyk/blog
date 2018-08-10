import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()

export class PostsService {

  private _url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private _http: HttpClient) {}
  getPosts(){
    return this._http.get(this._url);
  }

}
