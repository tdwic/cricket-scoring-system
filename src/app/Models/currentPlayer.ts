export class CurrentPlayer{
  playerID:number;
  playerName:string;
  playerRole:string;
  playerBattingSideForUI:string;


  constructor(playerID: number, playerName: string, playerRole: string, playerBattingSideForUI: string) {
    this.playerID = playerID;
    this.playerName = playerName;
    this.playerRole = playerRole;
    this.playerBattingSideForUI = playerBattingSideForUI;
  }
}
