import { ComentsList } from './../model/coments-server';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { CardsList } from '../model/graphic-server';
import { Cards } from '../model/graphic';
import { Coments } from '../model/coments';


const url = "http://localhost:3000/api/cards";
@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor(private http:HttpClient) { }

  getAll(params?:any):Observable<CardsList>{
    let queryParams = {};
    if(params){
      queryParams = {
        params : new HttpParams().set("page", params.page || '')
        .set("pageSize", params.pageSize || '')
      }
    }
    return this.http.get(url, queryParams).pipe(map(data=>{
      return new CardsList(data);
    }));
  }

  getComents(id:number):Observable<ComentsList>{
    return this.http.get(url+"/"+id+"/comments").pipe(map(data=>{
      return new ComentsList(data);
    }));
  }

  updateGrade(card:Cards):Observable<Cards>{
    return this.http.put(url+"/"+card._id,card).pipe(map(data=>{
      return new Cards(data);
    }));
  }

  addComent(coment:Coments):Observable<Coments>{
    return this.http.post<Coments>(url+"/"+coment._id,coment).pipe(map(data=>{
      return new Coments(data);
    }));
  }


}
