import React from "react";

import config from "../../../config.json";

// components
import FilterBase from "../FilterBase/FilterBase";

import { Select, RefinementListFilter, SearchkitManager } from "searchkit";

// images
import TruckIcon from "../../../img/truck";

const DeliveryType = ({ showing }) => {
  return (
    <div className="dropdown-container">
      <input type="checkbox" id="drop_dt" />
      <label htmlFor="drop_dt">
        <FilterBase value="Delivery Type" showing={showing}>
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
      <div className={showing ? "line" : "line line__hide"}></div>
    </div>
  );
};

export default DeliveryType;
