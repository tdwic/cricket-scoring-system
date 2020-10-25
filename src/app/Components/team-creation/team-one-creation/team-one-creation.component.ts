import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-team-one-creation',
  templateUrl: './team-one-creation.component.html',
  styleUrls: ['./team-one-creation.component.css']
})
export class TeamOneCreationComponent implements OnInit {

  teamCreationForm : FormGroup;

  constructor() { }

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
  }
}
