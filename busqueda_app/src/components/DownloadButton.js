import React from "react";

import Download from "../img/download";

import Export from "../services/export";

const DownloadButton = (props, datos) => {
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
        <Download color="var(--ocean-blue)">data={datos}</Download>
        <p>Download data</p>
      </a>
    );
  }
};

export default DownloadButton;
