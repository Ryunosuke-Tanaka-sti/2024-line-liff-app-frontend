import liff from "@line/liff";
import { useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";

type Props = {
  children: React.ReactNode;
};

export const RouterLiffInit = (props: Props) => {
  const { children } = props;
  const { showBoundary } = useErrorBoundary();

  const [liffInit, setLiffInit] = useState<boolean>(false);

  useEffect(() => {
    liff
      .init({
        liffId: import.meta.env.VITE_LIFF_ID,
      })
      .then(() => {
        setLiffInit(true);
        console.log("LIFF init succeeded.");
      })
      .catch((e: Error) => {
        setLiffInit(false);
        showBoundary(e);
      });
  });
  if (!liffInit) {
    return <>Loading now</>;
  }
  return <>{children}</>;
};
