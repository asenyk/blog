import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from "./app.component";
import {PostsComponent}  from './components/posts.component';
import {PostComponent} from './components/post.component'
import {PaginationComponent} from './components/pagination.component'
import {NotFoundComponent} from "./components/not-found.component";
import {PostsService} from './services/posts.service';
import {UsersService} from './services/users.service';
import {CommentsService} from './services/comments.service';

const appRoutes: Routes =[
  { path: '', redirectTo: 'page/1', pathMatch: 'full'},
  { path: 'page/:id', component: PostsComponent},
  { path: 'post/:id', component: PostComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    PaginationComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostsService, UsersService, CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
