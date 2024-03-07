import { AppUseMutationOptions } from "../type";
import { useMutation } from "@tanstack/react-query";
import { Music } from "@infra/services/types";
import { getMusic } from "@infra/services/api";

export const useQueryMusic = (
  options?: AppUseMutationOptions<Music.Response, Music.Request>,
) =>
  useMutation({
    mutationFn: getMusic,
    ...options,
  });
