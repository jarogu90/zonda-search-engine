import React from "react";

import Download from "../img/download";

const DownloadButton = (props) => {
  const result = props.hits;
  if (result == 0) {
    return <></>;
  } else {
    return (
      <a
        className="download-button-link"
        href="/file/orders.csv"
        download="orders.csv"
      >
        <Download color="var(--ocean-blue)"></Download>
        <p>Download data</p>
      </a>
    );
  }
};

export default DownloadButton;
