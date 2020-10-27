import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {TeamOneCreationComponent} from './team-one-creation/team-one-creation.component';
import {TeamTwoCreationComponent} from './team-two-creation/team-two-creation.component';
import {CommonService} from '../../Services/common.service';

@Component({
  selector: 'app-team-creation',
  templateUrl: './team-creation.component.html',
  styleUrls: ['./team-creation.component.css']
})
export class TeamCreationComponent implements OnInit {

  TeamOneButtonEnable : boolean = false;
  TeamTwoButtonEnable : boolean = false;

  constructor(private _MatDialog: MatDialog,
              private COMMON_SERVICE : CommonService) { }

  ngOnInit(): void {
    this.teamOnePlayersFetch();
    this.teamTwoPlayersFetch();
  }


  teamOneCreationDialog() {
    this._MatDialog.open(TeamOneCreationComponent,{
      disableClose:true,
      width:"100%",
      height:"80%"
    });
  }

  teamTwoCreationDialog() {
    this._MatDialog.open(TeamTwoCreationComponent,{
      disableClose:true,
      width:"100%",
      height:"80%"
    });
  }

  teamOnePlayersFetch(){
    // this.COMMON_SERVICE.getTeamOneAllPlayers().subscribe(res => {
    //   console.log(res);
    //   if (res.length == 0){
    //     this.TeamOneButtonEnable = false;
    //   }else {
    //     this.TeamOneButtonEnable = true;
    //   }
    // },error => {
    //   console.log("err"+error);
    // });
  }

  teamTwoPlayersFetch(){
    // this.COMMON_SERVICE.getTeamTwoAllPlayers().subscribe(res => {
    //   console.log(res);
    //   if (res.length == 0){
    //     this.TeamTwoButtonEnable = false;
    //   }else {
    //     this.TeamTwoButtonEnable = true;
    //   }
    // },error => {
    //   console.log("err"+error);
    // });
  }

}
