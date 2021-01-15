import React from "react";

import OrderStatus from "./FiltersSidebar/OrderStatus/OrderStatus";
import CreationSystem from "./FiltersSidebar/CreationSystem/CreationSystem";
import ProcessType from "./FiltersSidebar/ProcessType/ProcessType";
import DeliveryType from "./FiltersSidebar/DeliveryType/DeliveryType";
import OnHold from "./FiltersSidebar/OnHold/OnHold";

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
