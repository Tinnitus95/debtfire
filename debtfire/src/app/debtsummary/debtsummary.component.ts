import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';
import {BoundElementProperty} from '@angular/compiler';
import {DebtsService} from '../debts.service';
import {Router} from '@angular/router';
import {DebtStateService} from '../debt-state.service';


export interface Debtdata {
  id: number;
  borgenar: string;
  skuld: number;
  ranta: number;
  isKronofogden: boolean;
}


@Component({
  selector: 'app-debtsummary',
  templateUrl: './debtsummary.component.html',
  styleUrls: ['./debtsummary.component.css']
})
export class DebtsummaryComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  kfmColumns: string[] = ['id', 'borgenar', 'skuld', 'ranta', 'isKronofogden'];
  kfmData = this.debts.getdebts();
  kfmDataSource = new MatTableDataSource<Debtdata>(this.kfmData);

  totalSkuld = 0;


  constructor(private debts: DebtsService, private router: Router, private state: DebtStateService) {
  }

  ngOnInit() {
    this.kfmDataSource.paginator = this.paginator;
    this.kfmDataSource.sort = this.sort;

  }

  onButtonClick(val) {
    this.state.utrymme = val;
    this.router.navigate(['/main/line-chart']);
  }



  addSkuld(event){
    console.log(event);
  }

}
