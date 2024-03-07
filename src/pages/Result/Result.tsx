import { Button, TextInput } from "@components/atoms";
import useResultViewController from "./hooks/useResultViewController";
import { Modal } from "@components/molecules";
import Header from "./components/Header";
import { Spinner } from "flowbite-react";

const Result = () => {
  const {
    listMusic,
    renderItem,
    onClickSearchIcon,
    onClickLoadMore,
    onChangeInputKeyword,
    onClickSearch,
    modalRef,
    variables,
    isLoading,
    isDisabled,
  } = useResultViewController();

  return (
    <>
      <div className="relative mx-auto my-auto flex h-max-mobile w-max-mobile flex-col items-center bg-neutral-50 shadow-md">
        <div id="modal-root" />
        <Header onClickSearchIcon={onClickSearchIcon} />
        <p className="my-10 text-sm font-medium tracking-wider text-neutral-500">
          {`Search result for:`}
          <span className="ml-[10px] text-lg font-bold text-primary-600">
            {variables?.term}
          </span>
        </p>
        <div className="flex h-fit w-full flex-col items-center gap-4 overflow-y-scroll px-[15px] pb-6">
          {isLoading && listMusic?.resultCount && (
            <Spinner color="purple" size="lg" />
          )}
          {listMusic?.results.length && !isLoading ? (
            listMusic?.results?.map(renderItem)
          ) : (
            <p>Data not found</p>
          )}
          {!isLoading && !!listMusic?.results?.length && (
            <Button
              variant="tertiary"
              className="min-h-[34px] min-w-[120px]"
              onClick={onClickLoadMore}
            >
              Load More
            </Button>
          )}
        </div>
      </div>
      <Modal ref={modalRef}>
        <p className="mb-8 text-xl font-medium tracking-wider text-neutral-100">
          Search
        </p>
        <div className="w-full px-[30px]">
          <TextInput
            placeholder="Artist / Album / Titlevv"
            className="mb-[15px]"
            onChange={onChangeInputKeyword}
          />
          <Button
            variant="primary"
            isFull
            onClick={onClickSearch}
            disabled={isDisabled}
          >
            Search
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default Result;
