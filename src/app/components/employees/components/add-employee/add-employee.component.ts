import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private data: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  addEmployee(form){
    this.data.addEmployee(form).subscribe(res => {
      this.router.navigate(['/employees']);
    });
  }
}
