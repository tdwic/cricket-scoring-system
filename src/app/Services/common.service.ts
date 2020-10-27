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
  public geAllPlayers():Observable<any>{
    return this._http_.get<any>(this._apiUrl_+"/players");
  }

  public getAllTeams():Observable<any>{
    return this._http_.get<any>(this._apiUrl_+"/team");
  }

  public getAllMatchDetails():Observable<any>{
    return this._http_.get<any>(this._apiUrl_+"/match");
  }

  public getAllPlayersByTeamId(teamId):Observable<any>{
    return this._http_.get<any>(this._apiUrl_+"/players/"+teamId);
  }
  //Get Methods


  //Post Methods
  public NewTeam(Team){
    return this._http_.post<any>(this._apiUrl_+"/team",Team);
  }

  public NewPlayerList(Players){
    return this._http_.post<any>(this._apiUrl_+"/players",Players);
  }

  public NewMatch(Match){
    return this._http_.post<any>(this._apiUrl_+"/match",Match);
  }

  //Post Methods
}
