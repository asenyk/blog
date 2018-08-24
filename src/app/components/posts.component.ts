import {Component, OnInit} from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostsService]
})

export class PostsComponent  implements OnInit{
  posts: any;
  user: any = {};
  errorMsg: string;
  p: number = 1;
  totalPosts: any;
  collection: any[] = this.posts;

  constructor(private postsService: PostsService){ }

  ngOnInit() {
    this.postByPage(this.p);
  }

  // userById(userId) {
  //   this.postsService.getUserById(userId)
  //     .subscribe(resPostsData => this.user = resPostsData,
  //       resPostsError => this.errorMsg = resPostsError);
  //   return this.user.name;
  // }

  postByPage(page) {
    this.postsService.getPosts(page)
      .subscribe(resPostsData => {
        this.posts = resPostsData;
        // console.log(resPostsData.header.getAll('X-Total-Count'));
        // this.totalPosts = resPostsData.header.get('X-Total-Count');
      });

  }

}
