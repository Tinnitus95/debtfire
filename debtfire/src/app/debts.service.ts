import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DebtsService {

  debts = [{'id': 1, 'borgenar': 'Cardify', 'skuld': 163064, 'ranta': 23.35, 'isKronofogden': true},
    {'id': 2, 'borgenar': 'Zontrax', 'skuld': 13208, 'ranta': 0.37, 'isKronofogden': true},
    {'id': 3, 'borgenar': 'Lotlux', 'skuld': 172707, 'ranta': 3.71, 'isKronofogden': true},
    {'id': 4, 'borgenar': 'Fixflex', 'skuld': 212304, 'ranta': 24.77, 'isKronofogden': true},
    {'id': 5, 'borgenar': 'Cookley', 'skuld': 67872, 'ranta': 1.15, 'isKronofogden': true},
    {'id': 6, 'borgenar': 'Y-find', 'skuld': 6986, 'ranta': 27.15, 'isKronofogden': true},
    {'id': 7, 'borgenar': 'Job', 'skuld': 144376, 'ranta': 29.46, 'isKronofogden': false},
    {'id': 8, 'borgenar': 'Solarbreeze', 'skuld': 134236, 'ranta': 23.71, 'isKronofogden': false},
    {'id': 9, 'borgenar': 'Tres-Zap', 'skuld': 131653, 'ranta': 18.66, 'isKronofogden': false},
    {'id': 10, 'borgenar': 'Cardguard', 'skuld': 210640, 'ranta': 25.61, 'isKronofogden': false},
    {'id': 11, 'borgenar': 'Lotstring', 'skuld': 62180, 'ranta': 17.84, 'isKronofogden': true},
    {'id': 12, 'borgenar': 'Zamit', 'skuld': 92347, 'ranta': 18.29, 'isKronofogden': false},
    {'id': 13, 'borgenar': 'Asoka', 'skuld': 235188, 'ranta': 17.8, 'isKronofogden': false},
    {'id': 14, 'borgenar': 'Subin', 'skuld': 153996, 'ranta': 7.6, 'isKronofogden': false},
    {'id': 15, 'borgenar': 'Bitchip', 'skuld': 56280, 'ranta': 24.52, 'isKronofogden': false},
    {'id': 16, 'borgenar': 'Zontrax', 'skuld': 115224, 'ranta': 7.06, 'isKronofogden': false},
    {'id': 17, 'borgenar': 'Rank', 'skuld': 239989, 'ranta': 18.7, 'isKronofogden': false},
    {'id': 18, 'borgenar': 'Bigtax', 'skuld': 39214, 'ranta': 3.27, 'isKronofogden': false},
    {'id': 19, 'borgenar': 'Asoka', 'skuld': 90930, 'ranta': 9.1, 'isKronofogden': false},
    {'id': 20, 'borgenar': 'Y-find', 'skuld': 50943, 'ranta': 18.25, 'isKronofogden': false}];
  constructor() { }

  getdebts () {
    return this.debts;
  }
}
