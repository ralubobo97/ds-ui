import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent implements OnInit {
  id;
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

  constructor(private data: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this.data.getService(this.id).subscribe(service => {
      this.name = service.name;
      this.type = service.type;
      this.startDate = this.parseDate(service.startDate);
      this.endDate = this.parseDate(service.endDate);
    })
  }

  editService(form){
    form.id = this.id;
    form.startDate = form.startDate.toLocaleDateString('ro');
    form.endDate = form.endDate.toLocaleDateString('ro');
    this.data.editService(form).subscribe(res => {
      this.router.navigate(['/services']);
    });
  }

  parseDate(input) {
    var parts = input.match(/(\d+)/g);
    return new Date(parts[2], parts[1]-1, parts[0]);
  }
}
