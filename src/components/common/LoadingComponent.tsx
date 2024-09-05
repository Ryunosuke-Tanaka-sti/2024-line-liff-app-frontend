import loadingAnimation from "@assets/loading-animation.json";
import { Player } from "@lottiefiles/react-lottie-player";

type LoadingComponentProps = {
  opacity?: boolean;
};

export const LoadingComponent = ({
  opacity = false,
}: LoadingComponentProps) => {
  if (opacity) {
    return (
      <section className="fixed left-0 top-0 flex h-lvh w-full items-center justify-center bg-[#F2F2F2] opacity-80">
        <Player autoplay loop className="w-80  " src={loadingAnimation} />
      </section>
    );
  }
  return (
    <section className="fixed left-0 top-0 flex h-lvh w-full items-center justify-center bg-[#F2F2F2] opacity-90">
      <Player autoplay loop className="w-80  " src={loadingAnimation} />
    </section>
  );
};
