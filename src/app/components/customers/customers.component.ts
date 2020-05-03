import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CompanyComponent } from './components/company/company.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers;
  displayedColumns: string[] = ['First Name', 'Last Name', 'Company / CNP', 'Email', 'Phone', 'Location', 'Feedback'];

  constructor(private data: DataService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){
    this.data.getCustomers().subscribe(customers => {
      this.customers = customers;
    });
  }

  deleteCustomer(customer){
    this.customers.splice(this.customers.indexOf(customer), 1);
    this.data.deleteCustomer(customer.id).subscribe();
  }

  editCompany(companyID){
    let dialog = this.dialog.open(CompanyComponent, {
      width: '600px',
      height: '450px',
      data: {
        action: 'Edit',
        companyID
      }
    })
  }
}
