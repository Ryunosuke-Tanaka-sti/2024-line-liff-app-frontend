import { CombatLogType } from "src/api/Battle/type";

type CombatResultProps = {
  data: CombatLogType;
};

export const CombatResult = (props: CombatResultProps) => {
  const { data } = props;
  const { winner, combatLogs } = data;

  const DuelWinner = () => {
    if (winner == "system") {
      return (
        <div className="flex w-full items-center justify-center rounded bg-red-400 py-4 text-2xl font-bold text-white">
          あなたの負け
        </div>
      );
    } else {
      return (
        <div className="flex w-full items-center justify-center rounded bg-blue-400 py-4 text-2xl font-bold text-white">
          あなたの勝ち
        </div>
      );
    }
  };

  return (
    <div className="flex w-full flex-col gap-2">
      <DuelWinner />
      {combatLogs.map((log) => (
        <div
          key={log.round}
          className="flex w-full flex-col rounded bg-green-300/50 p-2 "
        >
          <span className="text-xl font-bold">Round {log.round}</span>
          <span className="text-base">{log.combatLog}</span>
        </div>
      ))}
    </div>
  );
};
