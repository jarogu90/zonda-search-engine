import React from "react";
import config from "./../config.json";
import { labelPills, textPills } from "./../utils/Utils";

const Pill = ({
  labelKey,
  labelValue,
  setCleanDate,
  removeFilter,
  bemBlocks,
}) => {
  const {
    orderStatus,
    creationSystem,
    deliveryType,
    processType,
    onHold,
  } = config.filters;
  const showPill = () => {
    if (
      labelKey === orderStatus.fields ||
      labelKey === creationSystem.fields ||
      labelKey === deliveryType.fields ||
      labelKey === onHold.id
    ) {
      return (
        <>
          {labelPills(labelKey)}: {textPills(labelKey, parseInt(labelValue))}
        </>
      );
    } else if (labelKey === processType.fields) {
      return (
        <>
          {labelPills(labelKey)}: {labelValue}
        </>
      );
    } else {
      return (
        <>
          {labelKey}: {labelValue}
        </>
      );
    }
  };

  return (
    <div className="sk-selected-filters-option">
      <div className={bemBlocks.option("name")}>{showPill()}</div>
      <div
        className={bemBlocks.option("remove-action")}
        onClick={() => {
          removeFilter();
          setCleanDate();
        }}
      >
        x
      </div>
    </div>
  );
};

export default Pill;
