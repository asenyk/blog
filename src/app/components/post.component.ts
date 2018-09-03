import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostsService} from '../services/posts.service';
import {CommentsService, Comments} from "../services/comments.service";
import {UsersService, User} from '../services/users.service';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostsService, CommentsService]
})

export class PostComponent {

  id: number;
  post: any = [];
  comments: any = [];
  newComment: any = [];
  errorMsg: string;
  user: User;


  constructor(private activateRoute: ActivatedRoute,
              private postsService: PostsService,
              private commentsService: CommentsService,
              private usersService: UsersService) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.postsService.getPostById(this.id)
      .subscribe(resPostsData => this.post = resPostsData,
        resPostsError => this.errorMsg = resPostsError);
    this.commentsService.getComments(this.id)
      .subscribe(resPostsData => this.comments = resPostsData,
        resPostsError => this.errorMsg = resPostsError);
    console.log(this.post)
  }

  userById(userId) {
    this.usersService.getUserById(userId)
      .subscribe(resPostsData => this.user = resPostsData,
        resPostsError => this.errorMsg = resPostsError);
    return this.user.name;
  }

  addComment(newComment: Comments, id: number) {
    newComment.postId = id;
    this.commentsService.postComment(newComment)
      .subscribe((data: Comments) =>  console.log(data));
    this.newComment = [];
  }
}
