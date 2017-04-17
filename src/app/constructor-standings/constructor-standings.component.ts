import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { StandingsLists } from '../models/standings-lists';
import { ConstructorStandings } from '../models/constructor-standings';

@Component({
  selector: 'app-constructor-standings',
  templateUrl: './constructor-standings.component.html',
  styleUrls: ['./constructor-standings.component.css']
})
export class ConstructorStandingsComponent implements OnInit {

  standingsLists: StandingsLists;
  round: string;
  season: string;
  constructorStandings: ConstructorStandings[];
  constructorStandingsPartial: ConstructorStandings[] = new Array();
  title: string = 'Loading Constructor Standings...';
  showAllStatus: boolean = false;
  showAllText: string = "Show All";

  constructor(public http: Http) { }

  ngOnInit() {
    this.http.get('http://ergast.com/api/f1/2017/constructorStandings.json')
                      .map(response => response.json())
                      .subscribe(result => {
                        this.standingsLists = result.MRData.StandingsTable.StandingsLists[0];
                        console.log(this.standingsLists);
                        this.round = this.standingsLists.round;
                        this.season = this.standingsLists.season;
                        this.constructorStandings = this.standingsLists.ConstructorStandings;
                        this.title = 'Constructor Standings'; 
                        for(let i = 0; i < 3; i++) {
                          this.constructorStandingsPartial.push(this.constructorStandings[i]);
                        }
                      });
  }

  onShowAll() {
    if(this.showAllStatus) {
      this.constructorStandingsPartial = new Array();
      for(let i = 0; i < 3; i++) {
        this.constructorStandingsPartial.push(this.constructorStandings[i]);
      }
      this.showAllStatus = false;
      this.showAllText = "Show All";
    } else {
      this.constructorStandingsPartial = this.constructorStandings;
      this.showAllStatus = true;
      this.showAllText = "Show Less";
    } 
  }

  getFlag(result) {
    let nationality = result.Constructor.nationality;
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
    else if(nationality === 'Austrian')
      isoCode = 'at';
    else if(nationality === 'Indian')
      isoCode = 'in';
    else if(nationality === 'American')
      isoCode = 'us';
    else if(nationality === 'Swiss')
      isoCode = 'ch';

    let returnString = "flag-icon flag-icon-"+isoCode;
    return returnString;
  }
}
