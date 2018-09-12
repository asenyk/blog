import {Component, OnInit} from '@angular/core';
import {PostsService} from '../services/posts.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostsService]
})

export class PostsComponent  implements OnInit {
  posts: any;
  user: any = {};
  p: number;
  totalPosts: number;

  constructor(private postsService: PostsService, private activateRoute: ActivatedRoute){
  }

  ngOnInit() {
    this.activateRoute.params.subscribe( params => {
      this.p = parseInt(params.id, 10);
      this.postByPage(this.p);
    });
  }

  postByPage(page) {
    this.postsService.getPosts(page).subscribe((data) => {
      this.posts = data.posts;
      this.totalPosts = data.totalCount;
    });
  }

}
