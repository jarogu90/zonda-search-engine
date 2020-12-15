import React from "react";

const onHoldIcon = ({ color, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="23"
      viewBox="0 0 23 23"
    >
      <g
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g stroke="#5A5959">
          <g>
            <g>
              <g stroke={color}>
                <path
                  d="M5.311 11.072L9.694 15.715 16.951 6.546"
                  transform="translate(-43 -723) translate(0 -55) translate(40 778) translate(3)"
                />
                <path
                  d="M0.5 21.761L21.761 21.761 21.761 0.5 0.5 0.5z"
                  transform="translate(-43 -723) translate(0 -55) translate(40 778) translate(3)"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default onHoldIcon;
