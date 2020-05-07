import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jspdf from 'jspdf';
import { DataService } from 'src/app/services/data.service';
import * as FileSaver from 'file-saver';
import * as excel from 'xlsx';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  bills;
  totalGain = 0;

  EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  EXCEL_EXTENSION = 'xlsx';

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

  saveExcel(){
    const worksheet: excel.WorkSheet = excel.utils.json_to_sheet(this.bills);
    const workbook: excel.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const buffer = excel.write(workbook, { bookType: 'xlsx', type: 'array' });

    const data: Blob = new Blob([buffer], { type: this.EXCEL_TYPE });
    FileSaver.saveAs(data, `report.${this.EXCEL_EXTENSION}`);
}
}
