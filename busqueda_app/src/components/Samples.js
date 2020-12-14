import React from "react";
import { Hits, NoHits } from "searchkit";
import OrderHitsTable from "./OrderHitsTable";
import config from "../config.json";

const Samples = ({ dataDateFilter }) => {
  return (
    <div>
      <Hits
        hitsPerPage={1000}
        listComponent={<OrderHitsTable dataDateFilter={dataDateFilter} />}
        hitComponents={[
          { key: config.samples.table.key, title: config.samples.table.title },
        ]}
        scrollTo="body"
      />
      <NoHits />
    </div>
  );
};

export default Samples;
