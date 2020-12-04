import React from "react";

const NoResults = ({ startDate, endDate }) => {
  return (
    <div>
      No results found on: {startDate} - {endDate}
    </div>
  );
};

export default NoResults;
