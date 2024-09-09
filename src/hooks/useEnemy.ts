import { fetchEnemy } from "src/api/Battle/api";
import useSWR from "swr";

export const useEnemy = () => {
  const { data, error, isLoading, mutate } = useSWR("enemy", fetchEnemy, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return { data, error, isLoading, mutate };
};
