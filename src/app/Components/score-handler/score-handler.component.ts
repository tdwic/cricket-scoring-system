import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {filter} from 'rxjs/operators';
import {CommonService} from '../../Services/common.service';
import {Player} from '../../Models/player';
import {MatDialog} from '@angular/material/dialog';
import {AddNewBatsmanComponent} from './add-new-batsman/add-new-batsman.component';
import {AddNewBowlerComponent} from './add-new-bowler/add-new-bowler.component';
import {CurrentPlayer} from '../../Models/currentPlayer';

@Component({
  selector: 'app-score-handler',
  templateUrl: './score-handler.component.html',
  styleUrls: ['./score-handler.component.css']
})
export class ScoreHandlerComponent implements OnInit {

  LeftSideBatsMan = false;
  RightSideBatsMan = false;
  BowlerToggle = false;

  LeftPlayerOnStrikeToggle = true;
  RightPlayerOnStrikeToggle = false;

  FirstBallMarks: string;
  SecondBallMarks: string;
  ThirdBallMarks: string;
  FourthBallMarks: string;
  FifthBallMarks: string;
  SixthBallMarks: string;

  currentPlayers : CurrentPlayer[];

  leftBatMan : Player;
  rightBatman : Player;
  bowler : Player;

  OnStrikeBatsManID : number;

  Message = "parent";
  channel = new BroadcastChannel('channel-name');

  constructor(private COMMON_SERVICE : CommonService,
              private _MatDialog: MatDialog) {
  }


  ngOnInit(): void {
    this.FirstBallMarks = "2"

    this.fetchCurrentPlayersDetails();
  }

  AddNewBatsmanLeftSide(){

    this._MatDialog.open(AddNewBatsmanComponent,{
      disableClose:true,
      width:"80%",
      data:{
        side:"left"
      }
    }).afterClosed().subscribe( res => {
      this.fetchCurrentPlayersDetails();
    });
  }

  AddNewBatsmanRightSide(){
    this._MatDialog.open(AddNewBatsmanComponent,{
      disableClose:true,
      width:"80%",
      data:{
        side:"right"
      }
    }).afterClosed().subscribe( res => {
      this.fetchCurrentPlayersDetails();
    });
    //this.RightSideBatsMan = !this.RightSideBatsMan;
  }

  addNewBowler() {
    this._MatDialog.open(AddNewBowlerComponent,{
      disableClose:true,
      width:"80%",
      data:{
        side:"bowler"
      }
    }).afterClosed().subscribe( res => {
      this.fetchCurrentPlayersDetails();
    });
  }


  fetchCurrentPlayersDetails(){
    this.COMMON_SERVICE.getAllCurrentPlayers().subscribe( res => {
      this.LeftSideBatsMan = false;
      this.RightSideBatsMan = false;
      this.BowlerToggle = false;
      this.currentPlayers = res;

      for (let player of this.currentPlayers){
        if (player.playerRole === "batting" && player.playerBattingSideForUI === "left"){
          this.leftBatMan = new Player(player.playerID,player.playerName,null,null,null);
          this.LeftSideBatsMan = true;
        }else if (player.playerRole === "batting" && player.playerBattingSideForUI === "right"){
          this.rightBatman = new Player(player.playerID,player.playerName,null,null,null);
          this.RightSideBatsMan = true;
        }else {
          this.bowler = new Player(player.playerID,player.playerName,null,null,null);
          this.BowlerToggle = true;
        }
      }

    }, error => {
      console.log("err " + error);
    });
  }


  LeftOnStrike() {
    this.LeftPlayerOnStrikeToggle = !this.LeftPlayerOnStrikeToggle;
    this.RightPlayerOnStrikeToggle = !this.RightPlayerOnStrikeToggle;
    this.OnStrikeBatsManID = this.leftBatMan.playerID;
    alert("ID " + this.OnStrikeBatsManID);
  }

  RightOnStrike() {
    this.LeftPlayerOnStrikeToggle = !this.LeftPlayerOnStrikeToggle;
    this.RightPlayerOnStrikeToggle = !this.RightPlayerOnStrikeToggle;
    this.OnStrikeBatsManID = this.rightBatman.playerID;
    alert("ID " + this.OnStrikeBatsManID);
  }
}
