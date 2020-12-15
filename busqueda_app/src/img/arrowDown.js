import React from "react";

const ArrowDown = ({ color }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="11"
        height="8"
        viewBox="0 0 11 8"
      >
        <g fill="none" fillRule="evenodd" strokeLinejoin="round">
          <g stroke={color}>
            <g>
              <g>
                <path
                  d="M1 1.917L5.5 8.917 10 1.917"
                  transform="translate(-253 -351) translate(0 -55) translate(253 405)"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default ArrowDown;
