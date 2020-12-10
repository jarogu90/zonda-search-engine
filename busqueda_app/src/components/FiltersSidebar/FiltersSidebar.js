import React from "react";

import OrderStatus from "./OrderStatus/OrderStatus";
import CreationSystem from "./CreationSystem/CreationSystem";
import ProcessType from "./ProcessType/ProcessType";
import DeliveryType from "./DeliveryType/DeliveryType";
import OnHold from "./OnHold/OnHold";

const FilterSidebar = ({ showing }) => {
  return (
    <div>
      <OrderStatus showing={showing}></OrderStatus>
      <CreationSystem showing={showing}></CreationSystem>
      <ProcessType showing={showing}></ProcessType>
      <DeliveryType showing={showing}></DeliveryType>
      <OnHold showing={showing}></OnHold>
    </div>
  );
};

export default FilterSidebar;
