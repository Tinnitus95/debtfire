import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DebtStateService} from '../debt-state.service';

@Component({
  selector: 'app-add-skuld',
  templateUrl: './add-skuld.component.html',
  styleUrls: ['./add-skuld.component.css']
})
export class AddSkuldComponent implements OnInit {
  addSkuldForm = new FormGroup({
    borgenar: new FormControl(),
    ranta: new FormControl(),
    skuld: new FormControl()
  })
  constructor() { }

  ngOnInit() {
  }

}
