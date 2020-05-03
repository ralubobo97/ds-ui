import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {
  name;
  type;
  startDate
  endDate;

  serviceTypes = [
    { value: 'type1', label: 'Type 1' },
    { value: 'type2', label: 'Type 2' },
    { value: 'type3', label: 'Type 3' },
    { value: 'type4', label: 'Type 4' }
  ];

  constructor(private data: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  addService(form){
    form.startDate = form.startDate.toLocaleDateString('ro');
    form.endDate = form.endDate.toLocaleDateString('ro');
    this.data.addService(form).subscribe(res => {
      this.router.navigate(['/services']);
    });
  }
}
