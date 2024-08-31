import { EnemyType, PromptFormType } from "@own_types/PromptType";

import { axiosClient } from "../axiosClient";

export const postBattle = async (data: PromptFormType) => {
  const response = await axiosClient.post("/api/battle", data);
  return response.data;
};

export const fetchEnemy = async () => {
  const response = await axiosClient.get<EnemyType>("/api/battle");
  return response.data;
};
