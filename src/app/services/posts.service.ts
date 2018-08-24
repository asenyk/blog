import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PostsService {

  private urlPosts: string = 'https://jsonplaceholder.typicode.com/posts';
  private urlUsers: string = 'https://jsonplaceholder.typicode.com/users';
  private urlComments: string = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient){  }
  getPosts(page){
    return this.http.get(this.urlPosts + '?_start=' + page);
  }
  getUsers(){
    return this.http.get(this.urlUsers);
  }
  getComments(postId){
    return this.http.get(this.urlComments + '?postId=' + postId );
  }
  getPostById(postId){
    return this.http.get(this.urlPosts + '/' + postId);
  }
  getUserById(userId){
    return this.http.get(this.urlUsers + '/' + userId);
  }
}
