import { EnemyType } from "@own_types/PromptType";

import { dummyFetchEnemyResponse, dummyPostBattleResponse } from "./constants";
import { RequestPostBattleType } from "./type";
import { axiosClient } from "../axiosClient";

import { sleep } from "@utilities/utilitiesLogic";

export const postBattle = async (data: RequestPostBattleType) => {
  const mockFlag = import.meta.env.VITE_MOCK as boolean;
  if (mockFlag) {
    await sleep(2000);
    return dummyPostBattleResponse;
  }
  const response = await axiosClient.post("/api/battle", data);
  return response.data;
};

export const fetchEnemy = async () => {
  const mockFlag = import.meta.env.VITE_MOCK as boolean;
  if (mockFlag) {
    await sleep(2000);
    return dummyFetchEnemyResponse;
  }
  const response = await axiosClient.get<EnemyType>("/api/battle");
  return response.data;
};
