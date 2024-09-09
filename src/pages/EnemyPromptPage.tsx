import { EnemyPromptFormType } from "@own_types/PromptType";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { postEnemy } from "src/api/Enemy/api";

export const EnemyPromptPage = () => {
  const [isSubmit, setIsSubmit] = useState(false);

  const { handleSubmit, register, reset } = useForm<EnemyPromptFormType>({
    defaultValues: {
      name: "",
      prompt: "",
      originalContentUrl: "",
      previewImageUrl: "",
    },
  });
  const onSubmit: SubmitHandler<EnemyPromptFormType> = async (
    data: EnemyPromptFormType
  ) => {
    setIsSubmit(true);
    await postEnemy(data);
    setIsSubmit(false);
    console.log(data);
    reset();
  };

  return (
    <main className="flex flex-col items-center gap-10 bg-slate-50 py-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-2"
      >
        <label className="flex w-full flex-col">
          <ul className="flex flex-row items-center justify-between text-sm font-bold">
            <li>挑戦者の名前</li>
            <li className="px-2 text-xs text-red-500">*必須</li>
          </ul>
          <input
            className="p-1"
            type="text"
            {...register("name", {
              required: "名前を入力してください。",
              maxLength: {
                value: 20,
                message: "20文字以内で入力してください。",
              },
            })}
            placeholder="名前を入力してください。"
          />
        </label>
        <label className="flex w-full flex-col">
          <ul className="flex flex-row items-center justify-between text-sm font-bold">
            <li>特徴・武器</li>
            <li className="px-2 text-xs text-red-500">*必須</li>
          </ul>
          <textarea
            className="h-72 p-1"
            {...register("prompt", {
              required: "ここは極力入力いただいたほうが精度が高まります。",
              maxLength: {
                value: 300,
                message: "300文字以内で入力してください。",
              },
            })}
            placeholder="ここを埋めることで、対戦相手によりリアルな戦闘が提供されます。"
          />
        </label>
        <label className="flex w-full flex-col">
          <ul className="flex flex-row items-center justify-between text-sm font-bold">
            <li>originalContentUrl</li>
            <li className="px-2 text-xs text-red-500">*必須</li>
          </ul>
          <input
            className="p-1"
            {...register("originalContentUrl", {
              required: "画像用",
            })}
            placeholder="https://xxxxx.com/xxxxx.jpg"
          />
        </label>
        <label className="flex w-full flex-col">
          <ul className="flex flex-row items-center justify-between text-sm font-bold">
            <li>previewImageUrl</li>
            <li className="px-2 text-xs text-red-500">*必須</li>
          </ul>
          <input
            className="p-1"
            {...register("previewImageUrl", {
              required: "画像用",
            })}
            placeholder="https://xxxxx.com/xxxxx.jpg"
          />
        </label>
        <button
          disabled={isSubmit}
          className="flex w-full items-center justify-center bg-green-600 py-4 text-xl font-bold text-white"
        >
          送信
        </button>
      </form>
    </main>
  );
};
