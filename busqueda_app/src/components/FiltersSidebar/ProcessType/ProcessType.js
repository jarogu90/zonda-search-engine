import React from "react";

import config from "../../../config.json";

// components
import FilterBase from "../FilterBase/FilterBase";

import { Select, RefinementListFilter, SearchkitManager } from "searchkit";

// images
import ProcessTypeIcon from "../../../img/processTypeIcon";

const ProcessType = () => {
  return (
    <div className="dropdown-container">
      <input type="checkbox" id="drop_pt" />
      <label htmlFor="drop_pt">
        <FilterBase value="Process Type">
          <ProcessTypeIcon
            width="25px"
            height="24px"
            color="var(--greyish-brown)"
          />
        </FilterBase>
      </label>
      <div className="content">
        <RefinementListFilter
          id={config.filters.processType.id}
          field={config.filters.processType.fields}
          operator="OR"
          size={13}
          showCount={false}
          orderKey="_term"
          orderDirection="asc"
        />
      </div>
      <div className="line"></div>
    </div>
  );
};

export default ProcessType;
