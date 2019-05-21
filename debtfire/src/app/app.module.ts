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
  MatDialogModule, MatGridListModule
} from '@angular/material';
import {FormComponent} from './form/form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DebtTableComponent} from './debt-table/debt-table.component';
import {LoginDialogModalComponent, LoginPageComponent} from './login-page/login-page.component';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {DebtSelectionComponent} from './debt-selection/debt-selection.component';
import {DebtsummaryComponent} from './debtsummary/debtsummary.component';
import {BetalningsutrymmeComponent} from './betalningsutrymme/betalningsutrymme.component';
import {FullmaktComponent} from './fullmakt/fullmakt.component';
import {AutogiroComponent} from './autogiro/autogiro.component';
import {SummeringComponent} from './summering/summering.component';
import {AddSkuldComponent} from './add-skuld/add-skuld.component';
import {MyLineChartComponent} from './my-line-chart/my-line-chart.component';
import {ChartsModule} from 'ng2-charts';


const approutes: Routes = [
  {path: '', component: LoginPageComponent},
  {
    path: 'main', component: NavbarComponent,

    children: [
      {path: '', component: MainComponent},
      {path: 'debts', component: DebtsummaryComponent}
    ]
  },

  {path: 'debt-selection', component: DebtSelectionComponent},
  {path: 'debt-summary', component: DebtsummaryComponent},
  {path: 'betalnings-utrymme', component: BetalningsutrymmeComponent},
  {path: 'autogiro', component: AutogiroComponent},
  {path: 'summering', component: SummeringComponent},
  {path: 'line-chart', component: MyLineChartComponent}

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
    FullmaktComponent,
    BetalningsutrymmeComponent,
    AutogiroComponent,
    SummeringComponent,
    AddSkuldComponent,
    MyLineChartComponent
  ],
  imports: [
    ChartsModule,
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
    MatGridListModule,
    MatListModule,
    FormsModule,
    RouterModule.forRoot(approutes, {enableTracing: true}),

  ],
  providers: [],
  entryComponents: [LoginDialogModalComponent, FullmaktComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}



