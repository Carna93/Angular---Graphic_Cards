import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Coments } from 'src/app/model/coments';
import { GraphService } from 'src/app/service/graph.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coment-form',
  templateUrl: './coment-form.component.html',
  styleUrls: ['./coment-form.component.css']
})
export class ComentFormComponent implements OnInit {
  formComent:Coments;
  @Output() addComent = new EventEmitter();

  constructor(private service:GraphService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.formComent = new Coments();
  }

  newComent(){
    this.formComent.cards = parseInt(this.route.snapshot.paramMap.get('id'));
    this.formComent.date = (new Date).toISOString();
    this.service.addComent(this.formComent).subscribe(data=>{
      this.formComent = new Coments();
      this.addComent.emit(data);
    });
  }

}
