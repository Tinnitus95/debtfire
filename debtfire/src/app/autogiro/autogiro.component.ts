import { Component, OnInit } from '@angular/core';
import {DebtStateService} from '../debt-state.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-autogiro',
  templateUrl: './autogiro.component.html',
  styleUrls: ['./autogiro.component.css']
})
export class AutogiroComponent implements OnInit {
  utrymme = this.state.utrymme;
  manader = this.state.skuldfriTime;

  autogiroForm = new FormGroup({
    autogiro: new FormControl(this.utrymme, Validators.required),
    clearing: new FormControl(this.state.autogiroValues.clearing, Validators.required),
    kontonummer: new FormControl(this.state.autogiroValues.kontonummer, Validators.required),
    insattningsdatum: new FormControl(this.state.autogiroValues.insattningsdatum, Validators.required)
  });
  constructor(private state: DebtStateService, private router: Router) { }

  ngOnInit() {
  }

  Onsubmit(update) {
    this.state.autogiroValues = update;


  }

}
