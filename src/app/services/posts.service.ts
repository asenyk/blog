import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {map, mergeMap, tap} from 'rxjs/operators';
import {UsersService, User} from './users.service';
import {CommentsService, Comments} from './comments.service';
import {Observable} from "rxjs";

@Injectable()
export class PostsService {

  private urlPosts: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient, private usersService: UsersService, private commentsService: CommentsService) {
  }

  getPosts(page): Observable<PostsData> {
    return this.http
      .get(this.urlPosts + '?_page=' + page, {observe: 'response'})
      .pipe<PostsData>(
        convertPostsResponseToData(),
        fulfillPostsWithUserData(this.usersService)
      );
  }

  getPostWithComments(postId) {
    return this.http
      .get(this.urlPosts + '/' + postId)
      .pipe(
        mapPost(this.usersService),
        addCommentsToPost(this.commentsService)
      );
  }
}

function mapPost(userService) {
  return mergeMap((post: {userId: number}) => {
    return userService.getUserById(post.userId).pipe(
      map((user: User) => ({...post, user}))
    );
  });
}

function addCommentsToPost(commetService) {
  return mergeMap((post: {id: number}) => {
    return commetService.getComments(post.id).pipe(
      map((comments: Comments) => ({...post, comments}))
    );
  })
}

function convertPostsResponseToData() {
  return map((response: HttpResponse<any>) => ({
    posts: response.body,
    totalCount: parseInt(response.headers.get('X-Total-Count'), 10)
  }));
}

function fulfillPostsWithUserData(usersService) {
  return mergeMap((data: PostsData) => {
    const userIds = data.posts.reduce((result, post) => {
      if (!result.includes(post.userId)) {
        result.push(post.userId);
      }
      return result;
    }, []);

    return usersService.getUsersList(userIds).pipe(
      map((users: Map<number, User>)=> ({
        ...data,
        posts: data.posts.map(post => ({...post, user: users.get(post.userId)}))
      }))
    );
  })
}

interface PostsData {
  posts: any[];
  totalCount: number;
}
