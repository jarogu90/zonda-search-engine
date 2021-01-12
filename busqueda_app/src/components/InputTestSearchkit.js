import React, { useState, useEffect } from "react";
import { InputFilter, QueryAccessor, SearchkitComponent } from "searchkit";
import { searchkit } from "./Main";
import { formatDate } from "../utils/Utils";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

const InputTestSearchkit = (props) => {
  const [dates, setDates] = useState([]);

  const accessor = new QueryAccessor("test", {
    title: "Dates",
    id: "dates",
    searchOnChange: true,
    queryBuilder: () => {
      return {
        bool: {
          must: [
            {
              range: {
                DELIVERY_FROM_DAT: {
                  gte: "2020-12-10",
                  lte: "2020-12-10",
                },
              },
            },
            {
              range: {
                DELIVERY_TO_DAT: {
                  gte: "2020-12-10",
                  lte: "2020-12-10",
                },
              },
            },
          ],
        },
      };
    },
  });
  console.log(accessor);

  const component = new SearchkitComponent(props);
  console.log(component);

  const ifilter = new InputFilter({
    title: "Dates",
    id: "dates",
    searchOnChange: true,
    queryBuilder: () => {
      return {
        bool: {
          must: [
            {
              range: {
                DELIVERY_FROM_DAT: {
                  gte: "2020-12-10",
                  lte: "2020-12-10",
                },
              },
            },
            {
              range: {
                DELIVERY_TO_DAT: {
                  gte: "2020-12-10",
                  lte: "2020-12-10",
                },
              },
            },
          ],
        },
      };
    },
  });
  console.log(ifilter);

  const onChange = (val) => {
    console.log(val);
  };

  return (
    <RangePicker value={dates} onChange={onChange} id="dates" title="Dates" />
  );
};

export default InputTestSearchkit;
