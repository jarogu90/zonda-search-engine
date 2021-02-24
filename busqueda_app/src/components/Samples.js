import React, { useContext } from "react";
import { Hits, NoHits } from "searchkit";
import OrderHitsTable from "./table/OrderHitsTable";
import config from "../config.json";
import { GlobalStateContext} from "../services/GlobalContext";

// dataDateFilter SE USA PARA LA QUERY MANUAL DE FECHAS
const Samples = (/* { dataDateFilter } */) => {
  const { table, noResults } = config.samples;
  const state = useContext(GlobalStateContext);
  return (
    <div className={
        state.show
          ? "hits__true"
          : "hits__false"
      } >
      <Hits
        hitsPerPage={300}
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
