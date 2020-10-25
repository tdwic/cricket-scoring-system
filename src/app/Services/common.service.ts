import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  _apiUrl_ :string = "http://localhost:8181";

  constructor(private _http_:HttpClient) { }

  //Get Methods
  public getTeamOneAllPlayers():Observable<any>{
    return this._http_.get<any>(this._apiUrl_+"/teamOnePlayers");
  }

  public getTeamTwoAllPlayers():Observable<any>{
    return this._http_.get<any>(this._apiUrl_+"/teamTwoPlayers");
  }

  public getAllTeams():Observable<any>{
    return this._http_.get<any>(this._apiUrl_+"/team");
  }
  //Get Methods


  //Post Methods
  public NewTeam(Team){
    return this._http_.post<any>(this._apiUrl_+"/team",Team);
  }

  public NewPlayerListTeamOne(Players){
    return this._http_.post<any>(this._apiUrl_+"/teamOnePlayers",Players);
  }

  public NewPlayerListTeamTwo(Players){
    return this._http_.post<any>(this._apiUrl_+"/teamTwoPlayers",Players);
  }

  //Post Methods
}
