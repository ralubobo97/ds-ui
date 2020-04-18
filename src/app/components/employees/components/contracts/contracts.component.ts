import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {

  contracts;
  newEndDate;
  endDates: any[] = [];

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getContracts().subscribe(contracts => this.contracts = contracts);
  }

  modifyContract(contract){
    contract.extraMonths = this.endDates[contract.id];
    this.endDates[contract.id] = null;
    this.data.editContract(contract).subscribe(response => {
      this.data.getContracts().subscribe(contracts => this.contracts = contracts);
    });
  }
}
