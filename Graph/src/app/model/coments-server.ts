import { Coments } from './coments';
export class ComentsList{
    count:number;
    results:Coments[];
    constructor(obj?:any){
        this.count = obj && obj.count || null;
        this.results = obj && obj.results.map(data=>{
            return new Coments(data);
        }) || [];
    }
}