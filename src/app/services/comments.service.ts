import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CommentsService {

  constructor(private http: HttpClient) {
  }

  private urlComments: string = 'https://jsonplaceholder.typicode.com/comments';

  getComments(postId) {
    return this.http.get(this.urlComments + '?postId=' + postId);
  }

  postComment(comment: Comments) {
    return this.http.post(this.urlComments, {
      postId: comment.postId,
      name: comment.name,
      body: comment.body,
      email: comment.email
    });
  }

}

export interface Comments {
  name: string;
  body: string;
  email: string;
  postId: number;
  id: number;
}
