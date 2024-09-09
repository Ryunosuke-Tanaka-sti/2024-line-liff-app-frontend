import { RequestPostEnemyType } from "./type";
import { axiosClient } from "../axiosClient";

import { sleep } from "@utilities/utilitiesLogic";

export const postEnemy = async (data: RequestPostEnemyType) => {
  const mockFlag = import.meta.env.VITE_MOCK as boolean;
  if (mockFlag) {
    await sleep(2000);
    return;
  }
  await axiosClient.post("/api/enemy", data);
  return;
};
