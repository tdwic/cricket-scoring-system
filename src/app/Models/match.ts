export class Match{

  matchId:number;
  battingTeamId:number;
  bowlingTeamId:number;
  noOfOvers:number;


  constructor(matchId: number, battingTeamId: number, bowlingTeamId: number, noOfOvers: number) {
    this.matchId = matchId;
    this.battingTeamId = battingTeamId;
    this.bowlingTeamId = bowlingTeamId;
    this.noOfOvers = noOfOvers;
  }
}
