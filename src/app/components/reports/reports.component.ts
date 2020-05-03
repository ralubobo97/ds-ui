import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jspdf from 'jspdf';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  bills;
  totalGain = 0;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getBills().subscribe((bills: any) => {
      this.bills = bills.customerBills.concat(bills.companyBills);
      this.bills.forEach(bill => {
        this.totalGain += bill.price;
      })
    });
  }

  @ViewChild('pdfTable', {static: false}) pdfTable: ElementRef;


  public downloadAsPDF() {
    const doc = new jspdf();

    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };

    const pdfTable = this.pdfTable.nativeElement;

    doc.fromHTML(pdfTable.innerHTML, 15, 15, {
      width: 190,
      'elementHandlers': specialElementHandlers
    });

    doc.save('tableToPdf.pdf');
  }
}
