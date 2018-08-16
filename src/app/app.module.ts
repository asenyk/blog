import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination'
import {AppComponent} from "./app.component";
import {PostsComponent}  from './components/posts.component';
import {PostsService} from './services/posts.service'

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
