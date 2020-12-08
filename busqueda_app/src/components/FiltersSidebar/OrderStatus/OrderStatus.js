import React, { useContext } from "react";
import styled from "styled-components";
import { Select, RefinementListFilter, SearchkitManager } from "searchkit";

import config from "../../../config.json";

// components
import FilterBase from "../FilterBase/FilterBase";

// services
import {
  GlobalStateContext,
  GlobalDispatchContext,
} from "../../../services/GlobalContext";

// images
import Status from "../../../img/status";

const OrderStatus = () => {
  const state = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);

  return (
    <div
      className="dropdown-container"
      onClick={() => dispatch({ type: "SET_SHOWW" })}
    >
      <input type="checkbox" id="drop_os" />
      <label htmlFor="drop_os">
        <FilterBase value="ORDER STATUS" showing={state.show}>
          <Status width="25px" height="24px" color="var(--greyish-brown)" />
        </FilterBase>
      </label>

      {/* <div
        className="content"
        style={{ display: state.show === false ? "" : "none" }}
      >
        <RefinementListFilter
          id={config.filters.orderStatus.id}
          field={config.filters.orderStatus.fields}
          operator="OR"
          size={18}
          showCount={false}
          orderKey="_term"
          orderDirection="asc"
        />
      </div> */}

      <div className="content" style={{ display: !state.show ? "none" : "" }}>
        <RefinementListFilter
          id={config.filters.orderStatus.id}
          field={config.filters.orderStatus.fields}
          operator="OR"
          size={18}
          showCount={false}
          orderKey="_term"
          orderDirection="asc"
        />
      </div>

      {/* <div className={showing ? "line" : "line line__hide"}></div> */}

      {state.show ? <div className="line"></div> : null}
    </div>
  );
};

export default OrderStatus;
