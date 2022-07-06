export interface Sport{
     stadium: string;
    country: string;
    region: string;
    tournament: string;
    start: Date | string;
    match: string;
 
}

export class Sport{
 
 
 constructor(stadium: string, country: string, tournament: string,start: string, match: string){
  this.stadium = stadium;
  this.country = country;
  this.tournament = tournament;
  this.start = start;
  this.match = match
 }
}