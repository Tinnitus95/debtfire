import { Component, OnInit } from '@angular/core';
import {DebtStateService} from '../debt-state.service';

@Component({
  selector: 'app-summering',
  templateUrl: './summering.component.html',
  styleUrls: ['./summering.component.css']
})
export class SummeringComponent implements OnInit {
  amount = this.state.utrymme;
  skuldfri = this.state.skuldfriTime;
  autogiroVal = this.state.autogiroValues;
  constructor(private state: DebtStateService) { }

  ngOnInit() {
  }

}
