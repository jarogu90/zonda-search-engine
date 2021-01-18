import React from "react";
import { Hits, NoHits } from "searchkit";
import OrderHitsTable from "./table/OrderHitsTable";
import config from "../config.json";

// dataDateFilter SE USA PARA LA QUERY MANUAL DE FECHAS
const Samples = (/* { dataDateFilter } */) => {
  const { table, noResults } = config.samples;
  return (
    <div>
      <Hits
        hitsPerPage={100}
        highlightFields={["ORDER_ID"]}
        listComponent={<OrderHitsTable /* dataDateFilter={dataDateFilter} */ />}
        hitComponents={[{ key: table.key, title: table.title }]}
        scrollTo="body"
      />
      <NoHits translations={noResults} />
    </div>
  );
};

export default Samples;
