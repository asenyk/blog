import {Component, OnInit} from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  providers: [PostsService]
})

export class PostsComponent  implements OnInit{
  name: string;
  email: string;
  address: any = [];
  hobbies: string[];
  showHobbies: boolean;
  posts:any =[];

  constructor(private postsService: PostsService){ }

  ngOnInit(){
    this.name = 'John Doe';
    this.email = 'john@gmail.com';
      this.address = {
        street: '12 Main st',
        city: 'Boston',
        state: 'MA'
      };
    this.hobbies = ['Music', 'Movies', 'Sports'];
    this.showHobbies = false;


    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }


  toggleHobbies(){
    this.showHobbies = !this.showHobbies;
  }

  addHobby(hobby: any){
    this.hobbies.push(hobby);
  }

  deleteHobby(i: any){
    this.hobbies.splice(i, 1);
  }
}
