import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { ForecastsComponent } from './components/forecasts/forecasts.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services;
  serviceTypes = [
    { value: 'type1', label: 'Type 1' },
    { value: 'type2', label: 'Type 2' },
    { value: 'type3', label: 'Type 3' },
    { value: 'type4', label: 'Type 4' }
  ];

  cols = [
    { field: 'name', header: 'Name' },
    { field: 'type', header: 'Type' },
    { field: 'startDate', header: 'Start Date' },
    { field: 'endDate', header: 'End Date' },
    { field: 'actions', header: 'Actions' }
  ];

  constructor(private data: DataService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.data.getServices().subscribe(services => this.services = services);
  }

  deleteService(rowData){
    this.data.deleteService(rowData.id).subscribe(response => {
      this.services.splice(this.services.indexOf(rowData), 1);
    });
  }

  showServiceForecasts(){
    let dialog = this.dialog.open(ForecastsComponent, {
      width: '900px',
      height: '350px'
    });
  }
}
