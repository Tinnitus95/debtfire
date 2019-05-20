import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DebtTableDataSource } from './debt-table-datasource';

@Component({
  selector: 'app-debt-table',
  templateUrl: './debt-table.component.html',
  styleUrls: ['./debt-table.component.css']
})
export class DebtTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: DebtTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'borgenar', 'skuld', 'procent'];

  ngAfterViewInit() {
    this.dataSource = new DebtTableDataSource(this.paginator, this.sort);
  }
}
