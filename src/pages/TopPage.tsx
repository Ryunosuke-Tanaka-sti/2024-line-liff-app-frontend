import { useAuth } from "@hooks/useAuth";

export const TopPage = () => {
  const { isProfileLoading, profile, accessToken } = useAuth();

  if (isProfileLoading) return <>Loading now</>;
  if (!profile) return <>Please login</>;

  return (
    <>
      {profile.displayName}
      <img src={profile.pictureUrl} alt="" />
      ようこそ
      {accessToken}
    </>
  );
};
