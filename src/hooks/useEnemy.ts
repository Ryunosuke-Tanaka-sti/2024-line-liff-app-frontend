import { fetchEnemy } from "src/api/Battle/api";
import useSWR from "swr";

export const useEnemy = () => {
  const { data, error, isLoading, mutate } = useSWR("enemy", fetchEnemy);
  return { data, error, isLoading, mutate };
};
