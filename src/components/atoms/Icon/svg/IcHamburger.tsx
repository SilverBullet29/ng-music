import { SVGProps } from "react";

const IcHamburger = (props: SVGProps<SVGSVGElement>) => {
  const { height, width } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_12340_597)">
        <path
          d="M5 6.4375H19M5 11.6875H19M5 16.9375H19"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_12340_597">
          <rect
            width="16"
            height="13"
            fill="white"
            transform="translate(4 5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

IcHamburger.defaultProps = {
  height: 24,
  width: 24,
  fill: "#68686F",
};

export default IcHamburger;
