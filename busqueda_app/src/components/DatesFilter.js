import React from "react";
import { formatDate } from "../utils/Utils";
import { DatePicker } from "antd";
import { searchkit } from "./Main";
import { QueryAccessor, ImmutableQuery, BoolMust, RangeQuery } from "searchkit";
const { RangePicker } = DatePicker;

const DatesFilter = () => {
  console.log(searchkit);

  const changeQuery = (val) => {
    const formatedStartDate = formatDate(val[0]._d);
    const formatedEndDate = formatDate(val[1]._d);

    const query = new ImmutableQuery();
    const datesQuery = () => {
      return query.addQuery(
        BoolMust([
          RangeQuery("DELIVERY_FROM_DAT", {
            gte: formatedStartDate,
            lte: formatedStartDate,
          }),
          RangeQuery("DELIVERY_TO_DAT", {
            gte: formatedStartDate,
            lte: formatedStartDate,
          }),
        ])
      );
    };

    const accessor = new QueryAccessor("dates", {
      title: "Dates",
      id: "dates",
      addToFilters: true,
      queryBuilder: datesQuery(),
    });

    searchkit.addAccessor(accessor);
    accessor.state = accessor.state.setValue([
      formatedStartDate,
      formatedEndDate,
    ]);
    accessor.resultsState = accessor.resultsState.setValue([
      formatedStartDate,
      formatedEndDate,
    ]);

    console.log(searchkit, accessor);
    return searchkit._search();
  };

  return <RangePicker onChange={changeQuery} id="dates" title="Dates" />;
};

export default DatesFilter;
