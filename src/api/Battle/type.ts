export type CombatLogType = {
  winner: "system" | "user";
  combatLogs: { round: number; combatLog: string }[];
};
