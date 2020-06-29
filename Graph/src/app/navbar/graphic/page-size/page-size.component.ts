import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page-size',
  templateUrl: './page-size.component.html',
  styleUrls: ['./page-size.component.css']
})
export class PageSizeComponent implements OnInit {
  @Input() pages:number[];
  @Input() activePages:number;
  @Output() pagesChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changePageSize(pageSize){
    this.pagesChange.emit({"pageSize": pageSize, "page": 1});
  }

}
