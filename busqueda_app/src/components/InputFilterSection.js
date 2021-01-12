import React, { useState } from "react";
import styled from "styled-components";

import { SearchBox, ActionBarRow, InputFilter, RangeFilter } from "searchkit";
import config from "../config.json";
import DatesRangeFilter from "./DatesRangeFilter";

// components
//import ButtonPrimary from "./GenericComponents/ButtonPrimary";

const FlexBox = styled.div`
  display: flex;
`;
const GridInputs = styled.div`
  display: grid;
  grid-template-columns: 248px 248px 248px;
  grid-template-rows: 36px 36px;
  column-gap: 10px;
  row-gap: 10px;
  width: auto;

  /* flex-wrap: wrap; */
  .sk-search-box,
  .sk-input-filter {
    font-size: 14px;
    width: 248px;
    height: 36px;
    border-radius: 4px;
    border: solid 1px #c0dee2;
    background-color: #e9f2f4;

    .sk-input-filter__icon,
    .sk-search-box__icon {
      display: none;
    }
  }
  .sk-input-filter__text::placeholder {
    color: #959595;
  }

  .sk-input-filter__text {
    padding-top: 8px;
  }
  .sk-input-filter__text::placeholder {
    color: #959595;
  }
`;

const InputFilterSection = () => {
  // state
  /*const [date, setDate] = useState([new Date(), new Date()]);
  const [cleanDate, setcleanDate] = useState(false);
  const [searcher, setSearcher] = useState(true);

  const OnSearch = () => {
    setSearcher(false);
  };

  const turnFalseDateFilter = () => {
    setcleanDate(false);
  };*/

  return (
    <>
      <ActionBarRow>
        <FlexBox>
          <GridInputs>
            <SearchBox
              autofocus={true}
              searchOnChange={true}
              placeholder={config.searchbox.placeholder}
              prefixQueryFields={config.searchbox.queryFields}
              blurAction="search"
            />
            <InputFilter
              id={config.filters.searchboxBusiness.id}
              title={config.filters.searchboxBusiness.title}
              placeholder={config.filters.searchboxBusiness.placeholder}
              searchOnChange={true}
              prefixQueryFields={config.filters.searchboxBusiness.fields}
              blurAction="search"
            />
            <InputFilter
              id={config.filters.searchboxTransporter.id}
              title={config.filters.searchboxTransporter.title}
              placeholder={config.filters.searchboxTransporter.placeholder}
              searchOnChange={true}
              prefixQueryFields={config.filters.searchboxTransporter.fields}
              blurAction="search"
            />
            <InputFilter
              id={config.filters.searchboxCreatedBy.id}
              title={config.filters.searchboxCreatedBy.title}
              placeholder={config.filters.searchboxCreatedBy.placeholder}
              searchOnChange={true}
              prefixQueryFields={config.filters.searchboxCreatedBy.fields}
              blurAction="search"
            />
            <RangeFilter
              id="dateFrom"
              title="Date from"
              field="DELIVERY_FROM_DAT"
              rangeComponent={DatesRangeFilter}
              min={946684800000}
              max={new Date().getTime()}
            />
            <RangeFilter
              id="dateTo"
              title="Date to"
              field="DELIVERY_TO_DAT"
              rangeComponent={DatesRangeFilter}
              min={946684800000}
              max={new Date().getTime()}
            />
          </GridInputs>

          {/* <ButtonPrimary
            classProps="button-input-filters"
            text="Search"
            onClick={OnSearch}
          /> */}
        </FlexBox>
      </ActionBarRow>
    </>
  );
};

export default InputFilterSection;
