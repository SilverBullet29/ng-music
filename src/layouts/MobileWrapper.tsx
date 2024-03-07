import React, { FC } from "react";

type Props = {
  page: React.FC<unknown>;
};

const MobileWrapper: FC<Props> = ({ page: Page }) => {
  return (
    <div className="flex h-screen w-full items-center overflow-y-hidden bg-neutral-200">
      <Page />
    </div>
  );
};

export default MobileWrapper;
