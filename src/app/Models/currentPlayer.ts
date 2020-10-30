export class CurrentPlayer{
  playerID:number;
  playerName:string;
  playerRole:string;
  playerBattingSideForUI:string;
  strikeStatus : string


  constructor(playerID: number, playerName: string, playerRole: string, playerBattingSideForUI: string, strikeStatus:string) {
    this.playerID = playerID;
    this.playerName = playerName;
    this.playerRole = playerRole;
    this.playerBattingSideForUI = playerBattingSideForUI;
    this.strikeStatus = strikeStatus;
  }
}
