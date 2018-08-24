import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import {AppComponent} from "./app.component";
import {PostsComponent}  from './components/posts.component';
import {PostComponent} from './components/post.component'
import {NotFoundComponent} from "./components/not-found.component";
import {PostsService} from './services/posts.service';
import {UsersService} from './services/users.service';


const appRoutes: Routes =[
  { path: '', component: PostsComponent},
  { path: 'post/:id', component: PostComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostsService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
