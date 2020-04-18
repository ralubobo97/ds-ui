import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees;
  displayedColumns: string[] = ['First Name', 'Last Name', 'Address', 'Email', 'Daily Availability', 'Start Hour', 'End Hour', 'Hourly Payment', 'Edit / Delete'];

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    this.data.getEmployees().subscribe(employees => {
      this.employees = employees;
    });
  }

  deleteEmployee(employee){
    this.employees.splice(this.employees.indexOf(employee), 1);
    this.data.deleteEmployee(employee.id).subscribe();
  }
}
