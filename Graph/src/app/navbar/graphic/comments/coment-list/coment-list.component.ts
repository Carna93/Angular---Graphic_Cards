import { Component, OnInit, Input } from '@angular/core';
import { Coments } from 'src/app/model/coments';

@Component({
  selector: 'app-coment-list',
  templateUrl: './coment-list.component.html',
  styleUrls: ['./coment-list.component.css']
})
export class ComentListComponent implements OnInit {
  @Input() coment:Coments;
  
  constructor() { }

  ngOnInit(): void {
  }

}
