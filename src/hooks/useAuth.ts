import liff from "@line/liff";

import useSWRImmutable from "swr/immutable";

export const useAuth = () => {
  const accessToken = liff.getAccessToken();

  const {
    data: profile,
    error,
    isLoading: isProfileLoading,
  } = useSWRImmutable("liff/profile", () => liff.getProfile());

  return { accessToken, profile, error, isProfileLoading };
};
