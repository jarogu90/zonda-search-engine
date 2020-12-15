import React from "react";

const status = ({ color, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="22"
      viewBox="0 0 24 22"
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
                  d="M23.252 10.272L18.601 10.272 15.113 20.545 8.138 0 4.651 10.272 0 10.272"
                  transform="translate(-42 -419) translate(0 -55) translate(40.958 474) translate(1.042)"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default status;
