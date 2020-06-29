import { Component, OnInit, Input } from '@angular/core';
import { Cards } from 'src/app/model/graphic';
import { GraphService } from 'src/app/service/graph.service';

@Component({
  selector: 'app-graph-list',
  templateUrl: './graph-list.component.html',
  styleUrls: ['./graph-list.component.css']
})
export class GraphListComponent implements OnInit {
  @Input() cards:Cards;

  constructor(private service:GraphService) { }

  ngOnInit(): void {
  }

  vote(grade:number){
    let card = new Cards(this.cards);
    card.grade = grade;
    this.service.updateGrade(card).subscribe(data=>{
      this.cards = data;
    });
  }
}
