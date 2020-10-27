import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Services/common.service';
import {Match} from '../../../Models/match';
import {Player} from '../../../Models/player';

@Component({
  selector: 'app-add-new-batsman',
  templateUrl: './add-new-batsman.component.html',
  styleUrls: ['./add-new-batsman.component.css']
})
export class AddNewBatsmanComponent implements OnInit {

  matchDetails : Match[];
  playersList : Player[]
  battingTeamId : number;

  constructor(private COMMON_SERVICE : CommonService) { }

  ngOnInit(): void {
    this.fetchMatchDetails();
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


}
