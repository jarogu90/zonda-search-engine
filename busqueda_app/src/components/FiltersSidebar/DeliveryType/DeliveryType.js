import React, { useContext } from "react";

import config from "../../../config.json";

// components
import FilterBase from "../FilterBase/FilterBase";

// services
import {
  GlobalStateContext,
  GlobalDispatchContext,
} from "../../../services/GlobalContext";

import { Select, RefinementListFilter, SearchkitManager } from "searchkit";

// images
import TruckIcon from "../../../img/truck";

const DeliveryType = () => {
  const state = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);
  return (
    <div className="dropdown-container">
      <input type="checkbox" id="drop_dt" />
      <label htmlFor="drop_dt">
        <FilterBase value="Delivery Type" showing={state.show}>
          <TruckIcon width="25px" height="24px" color="var(--greyish-brown)" />
        </FilterBase>
      </label>
      <div className="content">
        <RefinementListFilter
          id={config.filters.deliveryType.id}
          field={config.filters.deliveryType.fields}
          operator="OR"
          size={12}
          showCount={false}
          orderKey="_term"
          orderDirection="asc"
        />
      </div>
      {state.show ? <div className="line"></div> : null}
    </div>
  );
};

export default DeliveryType;
