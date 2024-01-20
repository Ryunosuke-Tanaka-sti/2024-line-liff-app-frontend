import liff from "@line/liff";

import useSWRImmutable from "swr/immutable";

export const useAuth = () => {
  const accessToken = liff.getAccessToken();
  const idToken = liff.getIDToken();

  const { data: profile, isLoading: isProfileLoading } = useSWRImmutable(
    "liff/profile",
    () => liff.getProfile()
  );

  return { accessToken, idToken, profile, isProfileLoading };
};
