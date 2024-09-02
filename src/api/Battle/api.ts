import { EnemyType } from "@own_types/PromptType";

import { RequestPostBattleType } from "./type";
import { axiosClient } from "../axiosClient";

export const postBattle = async (data: RequestPostBattleType) => {
  const response = await axiosClient.post("/api/battle", data);
  return response.data;
};

export const fetchEnemy = async () => {
  const response = await axiosClient.get<EnemyType>("/api/battle");
  return response.data;
};
