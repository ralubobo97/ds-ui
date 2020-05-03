import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  id; firstname; lastname; address; email; dailyAvailability; startHour; endHour; payment;


  constructor(private data: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    
    this.data.getEmployee(this.id).subscribe(employee => {
      this.firstname = employee.firstname;
      this.lastname = employee.lastname;
      this.address = employee.address;
      this.email = employee.email;
      this.dailyAvailability = employee.dailyAvailability;
      this.startHour = employee.startHour;
      this.endHour = employee.endHour;
      this.payment = employee.payment;
    })
  }

  editEmployee(form){
    form.id = this.id;
    this.data.editEmployee(form).subscribe(res => {
      this.router.navigate(['/employees']);
    });
  }
}
