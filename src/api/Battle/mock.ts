import { CombatLogType } from "./type";

export const postBattle: CombatLogType = {
  winner: "user",
  combatLogs: [
    {
      round: 1,
      combatLog:
        "ボクシングチャンピオンが鋭いパンチを放ち、訓練場の教官は鉄の盾で防ぎましたが、その衝撃で教官の体が揺らぎました。",
    },
    {
      round: 2,
      combatLog:
        "訓練場の教官が強力な斬撃を放ち、ボクシングチャンピオンは素早くステップで避けました。",
    },
    {
      round: 3,
      combatLog:
        "ボクシングチャンピオンが連続攻撃を繰り出し、教官の防御を少しずつ崩し始めました。",
    },
    {
      round: 4,
      combatLog:
        "訓練場の教官が鉄の剣で力強い攻撃を繰り出し、ボクシングチャンピオンは辛うじて回避しましたが、その攻撃の勢いに一瞬たじろぎました。",
    },
    {
      round: 5,
      combatLog:
        "ボクシングチャンピオンが全力でパンチを放ち、教官の防御を打ち破ることに成功しました。教官はその一撃で膝をつきました。",
    },
  ],
};
