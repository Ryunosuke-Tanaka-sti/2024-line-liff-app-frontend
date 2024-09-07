import NotFound from "@assets/404.png";
import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <main className="flex h-screen w-full flex-col items-center justify-center gap-10 bg-slate-50 px-4 py-10">
      <img
        src={NotFound}
        className="h-auto w-80 rounded object-contain"
        alt=""
      />
      <h1 className="text-lg font-bold">
        申し訳なんだ...こちらのページは存在しませね...
      </h1>
      <p className="text-4xl font-bold">404 Not Found</p>
      <p className="text-lg font-bold">でもよくこのページ開けましたね。</p>
      <button
        onClick={() => navigate("/")}
        className="w-full rounded bg-slate-800 px-4 py-2 text-lg font-bold text-white"
      >
        トップに戻る
      </button>
    </main>
  );
};
