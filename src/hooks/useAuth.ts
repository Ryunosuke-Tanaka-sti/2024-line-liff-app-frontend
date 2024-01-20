import liff from "@line/liff";

import useSWRImmutable from "swr/immutable";

export const useAuth = () => {
  const accessToken = liff.getAccessToken();

  const { data: profile, isLoading: isProfileLoading } = useSWRImmutable(
    "liff/profile",
    () => liff.getProfile()
  );

  return { accessToken, profile, isProfileLoading };
};
