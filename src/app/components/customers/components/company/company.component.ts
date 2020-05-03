import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  name; regCode; address; domain;

  constructor(private dataService: DataService, private dialogRef: MatDialogRef<CompanyComponent>, @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
    if(this.data.action == 'Edit'){
      this.dataService.getCompany(this.data.companyID).subscribe(company => {
        this.name = company.name;
        this.regCode = company.regCode;
        this.address = company.address;
        this.domain = company.domain;
      });
    }
  }

  companyActions(form){
    if(this.data.action == 'Add'){
      this.dataService.addCompany(form).subscribe(res => {
        this.dialogRef.close();
      });
    } else {
      form.id = this.data.companyID;
      this.dataService.editCompany(form).subscribe(res => {
        this.dialogRef.close();
      });
    }  
  }
}
