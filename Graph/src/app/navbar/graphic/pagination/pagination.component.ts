import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() totalItems:number;
  @Input() pageSize:number;
  @Output() onPageSelected:EventEmitter<number>;
  activePage:number=1;

  getPages():number{
    return Math.ceil(this.totalItems/this.pageSize);
  }

  constructor() { 
    this.onPageSelected = new EventEmitter();
  }

  ngOnInit(): void {
  }

  pageSelected(nepage:number){
    if(nepage>=1 && nepage<=this.getPages()){
      this.activePage = nepage;
      this.onPageSelected.emit(this.activePage);
    }
  }

}
