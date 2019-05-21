import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';



export interface Debtdata {
    id: number;
    borgenar: string;
    skuld: number;
    ranta: number;
}


@Component({
  selector: 'app-debtsummary',
  templateUrl: './debtsummary.component.html',
  styleUrls: ['./debtsummary.component.css']
})
export class DebtsummaryComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  
  kfmColumns: string[] = ['id', 'borgenar', 'skuld','ranta'];
  
  kfmDataSource = new MatTableDataSource<Debtdata>(this.getKfmData());
  


  othersColumns: string[] = ['id', 'borgenar', 'skuld','ranta'];
  othersDataSource = new MatTableDataSource<Debtdata>(this.getOthersData());

  constructor() { }

  ngOnInit() {
    this.kfmDataSource.paginator = this.paginator;
  }


  getKfmData(){
    return [{"id":1,"borgenar":"Cardify","skuld":163064,"ranta":23.35},
    {"id":2,"borgenar":"Zontrax","skuld":13208,"ranta":0.37},
    {"id":3,"borgenar":"Lotlux","skuld":172707,"ranta":3.71},
    {"id":4,"borgenar":"Fixflex","skuld":212304,"ranta":24.77},
    {"id":5,"borgenar":"Cookley","skuld":67872,"ranta":1.15},
    {"id":6,"borgenar":"Y-find","skuld":6986,"ranta":27.15},
    {"id":7,"borgenar":"Job","skuld":144376,"ranta":29.46},
    {"id":8,"borgenar":"Solarbreeze","skuld":134236,"ranta":23.71},
    {"id":9,"borgenar":"Tres-Zap","skuld":131653,"ranta":18.66},
    {"id":10,"borgenar":"Cardguard","skuld":210640,"ranta":25.61},
    {"id":11,"borgenar":"Lotstring","skuld":62180,"ranta":17.84},
    {"id":12,"borgenar":"Zamit","skuld":92347,"ranta":18.29},
    {"id":13,"borgenar":"Asoka","skuld":235188,"ranta":17.8},
    {"id":14,"borgenar":"Subin","skuld":153996,"ranta":7.6},
    {"id":15,"borgenar":"Bitchip","skuld":56280,"ranta":24.52},
    {"id":16,"borgenar":"Zontrax","skuld":115224,"ranta":7.06},
    {"id":17,"borgenar":"Rank","skuld":239989,"ranta":18.7},
    {"id":18,"borgenar":"Bigtax","skuld":39214,"ranta":3.27},
    {"id":19,"borgenar":"Asoka","skuld":90930,"ranta":9.1},
    {"id":20,"borgenar":"Y-find","skuld":50943,"ranta":18.25}]
  }


  getOthersData(){
    return [{"id":1,"borgenar":"Gembucket","skuld":219554,"ranta":21.48},
    {"id":2,"borgenar":"Cardguard","skuld":28794,"ranta":14.13},
    {"id":3,"borgenar":"Bitwolf","skuld":25520,"ranta":25.94},
    {"id":4,"borgenar":"Voltsillam","skuld":239028,"ranta":1.44},
    {"id":5,"borgenar":"Solarbreeze","skuld":150167,"ranta":19.56}];

  }

}
