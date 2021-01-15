import React from "react";
import styled from "styled-components";

// components
//import ButtonRounded from "./ButtonRounded";

// images
import Filters from "../../img/status";

const ButtonRoundedBtn = styled.button`
  width: max-content;
  padding: ${({ padding }) => padding};
  border-radius: 1.8rem;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.21);
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  cursor: pointer;
  margin-left: ${({ margin }) => margin};
`;

const ButtonHideFilters = ({ showing }) => {
  return (
    <ButtonRoundedBtn
      showing={showing}
      className="button_hide"
      icon={Filters}
      value={showing ? "hide filters" : ""}
    />
  );
};

export default ButtonHideFilters;
