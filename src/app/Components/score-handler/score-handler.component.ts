import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {filter} from 'rxjs/operators';
import {InteractionServiceService} from '../../interaction-service.service';

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

  Message = "parent";

  channel = new BroadcastChannel('channel-name');

  constructor(private _messageServie : InteractionServiceService) {
  }


  ngOnInit(): void {

  }

  AddNewBatsmanLeftSide(){
    this.LeftSideBatsMan = !this.LeftSideBatsMan;
    this._messageServie.sendMessage("btn clicked")
    this.channel.postMessage("hi alls")
  }

  AddNewBatsmanRightSide(){
    this.RightSideBatsMan = !this.RightSideBatsMan;
  }

}
