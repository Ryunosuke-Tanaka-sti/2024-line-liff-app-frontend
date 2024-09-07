import { LoadingComponent } from "@components/common/LoadingComponent";
import liff from "@line/liff";
import { NotLineClientPage } from "@pages/NotLineClientPage";
import { useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";

type Props = {
  children: React.ReactNode;
};

export const LiffInit = (props: Props) => {
  const { children } = props;
  const { showBoundary } = useErrorBoundary();
  const [isInLineClient, setIsInLineClient] = useState<boolean>(false);
  const [liffInit, setLiffInit] = useState<boolean>(false);

  useEffect(() => {
    liff
      .init({
        liffId: import.meta.env.VITE_LIFF_ID,
      })
      .then(() => {
        setLiffInit(true);
        setIsInLineClient(liff.isInClient());
        console.log("LIFF init succeeded.");
      })
      .catch((e: Error) => {
        setLiffInit(false);
        showBoundary(e);
      });
  });
  if (!liffInit) {
    return <LoadingComponent />;
  }
  if (!isInLineClient) {
    return <NotLineClientPage />;
  }
  return <>{children}</>;
};
