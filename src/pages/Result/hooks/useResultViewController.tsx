import { ModalRef } from "@components/molecules/Modal/Modal";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useResultModel from "./useResultModel";
import { Music } from "@infra/services/types";
import MusicCard from "../components/MusicCard";

export default function useResultViewController() {
  const modalRef = useRef<ModalRef>(null);
  const [searchParams] = useSearchParams();
  const [keyword, setKeyword] = useState<string>("");
  const [limit, setLimit] = useState<number>(4);
  const { mutate, listMusic, isLoading, variables } = useResultModel();

  const onChangeInputKeyword = (e: React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };

  const onClickSearchIcon = useCallback(() => {
    modalRef.current?.openModal();
  }, []);

  const getMusic = useCallback(() => {
    mutate({ term: keyword ?? "", limit });
  }, [keyword, limit, mutate]);

  const onClickLoadMore = useCallback(() => {
    setLimit((prev) => prev + 4);
    mutate({ term: keyword ?? "", limit: limit + 4 });
  }, [keyword, limit, mutate]);

  const onClickSearch = useCallback(() => {
    getMusic();
    modalRef?.current?.closeModal();
  }, [getMusic]);

  const isDisabled = useMemo(() => !keyword, [keyword]);

  const renderItem = useCallback(
    (item: Music.Item) => <MusicCard key={item.trackId} {...item} />,
    [],
  );

  useEffect(() => {
    if (searchParams.get("q")) {
      mutate({ term: searchParams.get("q") ?? "", limit });
      setKeyword(searchParams.get("q") ?? "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isDisabled,
    keyword,
    modalRef,
    listMusic,
    isLoading,
    renderItem,
    variables,
    onChangeInputKeyword,
    onClickSearchIcon,
    onClickLoadMore,
    onClickSearch,
  };
}
