import {Component} from '@angular/core';
import {PostsService} from '../services/posts.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostsService]
})

export class PostComponent {

  id: number;
  post: any = [];
  comments: any = [];
  errorMsg: string;
  user: any;


  constructor(private activateRoute: ActivatedRoute, private postsService: PostsService){
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
  this.postsService.getPostById(this.id)
    .subscribe(resPostsData => this.post = resPostsData,
      resPostsError => this.errorMsg = resPostsError);
  this.postsService.getComments(this.id)
    .subscribe(resPostsData => this.comments = resPostsData,
      resPostsError => this.errorMsg = resPostsError);
  }
  // userById(userId) {
  //     this.postsService.getUserById(userId)
  //       .subscribe(resPostsData => this.user = resPostsData,
  //         resPostsError => this.errorMsg = resPostsError);
  //     return this.user.name;
  //   }

}
