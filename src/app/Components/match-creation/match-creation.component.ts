import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CommonService} from '../../Services/common.service';
import {Team} from '../../Models/team';
import {Match} from '../../Models/match';
import {THIS_EXPR} from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-match-creation',
  templateUrl: './match-creation.component.html',
  styleUrls: ['./match-creation.component.css']
})
export class MatchCreationComponent implements OnInit {

  matchCreationForm: FormGroup;
  teamsList : Team[];
  match:Match;
  noOfOvers:number;
  battingTeamId:number;
  bowlingTeamId:number;
  submitButtonEnable : boolean = true;

  constructor(private COMMON_SERVICE : CommonService) { }

  ngOnInit(): void {
    this.fetchAllTeams();



    this.matchCreationForm = new FormGroup({
      battingTeam : new FormControl('',[Validators.required]),
      noOfOvers : new FormControl('',[Validators.required]),
    });

    this.fetchMatchDetails();

  }

  createMatch() {

    this.battingTeamId = this.matchCreationForm.controls['battingTeam'].value;
    this.noOfOvers = this.matchCreationForm.controls['noOfOvers'].value;

    for (let obj of this.teamsList){
      if (this.battingTeamId != obj.teamID){
        this.bowlingTeamId = obj.teamID;
      }
    }

    this.match = new Match(null,this.battingTeamId,this.bowlingTeamId,this.noOfOvers);

    console.log("Bat " + this.battingTeamId);
    console.log("Bowl " + this.bowlingTeamId);

    this.COMMON_SERVICE.NewMatch(this.match).subscribe(res =>{
      console.log(res);
      alert("Match Created");
    }, error => {
      console.log("err "+ error);
    })

  }

  fetchAllTeams(){
    this.COMMON_SERVICE.getAllTeams().subscribe(res => {
      this.teamsList = res;
      console.log(res);
      console.log(this.teamsList[0].teamID);
      console.log(this.teamsList[1].teamID);
    },error => {
      console.log("err" + error);
    });
  }

  fetchMatchDetails(){
    this.COMMON_SERVICE.getAllMatchDetails().subscribe( res => {
      console.log(res);
      if (res.length == 0){
        this.submitButtonEnable = false;
      }else {
        this.submitButtonEnable = true;
      }
    })
  }

}
