import { fetchReadUser } from "src/api/User/api";
import useSWR from "swr";

export const useUser = () => {
  const { data, isLoading, mutate } = useSWR("user", fetchReadUser);
  return { data, isLoading, mutate };
};
