import React from "react";

const creationSystemIcon = ({ color, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="23"
      viewBox="0 0 22 23"
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
                  d="M.5 9.925L9.924 9.925 9.924.501.5.501zM9.924 16.878c0 2.602-2.109 4.712-4.712 4.712C2.61 21.59.5 19.48.5 16.878c0-2.604 2.11-4.713 4.712-4.713 2.603 0 4.712 2.11 4.712 4.713zM12.03 21.59L21.455 21.59 21.455 12.166 12.03 12.166zM21.454 5.212C21.454 2.61 19.346.5 16.742.5 14.14.5 12.03 2.61 12.03 5.212c0 2.603 2.111 4.712 4.713 4.712 2.604 0 4.712-2.109 4.712-4.712z"
                  transform="translate(-43 -494) translate(0 -55) translate(40.958 547) translate(2.042 2)"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default creationSystemIcon;
