import {Component, Inject, OnInit} from '@angular/core';
import {CommonService} from '../../../Services/common.service';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {Match} from '../../../Models/match';
import {Player} from '../../../Models/player';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CurrentPlayer} from '../../../Models/currentPlayer';

@Component({
  selector: 'app-add-new-bowler',
  templateUrl: './add-new-bowler.component.html',
  styleUrls: ['./add-new-bowler.component.css']
})
export class AddNewBowlerComponent implements OnInit {

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  matchDetails : Match[];
  playersList : Player[]
  bowlerSide : string;
  selectedPlayerId:number;
  bowlingTeamId : number;
  currentPlayer : CurrentPlayer;
  bowlingPlayerForm : FormGroup;

  constructor(private COMMON_SERVICE : CommonService,
              private _MatDialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.bowlerSide = data.side;
  }

  ngOnInit(): void {
      this.fetchMatchDetails();
      this.bowlingPlayerForm = new FormGroup({
        selectedPlayer:new FormControl('',[Validators.required])
      })
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
      this.playersList = res;
      console.log("Bowler list "+ this.playersList);
    },error => {
      console.log("err "+error);
    });
  }

  submitSelectedPlayer() {
    this.selectedPlayerId = this.bowlingPlayerForm.controls['selectedPlayer'].value;
    console.log("valur "+this.bowlingPlayerForm.controls['selectedPlayer'].value);
    for (let player of this.playersList){
      if (player.playerID == this.selectedPlayerId){
        this.currentPlayer = new CurrentPlayer( player.playerID,player.playerName,"bawling",this.bowlerSide);
      }
    }
    console.log("current Plyer "+ this.currentPlayer.playerName);

    this.COMMON_SERVICE.NewCurrentPlayer(this.currentPlayer).subscribe( res => {
      console.log(res);
    },error => {
      console.log("err "+error);
    })
  }
}
