import logo from "@assets/images/logo.webp";
import { Button, TextInput } from "@components/atoms";
import useHomeViewController from "./hooks/useHomeViewController";

const Home = () => {
  const { navigateToResult, onChangeInputKeyword, isDisabled } =
    useHomeViewController();
  return (
    <div className="relative mx-auto my-auto h-max-mobile w-max-mobile bg-gradient-to-b from-primary-500 to-primary-400 shadow-md">
      <div className="flex h-5/6 items-center justify-center">
        <img src={logo} className="h-[85px] w-[73px] object-contain" />
      </div>
      <div className="absolute bottom-0 w-full p-[30px]">
        <TextInput
          placeholder="Artist / Album / Titlevv"
          className="mb-[15px]"
          onChange={onChangeInputKeyword}
        />
        <Button
          variant="secondary"
          isFull
          onClick={navigateToResult}
          disabled={isDisabled}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default Home;
