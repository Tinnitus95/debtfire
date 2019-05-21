import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './navbar/navbar.component';
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatCardModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule
} from '@angular/material';
import {FormComponent} from './form/form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DebtTableComponent} from './debt-table/debt-table.component';
import {LoginDialogModalComponent, LoginPageComponent} from './login-page/login-page.component';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {DebtSelectionComponent} from './debt-selection/debt-selection.component';
import {DebtsummaryComponent} from './debtsummary/debtsummary.component';


const approutes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'main', component: MainComponent},
  {path: 'debt-selection', component: DebtSelectionComponent},
  {path: 'debt-summary', component: DebtsummaryComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormComponent,
    DebtTableComponent,
    LoginPageComponent,
    DebtsummaryComponent,
    LoginDialogModalComponent,
    MainComponent,
    DebtSelectionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    FormsModule,
    RouterModule.forRoot(approutes, {enableTracing: true}),

  ],
  providers: [],
  entryComponents: [LoginDialogModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}



