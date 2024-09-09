import { LoadingComponent } from "@components/common/LoadingComponent";
import { CombatResult } from "@components/modules/DuelResult";
import { PromptForm } from "@components/modules/PromptForm";
import { useState } from "react";
import { postBattle } from "src/api/Battle/api";

import { useAuth } from "@hooks/useAuth";
import { useEnemy } from "@hooks/useEnemy";
import { useUser } from "@hooks/userUser";

import type { PromptFormType } from "@own_types/PromptType";
import type { CombatLogType } from "src/api/Battle/type";

export const TopPage = () => {
  const { isProfileLoading, profile } = useAuth();
  const {
    data: userData,
    isLoading: isLoadingUser,
    mutate: mutateUser,
  } = useUser();
  const {
    data: enemyData,
    isLoading: isLoadingEnemyData,
    mutate: mutateEnemy,
    isValidating: isValidatingEnemy,
  } = useEnemy();
  const [isDuel, setIsDuel] = useState(false);
  const [combatResult, setCombatResult] = useState<CombatLogType>({
    winner: "system",
    combatLogs: [],
  });

  const [isLoadingCombat, setIsLoadingCombat] = useState(false);
  const [promptForm, setPromptForm] = useState<PromptFormType>({
    name: "",
    prompt: "",
  });

  const onClickSubmitPrompt = async (data: PromptFormType) => {
    if (!enemyData) return;
    setPromptForm(data);
    setIsLoadingCombat(true);
    const result = await postBattle({ ...data, enemyID: enemyData.enemyID });
    setIsDuel(true);
    setCombatResult(result);
    mutateUser();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsLoadingCombat(false);
  };
  const onClickSubmitNextBattle = () => {
    mutateEnemy();
    setIsDuel(false);
    setCombatResult({ winner: "system", combatLogs: [] });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (isProfileLoading || !profile) return <LoadingComponent />;
  if (isLoadingUser || !userData) return <LoadingComponent />;
  if (isLoadingEnemyData || !enemyData) return <LoadingComponent />;

  return (
    <main className="flex flex-col items-center gap-10 bg-slate-50 py-10">
      {(isLoadingCombat || isValidatingEnemy) && (
        <LoadingComponent opacity={true} />
      )}
      <div className="flex w-full flex-col items-center gap-3 px-2 py-6">
        <span className="text-2xl font-bold">対戦相手：{enemyData.name}</span>
        <img
          src={enemyData.imageUrl}
          className="h-auto w-full object-contain"
          alt=""
        />

        {isDuel ? (
          <>
            <CombatResult data={combatResult} />
            <button
              onClick={onClickSubmitNextBattle}
              className="flex w-full items-center justify-center rounded bg-slate-400 py-4 text-2xl font-bold"
            >
              別の対戦相手を探す
            </button>
          </>
        ) : (
          <PromptForm
            promptContent={promptForm}
            onClickSubmit={onClickSubmitPrompt}
          />
        )}
      </div>

      <div className="flex w-full flex-col items-center gap-3 bg-slate-100 p-6">
        <span className="text-2xl font-bold">
          挑戦者：{profile.displayName}
        </span>
        <img
          className="size-20 rounded-full object-contain"
          src={profile.pictureUrl}
          alt=""
        />
        <div className="flex w-full flex-row justify-between text-5xl font-bold">
          <span className="text-red-500">{userData.winCount}勝</span>
          <span className="text-blue-500">{userData.lossCount}敗</span>
        </div>
        <div className="flex w-full flex-row justify-center text-2xl font-bold">
          <span>{userData.hotStreak}連勝中！</span>
        </div>
      </div>
    </main>
  );
};
