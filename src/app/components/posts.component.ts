import {Component, OnInit} from '@angular/core';
import {PostsService} from '../services/posts.service';
import {UsersService} from "../services/users.service";

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostsService, UsersService]
})

export class PostsComponent  implements OnInit{
  posts: any;
  user: any = {};
  p: number = 1;
  totalPosts: any;
  collection: any[] = this.posts;

  constructor(private postsService: PostsService, private usersService: UsersService){ }

  ngOnInit() {
    this.postByPage(this.p);
  }

  postByPage(page) {
    this.postsService.getPosts(page)
      .subscribe((data) => {
        this.posts = data.posts;
        this.totalPosts = data.totalCount;
      });
  }

}
