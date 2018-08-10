import {Component, OnInit} from "@angular/core";
import {PostsService} from "./posts.service";

@Component({
  selector: 'posts-list',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostsService]
})


export class PostListComponent implements OnInit {
  posts: any = [];
  errorMsg: string;

  constructor(private _postsService: PostsService) {
  }

  ngOnInit() {
    this._postsService.getPosts()
      .subscribe(resPostsData => this.posts = resPostsData,
        resPostsError => this.errorMsg = resPostsError);
  }

}
