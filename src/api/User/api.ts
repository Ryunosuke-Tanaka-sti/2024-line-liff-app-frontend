import { axiosClient } from "../axiosClient";

import type { UserType } from "./type";

export const fetchReadUser = async () => {
  const res = await axiosClient.get<UserType>("/api/user");
  return res.data;
};
