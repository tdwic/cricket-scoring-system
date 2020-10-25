export class Team{

  private teamID:number;
  private teamName:string;
  private teamLogoName:string;


  constructor(teamId: number, teamName: string, teamLogoName: string) {
    this.teamID = teamId;
    this.teamName = teamName;
    this.teamLogoName = teamLogoName;
  }


  get TeamId(): number {
    return this.teamID;
  }

  set TeamId(value: number) {
    this.teamID = value;
  }

  get TeamName(): string {
    return this.teamName;
  }

  set TeamName(value: string) {
    this.teamName = value;
  }

  get TeamLogoName(): string {
    return this.teamLogoName;
  }

  set TeamLogoName(value: string) {
    this.teamLogoName = value;
  }
}
