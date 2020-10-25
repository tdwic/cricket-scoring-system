export class Player{
  private _playerID:string;
  private _playerName:string;
  private _playerTeamId:string;
  private _battingStyle:string;
  private _bowlingStyle:string


  constructor() {
  }

  get playerID(): string {
    return this._playerID;
  }

  set playerID(value: string) {
    this._playerID = value;
  }

  get playerName(): string {
    return this._playerName;
  }

  set playerName(value: string) {
    this._playerName = value;
  }

  get playerTeamId(): string {
    return this._playerTeamId;
  }

  set playerTeamId(value: string) {
    this._playerTeamId = value;
  }

  get battingStyle(): string {
    return this._battingStyle;
  }

  set battingStyle(value: string) {
    this._battingStyle = value;
  }

  get bowlingStyle(): string {
    return this._bowlingStyle;
  }

  set bowlingStyle(value: string) {
    this._bowlingStyle = value;
  }
}
