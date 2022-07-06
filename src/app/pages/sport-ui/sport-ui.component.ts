import { Component, OnInit } from '@angular/core';
// import * as console from 'console';
import { Sport } from '../../models/sport';
import { Sports } from '../../providers/sport';

@Component({
  selector: 'app-sport-ui',
  templateUrl: './sport-ui.component.html',
  styleUrls: ['./sport-ui.component.scss']
})

export class SportUiComponent implements OnInit {

  loading: boolean = false;
  sportRecords: Sport[] = [];

  constructor(private sports: Sports ) { }

  ngOnInit(): void {
    this.getSportRecords();
  }

   getSportRecords(): void {
     this.loading = true;
     this.sports.retreiveSportServices('Canada').subscribe({
      //  next function from observable
       next: (res:any) =>{
         this.loading = false;
         console.log('response', res)
        this.sportRecords = res.football;
       },
       error: (error: any) => {
         this.loading = false;
         console.log(error)
       }
     })
  }

}
