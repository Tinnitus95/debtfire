import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DebtStateService} from '../debt-state.service';

@Component({
  selector: 'app-betalningsutrymme',
  templateUrl: './betalningsutrymme.component.html',
  styleUrls: ['./betalningsutrymme.component.css']
})
export class BetalningsutrymmeComponent implements OnInit {
  utrymmeForm = new FormGroup({
    utrymme: new FormControl('', Validators.required)
  });
  constructor(private state: DebtStateService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.state.utrymme = this.utrymmeForm.get('utrymme').value;
    console.log(this.state.utrymme);
  }

}
