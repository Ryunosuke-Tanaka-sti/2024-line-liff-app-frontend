import loadingAnimation from "@assets/loading-animation.json";
import { Player } from "@lottiefiles/react-lottie-player";

export const LoadingComponent = () => {
  return (
    <section className="fixed left-0 flex h-lvh w-full items-center justify-center bg-[#F2F2F2] opacity-90">
      <Player autoplay loop className="w-80  " src={loadingAnimation} />
    </section>
  );
};
