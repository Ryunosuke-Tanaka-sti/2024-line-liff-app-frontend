import axios from "axios";

export const axiosClient = axios.create({
  timeout: 25000,
  headers: {
    "Content-Type": "application/json",
  },
});
