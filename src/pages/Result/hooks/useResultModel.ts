import { musicQueries } from "@infra/queries";

export default function useResultModel() {
  const {
    data: listMusic,
    mutate,
    isPending: isLoading,
    variables,
  } = musicQueries.useQueryMusic();
  return { mutate, listMusic, isLoading, variables };
}
