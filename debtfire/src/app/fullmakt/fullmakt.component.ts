import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-fullmakt',
  templateUrl: './fullmakt.component.html',
  styleUrls: ['./fullmakt.component.css']
})
export class FullmaktComponent implements OnInit {

  constructor(private router: Router, private dialogRef: MatDialogRef<FullmaktComponent>) { }

  ngOnInit() {
  }

  onClick(){
    this.dialogRef.close();
  }


}
