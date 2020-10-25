import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {TeamOneCreationComponent} from './team-one-creation/team-one-creation.component';
import {TeamTwoCreationComponent} from './team-two-creation/team-two-creation.component';

@Component({
  selector: 'app-team-creation',
  templateUrl: './team-creation.component.html',
  styleUrls: ['./team-creation.component.css']
})
export class TeamCreationComponent implements OnInit {

  constructor(private _MatDialog: MatDialog) { }

  ngOnInit(): void {
  }


  teamOneCreationDialog() {
    this._MatDialog.open(TeamOneCreationComponent,{
      disableClose:false,
      width:"150%",
      height:"80%"
    });
  }

  teamTwoCreationDialog() {
    this._MatDialog.open(TeamTwoCreationComponent,{
      disableClose:false,
      width:"95%"
    });
  }
}
