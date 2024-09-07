import { dummyFetchUser } from "./constants";
import { axiosClient } from "../axiosClient";

import { sleep } from "@utilities/utilitiesLogic";

import type { UserType } from "./type";

export const fetchReadUser = async () => {
  const mockFlag = import.meta.env.VITE_LIFF_ID as boolean;
  if (mockFlag) {
    await sleep(2000);
    return dummyFetchUser;
  }
  const res = await axiosClient.get<UserType>("/api/user");
  return res.data;
};
