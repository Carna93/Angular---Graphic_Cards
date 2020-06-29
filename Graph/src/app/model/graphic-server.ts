import { Cards } from './graphic';
export class CardsList{
    count:number;
    results:Cards[];
    constructor(obj?:any){
        this.count = obj && obj.count || null;
        this.results = obj && obj.results.map(data=>{
            return new Cards(data);
        }) || [];
    }
}