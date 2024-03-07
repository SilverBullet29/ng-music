import { FC } from "react";
import logo from "@assets/images/ng-music.webp";
import blob from "@assets/images/bg-blob.webp";
import { Icon } from "@components/atoms";

type Props = {
  onClickSearchIcon: () => void;
};

const Header: FC<Props> = ({ onClickSearchIcon }) => {
  return (
    <div id="header" className="relative flex min-h-[60px] w-full ">
      <img
        alt="blob"
        src={blob}
        className="absolute h-[60px] w-full object-cover drop-shadow-md"
      />
      <div className="z-20 flex w-full items-center justify-between px-[15px] pb-2 ">
        <Icon name="hamburger" fill="#FFF" />
        <img
          src={logo}
          className="mt-2 h-[16px] w-[73px] object-contain"
          alt="logo"
        />
        <button type="button" onClick={onClickSearchIcon}>
          <Icon name="search" fill="#FFF" />
        </button>
      </div>
    </div>
  );
};

export default Header;
