import React from "react";
import styled from "styled-components";
import ArrowUp from "../../../img/arrowUp";
import ArrowDown from "../../../img/arrowDown";

// STYLES

const IconProps = styled.div`
  width: 4rem;
  margin: 2rem 2.4rem auto 0;
  cursor: pointer;
`;

const Value = styled.div`
  font-size: 1.2rem;
  margin: auto 0 auto 0;
  text-transform: uppercase;
  width: 88%;
  text-align: left;
`;
const ArrowUpFilter = styled.div`
  width: 1.45rem;
  margin: auto 4rem auto auto;
  stroke: var(--ocean-blue);
`;
const ArrowDownFilter = styled.div`
  width: 1.45rem;
  margin: auto 4rem auto auto;
  stroke: var(--ocean-blue);
`;
const FilterOptionDiv = styled.div`
  cursor: pointer;
  width: 100%;
  height: 6.4rem;
  display: flex;
  padding-left: ${(props) => props.padding};
  -webkit-transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
  transition: all 500ms ease;
  color: var(--greyish-brown);

  :hover {
    background-color: var(--ice-blue);
    border: none;
    border-left: solid 4px var(--ocean-blue);
    padding-left: 4.5rem;
    color: var(--ocean-blue);
    g {
      stroke: var(--ocean-blue);
    }
    .line {
      display: none;
    }
  }
`;

const FilterBase = ({ value, children, classNameFilter, showing }) => {
  return (
    <FilterOptionDiv padding="38px" className={classNameFilter}>
      <IconProps className="btn_hide">{children}</IconProps>

      {showing ? <Value className="value__sidebar">{value}</Value> : null}
      <ArrowUpFilter className="arrowUp">
        {showing ? <ArrowUp color="var(--greyish-brown)" /> : null}
      </ArrowUpFilter>

      <ArrowDownFilter className="arrowDown">
        {showing ? <ArrowDown color="var(--greyish-brown)" /> : null}
      </ArrowDownFilter>
    </FilterOptionDiv>
  );
};

export default FilterBase;
