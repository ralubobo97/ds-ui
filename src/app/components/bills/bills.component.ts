import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css'],
  providers: [MessageService]
})
export class BillsComponent implements OnInit {
  customerBills;
  companyBills;

  constructor(private data: DataService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.data.getBills().subscribe((res: any) => {
      this.companyBills = res.companyBills;
      this.customerBills = res.customerBills;
      let messages = [];

      res.companyBills.forEach(bill => {
        if(bill.paid == 0){
          messages.push({ severity: 'info', summary: 'Bill not paid', detail: `Due Date: ${bill.dueDate}`})
        }
      });
      res.customerBills.forEach(bill => {
        if(bill.paid == 0){
          messages.push({ severity: 'info', summary: 'Bill not paid', detail: `Due Date: ${bill.dueDate}`})
        }
      });
      setTimeout(() => {
        this.messageService.addAll(messages);
      }, 3000);
    })
  }

}
