import {Injectable} from '@angular/core';
export interface Autogiro {
  autogiro: number;
  clearing: number;
  kontonummer: number;
  insattningsdatum: number;
}

@Injectable({
  providedIn: 'root'
})

export class DebtStateService {
  private _selectedDebts: string;
  private _utrymme = 2000;
  private _skuldfriTime = 36;
  private _autoGiroValues: Autogiro = {
    autogiro: null,
    clearing: null,
    kontonummer: null,
    insattningsdatum: null
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
