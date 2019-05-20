import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {DebtStateService} from '../debt-state.service';

interface SkulderVal {
  value: string;
  text: string;
}

@Component({
  selector: 'app-debt-selection',
  templateUrl: './debt-selection.component.html',
  styleUrls: ['./debt-selection.component.css']
})
export class DebtSelectionComponent implements OnInit {
  valAvSkulder: SkulderVal[] = [{value: 'ALLA', text: 'Samtliga Skulder'}, {value: 'KFM', text: 'Bara hos kronofogden'}];
  selectionForm: FormGroup = this.fb.group({
    debtsFrom: this.fb.control('', Validators.required)
  });

  constructor(private fb: FormBuilder, private router: Router, private state: DebtStateService) {
  }

  ngOnInit() {
  }

  onFormSubmit() {
    this.state.selectedDebts = this.debtsFrom.value;
    if (this.debtsFrom.value === 'KFM') {
      this.router.navigate(['/debt-summary']);
    } else {
      this.router.navigate(['/fullmakt']);
    }
  }

  get debtsFrom() {
    return this.selectionForm.get('debtsFrom') as FormControl;
  }
}

