import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CompanyComponent } from '../company/company.component';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  companies;
  firstname;
  lastname;
  cnp;
  company;
  companySelected: boolean = false;

  constructor(private data: DataService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    
  }

  getCompanies(){
    this.companies = this.data.getCompanies();
  }
  
  addCustomer(form){
    this.data.addCustomer(form).subscribe(res => {
      this.router.navigate(['/customers']);
    });
  }

  disable(event){
    if(event.value == ''){
      this.companySelected = false;
    } else {
      this.companySelected = true;
      this.firstname = null;
      this.lastname = null;
      this.cnp = null;
    }
  }

  addCompany(){
    let dialog = this.dialog.open(CompanyComponent, {
      width: '600px',
      height: '450px',
      data: {
        action: 'Add'
      }
    });
  }
}
