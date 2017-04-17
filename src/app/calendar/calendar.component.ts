import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { RaceModel } from '../models/race';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  raceTable: RaceModel[];
  season: string;

  constructor(public http: Http) { }

  ngOnInit() {
    this.http.get('http://ergast.com/api/f1/current.json')
                      .map(response => response.json())
                      .subscribe(result => {
                        this.season = result.MRData.RaceTable.season;
                        this.raceTable = result.MRData.RaceTable.Races;
                      });
  }

  getFlag(location) {
    let nationality = location.country;
    let isoCode = '';
    if(nationality === 'Australia') 
      isoCode = 'au';
    else if(nationality === 'China')
      isoCode = 'cn';
    else if(nationality === 'Bahrain')
      isoCode = 'bh';
    else if(nationality === 'Russia')
      isoCode = 'ru';
    else if(nationality === 'Spain')
      isoCode = 'es';
    else if(nationality === 'Monaco')
      isoCode = 'mc';
    else if(nationality === 'Canada')
      isoCode = 'ca';
    else if(nationality === 'Azerbaijan')
      isoCode = 'az';
    else if(nationality === 'Austria')
      isoCode = 'at';
    else if(nationality === 'UK')
      isoCode = 'gb';
    else if(nationality === 'Hungary')
      isoCode = 'hu';
    else if(nationality === 'Belgium')
      isoCode = 'be';
    else if(nationality === 'Italy')
      isoCode = 'it';
    else if(nationality === 'Singapore')
      isoCode = 'sg';
    else if(nationality === 'Malaysia')
      isoCode = 'my';
    else if(nationality === 'Japan')
      isoCode = 'jp';
    else if(nationality === 'USA')
      isoCode = 'us';
    else if(nationality === 'Mexico')
      isoCode = 'mx';
    else if(nationality === 'Brazil')
      isoCode = 'br';
    else if(nationality === 'UAE')
      isoCode = 'ae';

    let returnString = "flag-icon flag-icon-"+isoCode;
    return returnString;
  }

}
