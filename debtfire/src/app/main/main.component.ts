import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { FullmaktComponent } from '../fullmakt/fullmakt.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(FullmaktComponent, {
      width: '250px',

    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/main']);
    });
  }


}
