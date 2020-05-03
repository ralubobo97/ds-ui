import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-competitors',
  templateUrl: './competitors.component.html',
  styleUrls: ['./competitors.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CompetitorsComponent implements OnInit {
  competitors;
  showNewCard: boolean = false;
  editCompetitors: boolean[] = [];

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getCompetitors().subscribe(competitors => this.competitors = competitors);
  }

  showEditCard(index){
    this.editCompetitors[index] = true;
  }

  showCompetitorCard(){
    this.showNewCard = true;
  }

  addCompetitor(form){
    this.competitors.push(form);
    form.startDate = form.startDate.toLocaleDateString('ro');
    form.endDate = form.endDate.toLocaleDateString('ro');
    this.data.addCompetitor(form).subscribe();
    this.showNewCard = false;
  }

  deleteCompetitor(competitor){
    this.data.deleteCompetitor(competitor.id).subscribe(res => {
      this.competitors.splice(this.competitors.indexOf(competitor), 1);
    });
  }

  editCompetitor(form, index){
    form.startDate = form.startDate.toLocaleDateString('ro');
    form.endDate = form.endDate.toLocaleDateString('ro');
    this.data.editCompetitor(form).subscribe(res => {
      this.competitors[index] = form;
      this.editCompetitors[index] = false;
    });
  }
}
