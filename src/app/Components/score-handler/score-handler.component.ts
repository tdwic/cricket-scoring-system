import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {filter} from 'rxjs/operators';
import {CommonService} from '../../Services/common.service';
import {Player} from '../../Models/player';

@Component({
  selector: 'app-score-handler',
  templateUrl: './score-handler.component.html',
  styleUrls: ['./score-handler.component.css']
})
export class ScoreHandlerComponent implements OnInit {

  LeftSideBatsMan = false;
  RightSideBatsMan = false;

  FirstBallMarks: string;
  SecondBallMarks: string;
  ThirdBallMarks: string;
  FourthBallMarks: string;
  FifthBallMarks: string;
  SixthBallMarks: string;

  TeamOnePlayersList : Player[];
  TeamTwoPlayersList : Player[];

  Message = "parent";
  channel = new BroadcastChannel('channel-name');

  constructor(private COMMON_SERVICE : CommonService) {
  }


  ngOnInit(): void {

  }

  AddNewBatsmanLeftSide(){

    // this.channel.postMessage([{name:'tahrindu',age:23},{name:'tahrindu2',age:223}])

    this.COMMON_SERVICE.getTeamOneAllPlayers().subscribe(res =>{
      this.TeamOnePlayersList  = res;
      console.log(this.TeamOnePlayersList);
      this.LeftSideBatsMan = !this.LeftSideBatsMan;
    },error => {
      console.log(error);
    })

  }

  AddNewBatsmanRightSide(){
    this.RightSideBatsMan = !this.RightSideBatsMan;
  }

}
