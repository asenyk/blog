import {Component, OnInit} from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  providers: [PostsService]
})

export class PostsComponent  implements OnInit{
  posts: any = [];
  comments: any = [];
  users: any = [];
  showPost: any = {};
  errorMsg: string;

  constructor(private postsService: PostsService){ }

  ngOnInit() {
    this.postsService.getPosts()
      .subscribe(resPostsData => this.posts = resPostsData,
        resPostsError => this.errorMsg = resPostsError);

    this.postsService.getUsers()
      .subscribe(resPostsData => this.users = resPostsData,
        resPostsError => this.errorMsg = resPostsError);

    this.postsService.getComments()
      .subscribe(resPostsData => this.comments = resPostsData,
        resPostsError => this.errorMsg = resPostsError);
  }
}
