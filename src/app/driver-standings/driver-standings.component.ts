import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { StandingsLists } from '../models/standings-lists';
import { DriverStandings } from '../models/driver-standings';

@Component({
  selector: 'app-driver-standings',
  templateUrl: './driver-standings.component.html',
  styleUrls: ['./driver-standings.component.css']
})
export class DriverStandingsComponent implements OnInit {

  standingsLists: StandingsLists;
  round: string;
  season: string;
  driverStandings: DriverStandings[];
  driverStandingsPartial: DriverStandings[] = new Array();
  title: string = 'Loading Driver Standings...';
  showAllStatus: boolean = false;
  showAllText: string = "Show All";

  constructor(public http: Http) { }

  ngOnInit() {
    this.http.get('http://ergast.com/api/f1/2017/driverStandings.json')
                      .map(response => response.json())
                      .subscribe(result => {
                        this.standingsLists = result.MRData.StandingsTable.StandingsLists[0];
                        console.log(this.standingsLists);
                        this.round = this.standingsLists.round;
                        this.season = this.standingsLists.season;
                        this.driverStandings = this.standingsLists.DriverStandings;
                        this.title = 'Driver Standings'; 
                        for(let i = 0; i < 3; i++) {
                          this.driverStandingsPartial.push(this.driverStandings[i]);
                        }
                      });
  }

  onShowAll() {
    if(this.showAllStatus) {
      this.driverStandingsPartial = new Array();
      for(let i = 0; i < 3; i++) {
        this.driverStandingsPartial.push(this.driverStandings[i]);
      }
      this.showAllStatus = false;
      this.showAllText = "Show All";
    } else {
      this.driverStandingsPartial = this.driverStandings;
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
