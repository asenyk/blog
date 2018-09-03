import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class CommentsService {

  constructor(private http: HttpClient) {
  }

  private urlComments: string = 'https://jsonplaceholder.typicode.com/comments';

  getComments(postId) {
    return this.http.get(this.urlComments + '?postId=' + postId);
  }

  postComment(comment: Comments) {
    const body = {postId: comment.postId, name: comment.name, body: comment.body, email: comment.email};
    const myHeaders = new HttpHeaders().set('Content-type', 'application/json; charset=UTF-8');
    return this.http.post(this.urlComments, body, {headers:myHeaders});
  }

}

export interface Comments {
  name: string;
  body: string;
  email: string;
  postId: number;
  id: number;
}
