import React, { FC, SVGProps, useMemo } from "react";
import IcHamburger from "./svg/IcHamburger";
import IcClose from "./svg/IcClose";
import IcMagnify from "./svg/IcMagnify";

export type IconName = "hamburger" | "search" | "close";

interface Props extends SVGProps<SVGElement> {
  name: IconName;
  size?: number;
  className?: string;
}

const EnumIcon: Record<IconName, React.FC> = {
  hamburger: IcHamburger,
  search: IcMagnify,
  close: IcClose,
};

const Icon: FC<Props> = ({ name, size, fill, height, width, ...props }) => {
  const IconComponent = EnumIcon[name];
  const extendProps = useMemo(
    () => ({
      height: size || height,
      width: size || width,
      fill: fill,
      "data-testid": "my-icon",
    }),
    [fill, height, size, width],
  );
  return (
    <IconComponent {...props} {...extendProps}>
      Icon
    </IconComponent>
  );
};

export default Icon;
