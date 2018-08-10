import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {PostListComponent} from "./posts/posts-list.component";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [LayoutComponent, FooterComponent, HeaderComponent, PostListComponent],
  exports: [LayoutComponent]
})
export class UiModule { }
