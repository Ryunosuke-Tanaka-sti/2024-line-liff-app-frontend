import { CombatResult } from "@components/modules/DuelResult";
import { PromptForm } from "@components/modules/PromptForm";
import { PromptFormType } from "@own_types/PromptType";
import { useState } from "react";
import { postBattle } from "src/api/Battle/mock";

export const DummyPage = () => {
  const [isDuel, setIsDuel] = useState(true);

  const onClickSubmitPrompt = (data: PromptFormType) => {
    console.log("Prompt submitted", data);
    setIsDuel(true);
  };
  const onClickSubmitNextBattle = () => {
    console.log("Next battle submitted");
    setIsDuel(false);
  };

  return (
    <main className="my-10 flex flex-col items-center gap-10 bg-slate-50">
      <div className="flex w-full flex-col items-center gap-3 bg-slate-100 p-6">
        <span className="text-2xl font-bold">挑戦者：Dummy User</span>
        <img
          className="size-20 rounded-full object-contain"
          src="https://placehold.jp/300x300.png"
          alt=""
        />
        <div className="flex w-full flex-row justify-between text-5xl font-bold">
          <span className="text-red-500">3勝</span>
          <span className="text-blue-500">3敗</span>
        </div>
        <div className="flex w-full flex-row justify-center text-2xl font-bold">
          <span>3連勝中！</span>
        </div>
      </div>
      <div className="flex w-full flex-col items-center gap-3 px-2">
        <span className="text-2xl font-bold">対戦相手：Dummy User</span>
        <img
          src="https://placehold.jp/300x300.png"
          className="h-auto w-full object-contain"
          alt=""
        />
        {isDuel ? (
          <>
            <CombatResult data={postBattle} />
            <button
              onClick={onClickSubmitNextBattle}
              className="flex w-full items-center justify-center rounded bg-slate-400 py-4 text-2xl font-bold"
            >
              別の対戦相手を探す
            </button>
          </>
        ) : (
          <PromptForm
            promptContent={{ name: "", prompt: "" }}
            onClickSubmit={onClickSubmitPrompt}
          />
        )}
      </div>
    </main>
  );
};
