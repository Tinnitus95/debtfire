import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DebtStateService {
  private _selectedDebts: string;

  get selectedDebts(): string {
    return this._selectedDebts;
  }
  set selectedDebts(updateVal: string) {
    this._selectedDebts = updateVal;
  }

  constructor() {
  }
}
