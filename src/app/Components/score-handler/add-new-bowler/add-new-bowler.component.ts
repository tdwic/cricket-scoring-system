import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../../Services/common.service';
import {MatDialog} from '@angular/material/dialog';
import {Match} from '../../../Models/match';
import {Player} from '../../../Models/player';

@Component({
  selector: 'app-add-new-bowler',
  templateUrl: './add-new-bowler.component.html',
  styleUrls: ['./add-new-bowler.component.css']
})
export class AddNewBowlerComponent implements OnInit {

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  matchDetails : Match[];
  playersList : Player[]
  playersList2 : Player[]
  bowlingTeamId : number;

  constructor(private COMMON_SERVICE : CommonService,
              private _MatDialog: MatDialog) { }

  ngOnInit(): void {
      this.fetchMatchDetails();
  }

  fetchMatchDetails(){
    this.COMMON_SERVICE.getAllMatchDetails().subscribe(res =>{

      this.matchDetails = res;
      this.bowlingTeamId = this.matchDetails[0].bowlingTeamId;

      this.fetchBowlersList(this.bowlingTeamId);

    } ,error => {
      console.log("err "+error);
    })
  }

  fetchBowlersList(teamId:number){
    this.COMMON_SERVICE.getAllPlayersByTeamId(teamId).subscribe( res => {
      console.log(res);
      this.playersList = res;
    },error => {
      console.log("err "+error);
    });
  }

}
