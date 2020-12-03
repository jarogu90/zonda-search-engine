import React from "react";
import styled from "styled-components";

import config from "../../../config.json";

// components
import FilterBase from "../FilterBase/FilterBase";

import { Select, RefinementListFilter, SearchkitManager } from "searchkit";

// images
import Status from "../../../img/status";

const searchkit = new SearchkitManager(config.endpoint);

const OrderStatus = ({ showing }) => {
  return (
    <div className="dropdown-container">
      <input type="checkbox" id="drop_os" />
      <label htmlFor="drop_os">
        <FilterBase value="ORDER STATUS" showing={showing}>
          <Status width="25px" height="24px" color="var(--greyish-brown)" />
        </FilterBase>
      </label>
      {showing ? (
        <div className="content">
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
      ) : null}

      {/* <div className={showing ? "content" : "display__none"}>
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

      <div className={showing ? "line" : "line line__hide"}></div>
    </div>
  );
};

export default OrderStatus;
