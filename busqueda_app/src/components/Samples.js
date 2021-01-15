import React from "react";
import { Hits, NoHits } from "searchkit";
import OrderHitsTable from "./table/OrderHitsTable";
import config from "../config.json";

// dataDateFilter SE USA PARA LA QUERY MANUAL DE FECHAS
const Samples = (/* { dataDateFilter } */) => {
  return (
    <div>
      <Hits
        hitsPerPage={100}
        highlightFields={["ORDER_ID"]}
        listComponent={<OrderHitsTable /* dataDateFilter={dataDateFilter} */ />}
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
