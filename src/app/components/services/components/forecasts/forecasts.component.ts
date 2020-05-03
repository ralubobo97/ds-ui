import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-forecasts',
  templateUrl: './forecasts.component.html',
  styleUrls: ['./forecasts.component.css']
})
export class ForecastsComponent implements OnInit {
  forecasts;
  
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getForecasts().subscribe(forecasts => this.forecasts = forecasts);
  }

}
