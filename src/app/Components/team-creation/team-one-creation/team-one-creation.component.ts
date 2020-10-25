import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Team} from '../../../Models/team';
import {Player} from '../../../Models/player';
import {CommonService} from '../../../Services/common.service';

// interface Player{
//   playerID:string;
//   playerName:string;
//   playerTeamId:number;
//   battingStyle:string;
//   bowlingStyle:string
// }

@Component({
  selector: 'app-team-one-creation',
  templateUrl: './team-one-creation.component.html',
  styleUrls: ['./team-one-creation.component.css']
})
export class TeamOneCreationComponent implements OnInit {

  teamCreationForm : FormGroup;
  private player:Player;
  playersList : Player[] = [];
  private team: Team;

  // let players:Player[] = [];

  constructor(private COMMON_SERVICE : CommonService) { }

  ngOnInit(): void {

    this.teamCreationForm = new FormGroup({
      teamName:new FormControl('',[Validators.required]),
      teamLogName:new FormControl('',[Validators.required]),
      player1Name:new FormControl('',[Validators.required]),
      player1BattingStyle:new FormControl('',[Validators.required]),
      player1BowlingStyle:new FormControl('',[Validators.required]),
      player2Name:new FormControl('',[Validators.required]),
      player2BattingStyle:new FormControl('',[Validators.required]),
      player2BowlingStyle:new FormControl('',[Validators.required]),
      player3Name:new FormControl('',[Validators.required]),
      player3BattingStyle:new FormControl('',[Validators.required]),
      player3BowlingStyle:new FormControl('',[Validators.required]),
      player4Name:new FormControl('',[Validators.required]),
      player4BattingStyle:new FormControl('',[Validators.required]),
      player4BowlingStyle:new FormControl('',[Validators.required]),
      player5Name:new FormControl('',[Validators.required]),
      player5BattingStyle:new FormControl('',[Validators.required]),
      player5BowlingStyle:new FormControl('',[Validators.required]),
      player6Name:new FormControl('',[Validators.required]),
      player6BattingStyle:new FormControl('',[Validators.required]),
      player6BowlingStyle:new FormControl('',[Validators.required]),
      player7Name:new FormControl('',[Validators.required]),
      player7BattingStyle:new FormControl('',[Validators.required]),
      player7BowlingStyle:new FormControl('',[Validators.required]),
      player8Name:new FormControl('',[Validators.required]),
      player8BattingStyle:new FormControl('',[Validators.required]),
      player8BowlingStyle:new FormControl('',[Validators.required]),
      player9Name:new FormControl('',[Validators.required]),
      player9BattingStyle:new FormControl('',[Validators.required]),
      player9BowlingStyle:new FormControl('',[Validators.required]),
      player10Name:new FormControl('',[Validators.required]),
      player10BattingStyle:new FormControl('',[Validators.required]),
      player10BowlingStyle:new FormControl('',[Validators.required]),
      player11Name:new FormControl('',[Validators.required]),
      player11BattingStyle:new FormControl('',[Validators.required]),
      player11BowlingStyle:new FormControl('',[Validators.required]),
    })

  }

  submitTeam() {
    console.log(this.teamCreationForm);
    this.team = new Team(null, this.teamCreationForm.controls['teamName'].value, this.teamCreationForm.controls['teamLogName'].value);
    console.log(this.team);

    this.COMMON_SERVICE.NewTeam(this.team).subscribe(res =>{
      console.log(res);
      this.team.TeamId = res.teamID;

      this.AddTeamPlayers(this.team.TeamId);

    },error => {
      console.log("db error");
    })

  }

  AddTeamPlayers(teamID:number){

    this.player = new Player(null,
                              this.teamCreationForm.controls['player1Name'].value,
                              teamID,
                              this.teamCreationForm.controls['player1BattingStyle'].value,
                              this.teamCreationForm.controls['player1BowlingStyle'].value);

    this.playersList.push(this.player);


    this.player = new Player(null,
                              this.teamCreationForm.controls['player2Name'].value,
                              teamID,
                              this.teamCreationForm.controls['player2BattingStyle'].value,
                              this.teamCreationForm.controls['player2BowlingStyle'].value);

    this.playersList.push(this.player);

    //

    this.player = new Player(null,
      this.teamCreationForm.controls['player3Name'].value,
      teamID,
      this.teamCreationForm.controls['player3BattingStyle'].value,
      this.teamCreationForm.controls['player3BowlingStyle'].value);

    this.playersList.push(this.player);

    this.player = new Player(null,
      this.teamCreationForm.controls['player4Name'].value,
      teamID,
      this.teamCreationForm.controls['player4BattingStyle'].value,
      this.teamCreationForm.controls['player4BowlingStyle'].value);

    this.playersList.push(this.player);

    this.player = new Player(null,
      this.teamCreationForm.controls['player5Name'].value,
      teamID,
      this.teamCreationForm.controls['player5BattingStyle'].value,
      this.teamCreationForm.controls['player5BowlingStyle'].value);

    this.playersList.push(this.player);

    this.player = new Player(null,
      this.teamCreationForm.controls['player6Name'].value,
      teamID,
      this.teamCreationForm.controls['player6BattingStyle'].value,
      this.teamCreationForm.controls['player6BowlingStyle'].value);

    this.playersList.push(this.player);

    this.player = new Player(null,
      this.teamCreationForm.controls['player7Name'].value,
      teamID,
      this.teamCreationForm.controls['player7BattingStyle'].value,
      this.teamCreationForm.controls['player7BowlingStyle'].value);

    this.playersList.push(this.player);

    this.player = new Player(null,
      this.teamCreationForm.controls['player8Name'].value,
      teamID,
      this.teamCreationForm.controls['player8BattingStyle'].value,
      this.teamCreationForm.controls['player8BowlingStyle'].value);

    this.playersList.push(this.player);

    this.player = new Player(null,
      this.teamCreationForm.controls['player9Name'].value,
      teamID,
      this.teamCreationForm.controls['player9BattingStyle'].value,
      this.teamCreationForm.controls['player9BowlingStyle'].value);

    this.playersList.push(this.player);

    this.player = new Player(null,
      this.teamCreationForm.controls['player10Name'].value,
      teamID,
      this.teamCreationForm.controls['player10BattingStyle'].value,
      this.teamCreationForm.controls['player10BowlingStyle'].value);

    this.playersList.push(this.player);

    this.player = new Player(null,
      this.teamCreationForm.controls['player11Name'].value,
      teamID,
      this.teamCreationForm.controls['player11BattingStyle'].value,
      this.teamCreationForm.controls['player11BowlingStyle'].value);

    this.playersList.push(this.player);

    this.COMMON_SERVICE.NewPlayerListTeamOne(this.playersList).subscribe(res=>{
      console.log(res);
      alert("Players added");
    },error => {
      console.log(error);
    })

  }

}
