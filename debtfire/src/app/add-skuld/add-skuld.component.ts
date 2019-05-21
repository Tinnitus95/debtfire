import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DebtStateService} from '../debt-state.service';
import { MatSnackBar } from '@angular/material';
import { DebtsService } from '../debts.service';

@Component({
  selector: 'app-add-skuld',
  templateUrl: './add-skuld.component.html',
  styleUrls: ['./add-skuld.component.css']
})
export class AddSkuldComponent implements OnInit {
  @Output() addDebt = new EventEmitter();
  addSkuldForm = new FormGroup({
    borgenar: new FormControl(),
    ranta: new FormControl(),
    skuld: new FormControl()
  })
  constructor(private snackBar: MatSnackBar,
  private service: DebtsService
  ) { }

  ngOnInit() {
  }

  onSubmit(formValues) {
    this.addDebt.emit(formValues);
    this.addSkuldForm.reset();
    let skuld = 'Skulden: ' + formValues.borgenar + ' sparad';
    this.snackBar.open(skuld, '', {
      duration: 2000,
    });
    this.service.addNewDebt(formValues);
  }

}
