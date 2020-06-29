import { Component, OnInit } from '@angular/core';
import { ComentsList } from 'src/app/model/coments-server';
import { GraphService } from 'src/app/service/graph.service';
import { ActivatedRoute } from '@angular/router';
import { Coments } from 'src/app/model/coments';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  Coments:ComentsList;

  constructor(private service:GraphService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(data=>{
      let id = data['id'];
      this.service.getComents(id).subscribe(data=>{
        this.Coments = data;
      });
    });
  }

  addComent(coment:Coments){
    this.Coments.results.push(coment);
    this.Coments.count += 1;
  }

}
