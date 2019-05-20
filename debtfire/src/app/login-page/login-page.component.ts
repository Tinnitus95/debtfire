import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Router} from '@angular/router';

export interface DialogData {
  animal: string;
  name: string;
}

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'app-login-page',
  templateUrl: 'login-page.component.html',
  styleUrls: ['login-page.component.css'],
})
export class LoginPageComponent {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog, private router: Router) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogModalComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/main']);
    });
  }

}

@Component({
  selector: 'app-login-modal',
  templateUrl: 'login-dialog-modal.component.html',
})
export class LoginDialogModalComponent {

  constructor(
    public dialogRef: MatDialogRef<LoginDialogModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
