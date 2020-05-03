import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'competitor-form',
  templateUrl: './competitor-form.component.html',
  styleUrls: ['./competitor-form.component.css']
})
export class CompetitorFormComponent implements OnInit {
  @Input('action') action;
  @Input('competitor') competitor?; 
  @Output('actionPerform') actionPerform = new EventEmitter();

  company; service; price; startDate; endDate;

  constructor() { }

  ngOnInit(): void {
    this.company = this.competitor ? this.competitor.company : null;
    this.service = this.competitor ? this.competitor.service : null;
    this.price = this.competitor ? this.competitor.price : null;
    this.startDate = this.competitor ? this.parseDate(this.competitor.startDate) : null;
    this.endDate = this.competitor ? this.parseDate(this.competitor.endDate) : null;
  }

  performAction(form){
    form.id = this.competitor ? this.competitor.id : null;
    this.actionPerform.emit(form);
  }

  parseDate(input) {
    var parts = input.match(/(\d+)/g);
    return new Date(parts[2], parts[1]-1, parts[0]);
  }
  
}
