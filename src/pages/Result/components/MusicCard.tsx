import dollars from "@assets/images/dollar.webp";
import { Music } from "@infra/services/types";
import { FC } from "react";

type Props = Music.Item;

const MusicCard: FC<Props> = ({
  artistName,
  trackName,
  primaryGenreName,
  artworkUrl100,
  trackPrice,
}) => {
  return (
    <div className="flex h-[123px] w-full items-center rounded-lg bg-neutral-100 p-3 shadow-md">
      <img
        className="mr-3 h-[100px] w-[100px] min-w-[100px] overflow-hidden rounded-[10px]"
        src={
          artworkUrl100 ??
          "https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
      <div className="flex h-full w-full flex-col justify-between">
        <div>
          <p className="text-[10px] text-neutral-500">
            {artistName ?? "Artist"}
          </p>
          <p className="text-sm font-bold">{trackName ?? "Track Name"}</p>
        </div>
        <div className="flex w-full flex-row justify-between">
          <div className="flex h-5 max-w-16 items-center justify-center rounded-full bg-success-500 px-4 text-neutral-100">
            <p className="text-ellipsis text-[10px] ">
              {primaryGenreName.split(" ")[0] ?? "Pop"}
            </p>
          </div>
          <div className="flex flex-row items-center">
            <img src={dollars} className="mr-[6px] h-4 w-4 object-cover" />
            <p className="text-xs font-bold text-warn-500">
              {trackPrice ?? "0.00"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
