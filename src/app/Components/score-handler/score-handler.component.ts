import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {filter} from 'rxjs/operators';
import {CommonService} from '../../Services/common.service';
import {Player} from '../../Models/player';
import {MatDialog} from '@angular/material/dialog';
import {AddNewBatsmanComponent} from './add-new-batsman/add-new-batsman.component';
import {AddNewBowlerComponent} from './add-new-bowler/add-new-bowler.component';
import {CurrentPlayer} from '../../Models/currentPlayer';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import {ShowSnackBar} from '../../SnackBar/ShowSnackBar';

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

  playerDto : Player;

  OnStrikeBatsManID : number;

  //Parameters Related To Score

  teamTotalScore : number = 0;
  oversCount : number = 1;
  ballsCount : number = 0;
  wicketCount : number = 0;

  //Parameters Related To Score

  Message = "parent";
  channel = new BroadcastChannel('channel-name');

  constructor(private COMMON_SERVICE : CommonService,
              private _MatDialog: MatDialog,
              private _SnackBar: MatSnackBar) {
  }


  ngOnInit(): void {
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
    this.ShowMessageBox("Im On Strike Now","Ok");
  }

  RightOnStrike() {
    this.LeftPlayerOnStrikeToggle = !this.LeftPlayerOnStrikeToggle;
    this.RightPlayerOnStrikeToggle = !this.RightPlayerOnStrikeToggle;
    this.OnStrikeBatsManID = this.rightBatman.playerID;
    this.ShowMessageBox("Im On Strike Now","Ok");
  }


  //Message Segemetn
  horizontalPosition : MatSnackBarHorizontalPosition;
  verticalPosition : MatSnackBarVerticalPosition;
  ShowMessageBox(message : string , action : string){
    this._SnackBar.open(message,action , {
      duration : 2000,
      horizontalPosition : 'right',
      verticalPosition : 'top'
    })
  }



//Functions for all button events

  /**
   * playerRuns
   * @param score 
   */

  BattingPlayerScoreChanged(score : number){
    console.log("score " + score);
    this.teamTotalScore = this.teamTotalScore + score;
    this.OversCounter();
    this.OverDisplayChanger(score.toString());
  }

  ByeRunsCounter(){

  }

  LegByeRunsCounter(){
    
  }

  /**
   * No ball button
   */
  NoBallCounter() {
    this.teamTotalScore = this.teamTotalScore + 1;
    this.OversCounter();
    this.OverDisplayChanger("NB");
  }

    /**
   * no ball with runs
   */
  NoBallWithRunsCounter() {

  }

  /**
   * wide ball button
   */
  WideBallCounter() {
    this.teamTotalScore = this.teamTotalScore + 1;
    this.OversCounter();
    this.OverDisplayChanger("WB");
  }

  /**
   * wide ball with runs
   */
  WideBallWithRunsCounter() {

  }

//Functions for all button events

  OverDisplayChanger(score : string){
    if (this.ballsCount == 6){
      this.SixthBallMarks =  score.toString();
    }else if (this.ballsCount == 5){
      this.FifthBallMarks =  score.toString();
    }else if (this.ballsCount == 4){
      this.FourthBallMarks =  score.toString();
    }else if (this.ballsCount == 3){
      this.ThirdBallMarks =  score.toString();
    }else if (this.ballsCount == 2){
      this.SecondBallMarks =  score.toString();
    }else {
      this.FirstBallMarks =  score.toString();
    }

  }

  OversCounter(){
    this.ballsCount ++;

    if (this.ballsCount == 6){
      this.RemoveBallerFromCurrentPlayerDB(this.bowler.playerID);
    }

    if (this.ballsCount > 6){
      this.CLeanAllOverDisplay();
      this.ballsCount = 1;
      this.oversCount ++;
    }
  }

  CLeanAllOverDisplay() {
    this.SixthBallMarks = null;
    this.FifthBallMarks = null;
    this.FourthBallMarks = null;
    this.ThirdBallMarks = null;
    this.SecondBallMarks = null;
    this.FirstBallMarks = null;
  }

  RemoveBallerFromCurrentPlayerDB(playerID : number){
    this.playerDto = new Player(playerID,null,null,null,null);

    this.COMMON_SERVICE.RemoveCurrentPlayerByPlayerId(this.playerDto).subscribe( res => {
      this.fetchCurrentPlayersDetails();
    }, error => {
      console.log("error " + error);
    });
  }

}
