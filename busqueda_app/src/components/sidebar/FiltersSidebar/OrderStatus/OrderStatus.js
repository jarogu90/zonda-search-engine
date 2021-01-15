import React, { useContext } from "react";
//import styled from "styled-components";
import { RefinementListFilter } from "searchkit";

import config from "../../../../config.json";

// components
import FilterBase from "../FilterBase/FilterBase";

// services
import {
  GlobalStateContext,
  //GlobalDispatchContext,
} from "../../../../services/GlobalContext";
import { statusMigration } from "./../../../../utils/Utils";

// images
import Status from "../../../../img/status";

const OrderStatus = () => {
  const state = useContext(GlobalStateContext);
  //const dispatch = useContext(GlobalDispatchContext);

  const RefinementOption = (props) => {
    return (
      <div
        className={props.bemBlocks
          .option()
          .state({ selected: props.selected })
          .mix(props.bemBlocks.container("item"))}
        onClick={props.onClick}
      >
        <div className={props.bemBlocks.option("text")}>
          {statusMigration(parseInt(props.label)).txt}
        </div>

        <div className={props.bemBlocks.option("count")}>
          <input type="checkbox" />
        </div>
      </div>
    );
  };

  return (
    <div className="dropdown-container">
      <input type="checkbox" id="drop_os" />
      <label htmlFor="drop_os">
        <FilterBase value="ORDER STATUS" showing={state.show}>
          <Status width="25px" height="24px" color="var(--greyish-brown)" />
        </FilterBase>
      </label>

      <div className="content">
        <RefinementListFilter
          id={config.filters.orderStatus.id}
          field={config.filters.orderStatus.fields}
          operator="OR"
          size={18}
          showCount={false}
          orderKey="_term"
          orderDirection="asc"
          itemComponent={RefinementOption}
        />
      </div>

      {/* <div className={showing ? "line" : "line line__hide"}></div> */}

      {state.show ? <div className="line"></div> : null}
    </div>
  );
};

export default OrderStatus;
