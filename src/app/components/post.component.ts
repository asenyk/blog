import {Component, OnInit} from '@angular/core';
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
  post: any;
  comments: any = [];
  newComment: any = [];
  user: User;


  constructor(private activateRoute: ActivatedRoute,
              private postsService: PostsService,
              private commentsService: CommentsService,
              private usersService: UsersService) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.getPostData(this.id);
  }

  getPostData(postId) {
    this.postsService.getPostWithComments(postId).subscribe((data) => {
      console.log('result:', data);
    });
  }

  addComment(newComment: Comments, id: number) {
    newComment.postId = id;
    this.commentsService.postComment(newComment)
      .subscribe((data: Comments) =>  console.log(data));
    this.newComment = [];
  }
}
