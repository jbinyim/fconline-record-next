export interface MatchDetailData {
  controller: number;
  shoot: number;
  effectShoot: number;
  share: number;
  tryPass: number;
  SuccessPass: number;
  foul: number;
  yellowCard: number;
  redCard: number;
  offside: number;
  cornerKick: number;
}

export interface ShootDetail {
  spId: number;
  result: number;
}

interface Shoot {
  goalTotal: number;
  shootTotal: number;
  effectiveShootTotal: number;
}

interface Pass {
  passTry: number;
  passSuccess: number;
}

interface MatchDetail {
  controller: number;
  possession: number;
  foul: number;
  yellowCards: number;
  redCards: number;
  offsideCount: number;
  cornerKick: number;
  matchResult: "승" | "패" | "무";
}

export interface MatchInfo {
  ouid: string;
  nickname: string;
  shoot: Shoot;
  shootDetail: ShootDetail[];
  pass: Pass;
  matchDetail: MatchDetail;
}

interface PlayerStatus {
  aerialSuccess: number;
  aerialTry: number;
  assist: number;
  ballPossesionSuccess: number;
  ballPossesionTry: number;
  block: number;
  blockTry: number;
  defending: number;
  dribble: number;
  dribbleSuccess: number;
  dribbleTry: number;
  effectiveShoot: number;
  goal: number;
  intercept: number;
  passSuccess: number;
  passTry: number;
  redCards: number;
  shoot: number;
  spRating: number;
  tackle: number;
  tackleTry: number;
  yellowCards: number;
}

export interface SpPlayer {
  spId: number;
  spPosition: number;
  spGrade: number;
  status: PlayerStatus;
}
