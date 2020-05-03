import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.component.css']
})
export class DeliveriesComponent implements OnInit {
  deliveries;
  deliveryContents;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getDeliveries().subscribe((deliveries: any) => {
      this.deliveries = deliveries.customerDeliveries.concat(deliveries.companyDeliveries);
    });
  }

  openAccordion(delivery){
    this.data.getDeliveryContents(delivery.id).subscribe(deliveryContents => this.deliveryContents = deliveryContents);
  }
}
