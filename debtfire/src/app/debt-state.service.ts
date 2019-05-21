import {Injectable} from '@angular/core';
export interface Autogiro {
  bankName: string;
  kontonummer: number;
  insattningsdatum: string;
}

@Injectable({
  providedIn: 'root'
})

export class DebtStateService {
  private _selectedDebts: string;
  private _utrymme: number;
  private _skuldfriTime: number;
  private _autoGiroValues: Autogiro = {
    bankName: '',
    kontonummer: null,
    insattningsdatum: ''
  };


  get selectedDebts(): string {
    return this._selectedDebts;
  }

  set selectedDebts(updateVal: string) {
    this._selectedDebts = updateVal;
  }

  get utrymme(): number {
    return this._utrymme;
  }

  set utrymme(updateVal: number) {
    this._utrymme = updateVal;
  }

  get autogiroValues(): Autogiro {
    return this._autoGiroValues;
  }

  set autogiroValues(updateval: Autogiro) {
    this._autoGiroValues = updateval;
  }

  get skuldfriTime(): number {
    return this._skuldfriTime;
  }

  set skuldfriTime(updateVal: number) {
    this._skuldfriTime = updateVal;
  }

  constructor() {
  }
}
