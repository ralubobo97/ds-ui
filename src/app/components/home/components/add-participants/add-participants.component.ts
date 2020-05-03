import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { HomeComponent } from '../../home.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-participants',
  templateUrl: './add-participants.component.html',
  styleUrls: ['./add-participants.component.css']
})
export class AddParticipantsComponent implements OnInit {
  selectedParticipants;
  participants;

  constructor(private dataService: DataService, private dialogRef: MatDialogRef<AddParticipantsComponent>, @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
    this.dataService.getAvailableParticipants(this.data.eventStartHour, this.data.eventEndHour).subscribe(participants => this.participants = participants);
  }

  addParticipants(){
    this.dataService.addParticipants({eventID: this.data.eventID, employees: this.selectedParticipants}).subscribe(res => {
      this.dialogRef.close();
    })
  }
}
