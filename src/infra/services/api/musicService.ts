import axiosClient from "../axiosClient";
import { Music } from "../types";

export const getMusic = (params: Music.Request): Promise<Music.Response> =>
  axiosClient.get("/search", { params });
