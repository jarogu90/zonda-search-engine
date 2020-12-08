import React, { useContext } from "react";
import styled from "styled-components";

import config from "../../../config.json";

// components
import FilterBase from "../FilterBase/FilterBase";

import { Select, RefinementListFilter, SearchkitManager } from "searchkit";

// services
import {
  GlobalStateContext,
  GlobalDispatchContext,
} from "../../../services/GlobalContext";

// images
import CreationSystemIcon from "../../../img/creationSystemIcon";

const CreationSystem = ({ showing }) => {
  const state = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);

  return (
    <div className="dropdown-container">
      <input type="checkbox" id="drop_cs" />
      <label htmlFor="drop_cs">
        <FilterBase value="Order Creation System" showing={showing}>
          <CreationSystemIcon
            width="25px"
            height="24px"
            color="var(--greyish-brown)"
          />
        </FilterBase>
      </label>
      <div className="content" style={{ display: !state.show ? "none" : "" }}>
        <RefinementListFilter
          id={config.filters.creationSystem.id}
          field={config.filters.creationSystem.fields}
          operator="OR"
          size={11}
          showCount={false}
          orderKey="_term"
          orderDirection="asc"
        />
      </div>
      <div className={showing ? "line" : "line line__hide"}></div>
    </div>
  );
};

export default CreationSystem;
