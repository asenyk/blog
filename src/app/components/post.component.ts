import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostsService} from '../services/posts.service';
import {CommentsService, Comments} from "../services/comments.service";

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostsService, CommentsService]
})

export class PostComponent implements OnInit {

  id: number;
  post: any;
  newComment: any = [];

  constructor(private activateRoute: ActivatedRoute,
              private postsService: PostsService,
              private commentsService: CommentsService) {
  }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.params['id'];
    this.getPostData(this.id);
  }

  getPostData(postId) {
    this.postsService.getPostWithComments(postId).subscribe((data) => {
      this.post = data;
      console.log('result:', this.post);
    });
  }

  addComment(newComment: Comments, id: number) {
    newComment.postId = id;
    this.commentsService.postComment(newComment)
      .subscribe((data: Comments) =>  console.log(data));
    this.newComment = [];
  }
}
