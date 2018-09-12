import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  providers: [PostsService]
})

export class PaginationComponent implements OnInit, AfterViewInit{

  currentPage: number;
  totalPages: number;
  delta: number = 2;
  left: number;
  right: number;
  range: any = [];
  rangeWithDots: any = [];
  l:number;

  private _totalPosts: number;

  @Input()
  set totalPosts(totalCount: number) {
    this._totalPosts = totalCount;
    this.updatePagination();
  }

  get totalPosts(): number {
    return this._totalPosts;
  }

  constructor(private activateRoute: ActivatedRoute,) {
  }

  ngOnInit() {
    this.addPages();
  }

  ngAfterViewInit() {
    this.addPages();
  }

  addPages() {
    this.activateRoute.params.subscribe( params => {
      this.currentPage = parseInt(params.id, 10);
      this.updatePagination();
    });
  }

  updatePagination() {
    if (this.totalPosts > 0) {
      this.totalPages = this.totalPosts / 10;
      // this.totalPages = 40;
      this.range = [];
      this.rangeWithDots = [];
      this.l = null;
      this.left = this.currentPage - this.delta;
      this.right = this.currentPage + this.delta + 1;
      for (let i = 1; i <= this.totalPages; i++) {
        if (i == 1 || i == this.totalPages || i >= this.left && i < this.right) {
          this.range.push(i);
        }
      }
      for (let i of this.range) {
        if (this.l) {
          if (i - this.l === 3) {
            this.rangeWithDots.push(this.l + 1);
          } else if (i - this.l !== 1) {
            this.rangeWithDots.push('...');
          }
        }
        this.rangeWithDots.push(i);
        this.l = i;
      }
    } else {
      this.totalPages = 0;
    }

  }
}
