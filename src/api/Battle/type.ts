export type CombatLogType = {
  winner: "system" | "user";
  combatLogs: { round: number; combatLog: string }[];
};

export type RequestPostBattleType = {
  enemyID: string;
  name: string;
  prompt: string;
};
