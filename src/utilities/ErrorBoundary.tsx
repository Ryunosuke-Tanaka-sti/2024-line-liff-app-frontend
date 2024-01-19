import { ErrorBoundary, FallbackProps } from "react-error-boundary";

type Props = {
  children: React.ReactNode;
};
export const ErrorBoundaryComponent = (props: Props) => {
  const { children } = props;

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  );
};

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  console.error(error);
  return (
    <>
      <button className="" onClick={resetErrorBoundary}>
        リトライ
      </button>
    </>
  );
};
