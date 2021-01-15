import React, { useContext } from "react";
//import styled from "styled-components";

import config from "../../../../config.json";

// components
import FilterBase from "../FilterBase/FilterBase";

import { RefinementListFilter } from "searchkit";
import { orderCreationSystemMigration } from "./../../../../utils/Utils";

// services
import {
  GlobalStateContext,
  //GlobalDispatchContext,
} from "../../../../services/GlobalContext";

// images
import CreationSystemIcon from "../../../../img/creationSystemIcon";

const CreationSystem = () => {
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
          {orderCreationSystemMigration(parseInt(props.label))}
        </div>
        <div className={props.bemBlocks.option("count")}>
          <input type="checkbox" />
        </div>
      </div>
    );
  };

  return (
    <div className="dropdown-container">
      <input type="checkbox" id="drop_cs" />
      <label htmlFor="drop_cs">
        <FilterBase value="Order Creation System" showing={state.show}>
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
          itemComponent={RefinementOption}
        />
      </div>
      {state.show ? <div className="line"></div> : null}
    </div>
  );
};

export default CreationSystem;
