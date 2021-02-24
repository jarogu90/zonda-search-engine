import React from "react";
import styled from "styled-components";

import {
  SearchBox,
  ActionBarRow,
  InputFilter,
  RangeFilter,
  SortingSelector,
} from "searchkit";
import config from "../config.json";
import DatesRangeFilter from "./DatesRangeFilter";
import { filters } from "../config.json";

// components
//import ButtonPrimary from "./GenericComponents/ButtonPrimary";

const FlexBox = styled.div`
  display: flex;
`;
const GridInputs = styled.div`
  display: grid;
  grid-template-columns: 248px 248px 248px;
  grid-template-rows: 36px 90px;
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
  p {
    margin: 0;
    margin-bottom: 6px;
    color: #877873;
  }
  .filter--createdBy {
    margin-top: 28px;
  }
`;

const InputFilterSection = ({ cleanDate, turnFalseDateFilter }) => {
  const {
    orderNumber,
    searchboxBusiness,
    searchboxTransporter,
    dateFrom,
    dateTo,
    searchboxCreatedBy,
    shippingPoint,
  } = config.filters;
  return (
    <>
      <ActionBarRow>
        <FlexBox>
          <GridInputs>
            <InputFilter
              id={orderNumber.id}
              title={orderNumber.title}
              placeholder={orderNumber.placeholder}
              searchOnChange={true}
              prefixQueryFields={orderNumber.fields}
              blurAction="search"
            />
            <InputFilter
              id={searchboxBusiness.id}
              title={searchboxBusiness.title}
              placeholder={searchboxBusiness.placeholder}
              searchOnChange={true}
              prefixQueryFields={searchboxBusiness.fields}
              blurAction="search"
            />
            <InputFilter
              id={searchboxTransporter.id}
              title={searchboxTransporter.title}
              placeholder={searchboxTransporter.placeholder}
              searchOnChange={true}
              prefixQueryFields={searchboxTransporter.fields}
              blurAction="search"
            />
            <div className="rangfilter__from">
              <p>Delivery From</p>
              <RangeFilter
                id={dateFrom.id}
                title={dateFrom.title}
                field={dateFrom.field}
                rangeComponent={
                  <DatesRangeFilter
                    cleanDate={cleanDate}
                    turnFalseDateFilter={turnFalseDateFilter}
                  />
                }
                min={946684800000}
                max={new Date().getTime()}
              />
            </div>
            <div className="rangfilter__to">
              <p>Delivery To</p>
              <RangeFilter
                id={dateTo.id}
                title={dateTo.title}
                field={dateTo.field}
                rangeComponent={
                  <DatesRangeFilter
                    cleanDate={cleanDate}
                    turnFalseDateFilter={turnFalseDateFilter}
                  />
                }
                min={946684800000}
                max={new Date().getTime()}
              />
            </div>
            <InputFilter
              id={searchboxCreatedBy.id}
              title={searchboxCreatedBy.title}
              placeholder={searchboxCreatedBy.placeholder}
              searchOnChange={true}
              prefixQueryFields={searchboxCreatedBy.fields}
              blurAction="search"
            />
            <InputFilter
              id={shippingPoint.id}
              title={shippingPoint.title}
              placeholder={shippingPoint.placeholder}
              searchOnChange={true}
              prefixQueryFields={shippingPoint.fields}
              blurAction="search"
            />
            <SortingSelector
              options={[
                {
                  label: "Latest",
                  field: filters.dateFrom.field,
                  order: "desc",
                  defaultOption: true,
                },
                {
                  label: "Earliest",
                  field: filters.dateFrom.field,
                  order: "asc",
                },
              ]}
            />
          </GridInputs>
        </FlexBox>
      </ActionBarRow>
    </>
  );
};

export default InputFilterSection;
