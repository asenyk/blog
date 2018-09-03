import {Component, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  providers: [PostsService]
})

export class PaginationComponent {

  currentPage: number;
  totalCount: number;
  totalPages: number;
  nextPage: number;
  prePage: number;
  disablePre: boolean;
  disableNext: boolean;

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
      this.nextPage = this.currentPage + 1;
      this.prePage = this.currentPage - 1;
      this.currentPage <= 1 ? this.disablePre = true : this.disablePre = false;
      this.currentPage >= this.totalPages ? this.disableNext = true : this.disableNext = false;
    } else {
      this.totalPages = 0;
    }

  }
}
