import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  _apiUrl_ :string = "http://localhost:8181";

  constructor(private _http_:HttpClient) { }

  public getTeamOneAllPlayers():Observable<any>{
    return this._http_.get<any>(this._apiUrl_+"/player");
  }

}
