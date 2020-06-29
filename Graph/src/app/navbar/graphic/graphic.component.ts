import { Component, OnInit } from '@angular/core';
import { CardsList } from 'src/app/model/graphic-server';
import { GraphService } from 'src/app/service/graph.service';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css']
})
export class GraphicComponent implements OnInit {
  Cards:CardsList;
  Pages:number[]=[5,10,20];

  parameters = {
    page:1,
    pageSize:5,
  }
  constructor(private service:GraphService) { }

  ngOnInit(): void {
   this.updateAll();
  }

  updateAll(params?:any){
    if(params){
      this.parameters.pageSize = params.pageSize || this.parameters.pageSize;
      this.parameters.page = params.page || this.parameters.page;
    }
    this.service.getAll(this.parameters).subscribe(data=>{
      this.Cards = data;
    });
  }

  changePage(nepage:number){
    this.parameters.page = nepage;
    this.updateAll();
  }

}
