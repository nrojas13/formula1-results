import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { RaceModel } from '../models/race';
import { ResultModel } from '../models/result';

@Component({
  selector: 'app-last-race',
  templateUrl: './last-race.component.html',
  styleUrls: ['./last-race.component.css']
})
export class LastRaceComponent implements OnInit {

  lastRace: RaceModel;
  raceName: string = 'Loading Race...';
  raceDate: string;
  raceTime: string;
  raceResult: ResultModel[];
  raceResultPartial: ResultModel[] = new Array();
  raceSeason: string;
  raceUrl: string;
  showAllStatus: boolean = false;
  showAllText: string = "Show All";

  constructor(public http: Http) { }

  ngOnInit() {
    this.http.get('http://ergast.com/api/f1/current/last/results.json')
                      .map(response => response.json())
                      .subscribe(result => {
                        this.lastRace = result.MRData.RaceTable.Races[0];
                        this.raceName = this.lastRace.raceName;
                        this.raceDate = this.lastRace.date;
                        this.raceTime = this.lastRace.time;
                        this.raceResult = this.lastRace.Results;
                        this.raceSeason = this.lastRace.season;
                        this.raceUrl = this.lastRace.url;
                        for(let i = 0; i < 11; i++) {
                          this.raceResultPartial.push(this.raceResult[i]);
                        }
                      });
  }

  getTime (result) {
    if(result.Time) {
      return result.Time.time;
    } else {
      return result.status;
    }
  }

  onShowAll() {
    if(this.showAllStatus) {
      this.raceResultPartial = new Array();
      for(let i = 0; i < 11; i++) {
        this.raceResultPartial.push(this.raceResult[i]);
      }
      this.showAllStatus = false;
      this.showAllText = "Show All";
    } else {
      this.raceResultPartial = this.raceResult;
      this.showAllStatus = true;
      this.showAllText = "Show Less";
    } 
  }

  getFlag(result) {
    let nationality = result.Driver.nationality;
    let isoCode = '';
    if(nationality === 'British') 
      isoCode = 'gb';
    else if(nationality === 'Finnish')
      isoCode = 'fi';
    else if(nationality === 'German') 
      isoCode = 'de';
    else if(nationality === 'Mexican')
      isoCode = 'mx';
    else if(nationality === 'Dutch')
      isoCode = 'nl';
    else if(nationality === 'Swedish')
      isoCode = 'se';
    else if(nationality === 'Spanish')
      isoCode = 'es';
    else if(nationality === 'Italian')
      isoCode = 'it';
    else if(nationality === 'French')
      isoCode = 'fr';
    else if(nationality === 'Russian')
      isoCode = 'ru';
    else if(nationality === 'Danish')
      isoCode = 'dk';
    else if(nationality === 'Brazilian')
      isoCode = 'br';
    else if(nationality === 'Australian')
      isoCode = 'au';
    else if(nationality === 'Canadian')
      isoCode = 'ca';
    else if(nationality === 'Belgian')
      isoCode = 'be';

    let returnString = "flag-icon flag-icon-"+isoCode;
    return returnString;
  }

}
