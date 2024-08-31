import { PromptFormType } from "@own_types/PromptType";
import { useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type PromptFormProps = {
  promptContent: PromptFormType;
  onClickSubmit: (data: PromptFormType) => void;
};

export const PromptForm = (props: PromptFormProps) => {
  const { promptContent, onClickSubmit } = props;
  const [isSubmit, setIsSubmit] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<PromptFormType>({
    defaultValues: promptContent,
  });
  const onSubmit: SubmitHandler<PromptFormType> = async (
    data: PromptFormType
  ) => {
    setIsSubmit(true);
    await onClickSubmit(data);
    setIsSubmit(false);
    console.log(data);
  };

  const ErrorNameContent = useMemo(() => {
    const error = errors.name;
    if (!error) return "";
    if (error.type === "required") {
      return "名前を入力してください。";
    }
    if (error.type === "maxLength") {
      return "20文字以内で入力してください。";
    }
    return "";
  }, [errors.name]);

  const ErrorPromptContent = useMemo(() => {
    const error = errors.prompt;
    if (!error) return "";
    if (error.type === "required") {
      return "ここは極力入力いただいたほうが精度が高まります。";
    }
    if (error.type === "maxLength") {
      return "300文字以内で入力してください。";
    }
    return "";
  }, [errors.prompt]);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-2"
    >
      <label className="flex w-full flex-col">
        <span className="text-sm font-bold">挑戦者の名前</span>
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
        <span className="flex min-h-5 items-center text-xs text-red-300">
          {ErrorNameContent}
        </span>
      </label>
      <label className="flex w-full flex-col">
        <span className="text-sm font-bold">特徴・武器</span>
        <textarea
          className="h-72 p-1"
          {...register("prompt", {
            required: "ここは極力入力いただいたほうが精度が高まります。",
            maxLength: {
              value: 300,
              message: "300文字以内で入力してください。",
            },
          })}
          placeholder="ここは極力入力いただいたほうが精度が高まります。"
        />
        <span className="flex min-h-5 items-center text-xs text-red-300">
          {ErrorPromptContent}
        </span>
      </label>
      <button
        disabled={isSubmit}
        className="flex w-full items-center justify-center bg-green-600 py-4 text-xl font-bold text-white"
      >
        戦う
      </button>
    </form>
  );
};
