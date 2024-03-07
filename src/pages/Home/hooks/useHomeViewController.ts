import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useHomeViewController() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState<string>("");
  const navigateToResult = useCallback(() => {
    navigate(`/result?q=${encodeURIComponent(keyword)}`);
  }, [keyword, navigate]);

  const onChangeInputKeyword = (e: React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };

  const isDisabled = useMemo(() => !keyword, [keyword]);

  return { navigateToResult, onChangeInputKeyword, isDisabled };
}
