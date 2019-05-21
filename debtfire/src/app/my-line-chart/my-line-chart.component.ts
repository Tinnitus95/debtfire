import {Component, OnInit} from '@angular/core';
import {DebtStateService} from '../debt-state.service';
import {DebtsService} from '../debts.service';

@Component({
  selector: 'app-my-line-chart',
  templateUrl: './my-line-chart.component.html',
  styleUrls: ['./my-line-chart.component.css']
})
export class MyLineChartComponent implements OnInit {
  shouldGetSkuldsanering = false;
  breakLoop = false;
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public rentEntrySet = [];
  public rentEntrySetMonths = [];
  public debtEntrySet = [];
  public debtEntrySetMonths = [];
  public initialDebt;

  public INSTALLMENT = this.state.utrymme;
  public debtToFocusOn;
  public totalDebtPaid = 0;
  public totalRentPaid = 0;
  public months = 0;

  public debt = this.debts.getdebts();

  public barChartLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '12'];
  public barChartType = 'line';
  public barChartLegend = true;

  public barChartData = [
    {data: [], label: 'Din skuldutveckling'},
    // {data: [], label: 'Skuld om du inte betalar'}
  ];

  constructor(private state: DebtStateService, private debts: DebtsService) {
  }

  ngOnInit() {
    const data = this.simulateDebtPayoff(this.debt);
    this.barChartLabels = data.debtEntrysetMonths;
    this.barChartData[0].data = data.debtEntryset;
    console.log("dsa");
    // this.barChartData[1].data = this.simulateRentIfNotPaid(this.debt, this.barChartData[0].data.length);
  }

  simulateRentIfNotPaid(tempDebt, months) {
    const rentEvolution = [];
    console.log("dsa2");
    for (let month = 0; month < months; month++) {
      let totalDebt = 0;
      for (let i = 0; i < tempDebt.length; i++) {
        const currentDebt = tempDebt[i];
        let debt = currentDebt.initskuld;
        debt = debt + (debt * (currentDebt.ranta / 100));
        currentDebt.initskuld = debt;
        totalDebt += debt;
      }
      console.log(totalDebt);
      rentEvolution.push(totalDebt);
    }

    return rentEvolution;
  }

  clearVariables() {
    this.debtToFocusOn = null;
    this.totalDebtPaid = 0;
    this.totalRentPaid = 0;
    this.rentEntrySet = [];
    this.debtEntrySet = [];
    this.initialDebt = this.summarizeTotalDebt();
  }

  simulateDebtPayoff(debt) {
    this.clearVariables();
    debt.sort((a, b) => a.ranta - b.ranta);

    while (this.stillDebtRemaining() && this.months <= 200 && !this.breakLoop) {
      this.months++;
      this.payOffDebt();
      if (this.summarizeTotalDebt() > 0) {
        this.debtEntrySet.push(this.initialDebt - this.totalDebtPaid);
        this.debtEntrySetMonths.push(this.months);
      } else {
        this.debtEntrySet.push(0);
        this.debtEntrySetMonths.push(this.months);
      }

      if (this.months >= 60) {
        this.shouldGetSkuldsanering = true;
        break;
      }
    }

      this.state.skuldfriTime = this.months;
    return {
      'totalDebtPaid': this.totalDebtPaid,
      'totalRentPaid': this.totalRentPaid,
      'rentEntryset': this.rentEntrySet,
      'rentEntrysetMonths': this.rentEntrySetMonths,
      'debtEntryset': this.debtEntrySet,
      'debtEntrysetMonths': this.debtEntrySetMonths,
    };
  }

  payOffDebt() {
    let availableInstallment = this.INSTALLMENT - this.getTotalRentPaid();
    while (availableInstallment > 0 || this.summarizeTotalDebt() <= 0) {
      this.debtToFocusOn = this.getDebtToFocusOn();
      try {
        availableInstallment = this.payFocusedDebt(this.debtToFocusOn, availableInstallment);
      } catch (err) {
        break;
      }
    }
  }

  payFocusedDebt(debtToFocusOn, availableInstallment) {
    if (debtToFocusOn.skuld <= availableInstallment) {
      availableInstallment -= debtToFocusOn.skuld;
      this.totalDebtPaid += debtToFocusOn.skuld;
      debtToFocusOn.skuld = 0;
    } else {
      debtToFocusOn.skuld -= availableInstallment;
      this.totalDebtPaid += availableInstallment;
      availableInstallment = 0;
    }

    return availableInstallment;
  }

  getTotalRentPaid() {
    let sum = 0;
    for (let i = 0; i < this.debt.length; i++) {
      const currentDebt = this.debt[i];
      if (currentDebt.skuld > 0) {
        sum += this.getRentToBePaid(currentDebt);
      }
    }
    this.totalRentPaid += sum;
    this.rentEntrySet.push(sum);
    if(sum >= this.INSTALLMENT) {

    }
    return sum;
  }

  getRentToBePaid(currentDebt) {
    return currentDebt.skuld * (currentDebt.ranta / 100);
  }

  getDebtToFocusOn() {
    if (this.summarizeTotalDebt() > 0) {
      return this.getDebtWithHighestRate();
    }
  }

  getDebtWithHighestRate() {
    let debtToFocusOn;
    for (let i = 0; i < this.debt.length; i++) {
      const currentDebt = this.debt[i];
      if (!debtToFocusOn || (currentDebt.ranta > debtToFocusOn.ranta && currentDebt.skuld > 0)) {
        debtToFocusOn = currentDebt;
      }
    }
    return debtToFocusOn;
  }

  stillDebtRemaining() {
    return this.summarizeTotalDebt() > 0;
  }

  summarizeTotalDebt() {
    let sum = 0;
    for (let i = 0; i < this.debt.length; i++) {
      const currentDebt = this.debt[i];
      sum += currentDebt.skuld;
    }
    return sum;
  }


}
