import LineQR from "@assets/line-qr.png";

export const NotLineClientPage = () => {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center gap-10 bg-slate-50 py-10">
      <img src={LineQR} className="h-auto w-80 rounded object-contain" alt="" />
      <h1 className="text-lg font-bold">
        こちらにアクセスするとは目聡いですね！
      </h1>
      <p className="text-base">そういうの大好きです！気持ちわかりますわ～</p>
    </main>
  );
};
