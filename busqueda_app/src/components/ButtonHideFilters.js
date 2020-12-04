import React from "react";

// components
import ButtonRounded from "./GenericComponents/ButtonRounded";

// images
import Filters from "../img/status";

const ButtonHideFilters = ({ showing }) => {
  //   const hideFilers = () => {
  //     dispatch({ type: "SET_SHOW" });
  //   };

  return (
    <ButtonRounded
      showing={showing}
      className="button_hide"
      icon={Filters}
      value={showing ? "hide filters" : ""}
    />
  );
};

export default ButtonHideFilters;
