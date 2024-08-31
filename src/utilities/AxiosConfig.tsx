import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { axiosClient } from "src/api/axiosClient";

import { useAuth } from "@hooks/useAuth";

type Props = {
  children: React.ReactNode;
};

export const AxiosConfig = (props: Props) => {
  const { children } = props;

  const { showBoundary } = useErrorBoundary();
  const { accessToken } = useAuth();
  const [isTokenSet, setIsTokenSet] = useState<boolean>(false);

  useEffect(() => {
    const requestInterceptor = axiosClient.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        config.headers["authorization"] = `Bearer ${accessToken}`;
        console.log(accessToken);
        return config;
      },
      (error: AxiosError) => showBoundary(error)
    );
    const responseInterceptor = axiosClient.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: AxiosError) => {
        showBoundary(error);
        return Promise.reject(error);
      }
    );
    if (accessToken) setIsTokenSet(true);

    return () => {
      axiosClient.interceptors.response.eject(responseInterceptor);
      axiosClient.interceptors.request.eject(requestInterceptor);
    };
  }, [accessToken, showBoundary]);

  if (!isTokenSet) return <div>loading</div>;
  return <>{children}</>;
};
