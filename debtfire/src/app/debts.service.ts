import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DebtsService {

  debts = [{"id":1,"borgenar":"Regrant","skuld":36356,"ranta":5.72,"isKronofogden":false,"initskuld":36356},
  {"id":2,"borgenar":"Kanlam","skuld":35782,"ranta":3.71,"isKronofogden":true,"initskuld":35782},
  {"id":3,"borgenar":"It","skuld":44264,"ranta":2.36,"isKronofogden":false,"initskuld":44264},
  {"id":4,"borgenar":"Cookley","skuld":32036,"ranta":3.66,"isKronofogden":true,"initskuld":32036},
  {"id":5,"borgenar":"Tres-Zap","skuld":7040,"ranta":8.04,"isKronofogden":true,"initskuld":7040}];
  constructor() { }

  getdebts () {
    return this.debts;
  }

  addNewDebt(val) {
    console.log(val);
    let obj = {"id":1, "borgenar": val.borgenar, "skuld": val.skuld, "ranta": val.ranta, "isKronofogden": false, "intskuld": val.skuld}
    console.log(obj);
    this.debts.push(val);
  }
}
