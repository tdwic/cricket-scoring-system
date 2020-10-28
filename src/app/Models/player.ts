export class Player{
  playerID:number;
  playerName:string;
  playerTeamId:number;
  battingStyle:string;
  bowlingStyle:string


  constructor(playerID: number, playerName: string, playerTeamId: number, battingStyle: string, bowlingStyle: string) {
    this.playerID = playerID;
    this.playerName = playerName;
    this.playerTeamId = playerTeamId;
    this.battingStyle = battingStyle;
    this.bowlingStyle = bowlingStyle;
  }

  // get PlayerID(): string {
  //   return this.playerID;
  // }
  //
  // set PlayerID(value: string) {
  //   this.playerID = value;
  // }
  //
  // get PlayerName(): string {
  //   return this.playerName;
  // }
  //
  // set PlayerName(value: string) {
  //   this.playerName = value;
  // }
  //
  // get PlayerTeamId(): number {
  //   return this.playerTeamId;
  // }
  //
  // set PlayerTeamId(value: number) {
  //   this.playerTeamId = value;
  // }
  //
  // get BattingStyle(): string {
  //   return this.battingStyle;
  // }
  //
  // set BattingStyle(value: string) {
  //   this.battingStyle = value;
  // }
  //
  // get BowlingStyle(): string {
  //   return this.bowlingStyle;
  // }
  //
  // set BowlingStyle(value: string) {
  //   this.bowlingStyle = value;
  // }
}
