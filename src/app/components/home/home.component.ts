import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { AddParticipantsComponent } from './components/add-participants/add-participants.component';
import { AddEventComponent } from './components/add-event/add-event.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  events;
  participants;

  constructor(private data: DataService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.data.getMeetings().subscribe(events => this.events = events);
    
  }

  openAccordion(event){
    this.data.getParticipants(event.id).subscribe(participants => this.participants = participants);
  }

  addParticipants(event){
    let dialog = this.dialog.open(AddParticipantsComponent, {
      width: '600px',
      height: '280px',
      data: {
        eventID: event.id,
        eventStartHour: event.startHour,
        eventEndHour: event.endHour
      }
    });

    dialog.afterClosed().subscribe(res => {
      this.openAccordion(event);
    });
  }

  addEvent(){
    let dialog = this.dialog.open(AddEventComponent, {
      width: '400px',
      height: '570px'
    });

    dialog.afterClosed().subscribe(res => {
      this.data.getMeetings().subscribe(events => this.events = events);
    })
  }
}
