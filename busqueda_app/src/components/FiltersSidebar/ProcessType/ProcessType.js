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
import ProcessTypeIcon from "../../../img/processTypeIcon";

const ProcessType = ({ showing }) => {
  const state = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);

  const RefinementOption = (props) => {
    return (
      <div
        className={props.bemBlocks
          .option()
          .state({ selected: props.selected })
          .mix(props.bemBlocks.container("item"))}
        onClick={props.onClick}
      >
        <div className={props.bemBlocks.option("text")}>{props.label}</div>

        <div className={props.bemBlocks.option("count")}>
          <input type="checkbox" />
        </div>
      </div>
    );
  };
  return (
    <div className="dropdown-container">
      <input type="checkbox" id="drop_pt" />
      <label htmlFor="drop_pt">
        <FilterBase value="Process Type" showing={state.show}>
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
          itemComponent={RefinementOption}
        />
      </div>
      {state.show ? <div className="line"></div> : null}
    </div>
  );
};

export default ProcessType;
