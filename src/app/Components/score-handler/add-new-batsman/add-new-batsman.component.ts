import {Component, Inject, OnInit} from '@angular/core';
import { CommonService } from 'src/app/Services/common.service';
import {Match} from '../../../Models/match';
import {Player} from '../../../Models/player';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CurrentPlayer} from '../../../Models/currentPlayer';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-add-new-batsman',
  templateUrl: './add-new-batsman.component.html',
  styleUrls: ['./add-new-batsman.component.css']
})
export class AddNewBatsmanComponent implements OnInit {

  matchDetails : Match[];
  playersList : Player[];
  currentPlayer : CurrentPlayer;
  battingTeamId : number;
  selectedPlayerId:number;
  batsmanSide:string;
  battingPlayerForm : FormGroup;

  constructor(private COMMON_SERVICE : CommonService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.batsmanSide = data.side;
  }

  ngOnInit(): void {
    this.fetchMatchDetails();

    this.battingPlayerForm = new FormGroup({
      selectedPlayer:new FormControl('',[Validators.required])
    })

  }

  fetchMatchDetails(){
    this.COMMON_SERVICE.getAllMatchDetails().subscribe(res =>{

      this.matchDetails = res;
      this.battingTeamId = this.matchDetails[0].battingTeamId;

      this.fetchBatMansList(this.battingTeamId);

    } ,error => {
      console.log("err "+error);
    })
  }

  fetchBatMansList(teamId:number){
    this.COMMON_SERVICE.getAllPlayersByTeamId(teamId).subscribe( res => {
      this.playersList = res;
      console.log("Bats list "+ this.playersList);
    },error => {
      console.log("err "+error);
    });
  }

  submitSelectedPlayer(){
    this.selectedPlayerId = this.battingPlayerForm.controls['selectedPlayer'].value;
    console.log("valur "+this.battingPlayerForm.controls['selectedPlayer'].value);
    for (let player of this.playersList){
      if (player.playerID == this.selectedPlayerId){
        this.currentPlayer = new CurrentPlayer( player.playerID,player.playerName,"batting",this.batsmanSide,"no-strike");
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
