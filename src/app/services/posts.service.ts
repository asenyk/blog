import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PostsService {

  private urlPosts: string = 'https://jsonplaceholder.typicode.com/posts';
  private urlUsers: string = 'https://jsonplaceholder.typicode.com/users';
  private urlComments: string = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient){  }
  getPosts(){
    return this.http.get(this.urlPosts);
  }
  getUsers(){
    return this.http.get(this.urlUsers);
  }
  getComments(){
    return this.http.get(this.urlComments);
  }
}
