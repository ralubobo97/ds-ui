import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  name; location; hall; equipment; date; startHour; endHour;

  constructor(private data: DataService, private dialogRef: MatDialogRef<AddEventComponent>) { }

  ngOnInit(): void {
  }

  addEvent(form){
    form.date = form.date.toLocaleDateString('ro');
    form.startHour = Number(form.startHour);
    form.endHour = Number(form.endHour);

    this.data.addMeeting(form).subscribe(res => {
      this.dialogRef.close();
    })
  }
}
