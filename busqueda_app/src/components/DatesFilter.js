import React, { useState, useEffect } from "react";
import { formatDate } from "../utils/Utils";
import { DatePicker } from "antd";
import { searchkit } from "./Main";

//Searchkit
import { QueryAccessor, ImmutableQuery, BoolMust, RangeQuery } from "searchkit";

const { RangePicker } = DatePicker;

const DatesFilter = () => {
  const [dates, setDates] = useState();
  const [dateFrom, setDateFrom] = useState();
  const [dateTo, setDateTo] = useState();
  const [search, setSearch] = useState(false);

  useEffect(() => {
    defineAccessor();
  }, [search]);

  const defineAccessor = () => {
    const accessor = new QueryAccessor("dates", {
      title: "Dates",
      id: "dates",
      addToFilters: true,
    });

    searchkit.addAccessor(accessor);

    return accessor;
  };

  const queryDates = (dateFrom, dateTo) => {
    const query = new ImmutableQuery();
    return query.addQuery(
      BoolMust([
        RangeQuery("DELIVERY_FROM_DAT", {
          gte: dateFrom,
          lte: dateTo,
        }),
        RangeQuery("DELIVERY_TO_DAT", {
          gte: dateFrom,
          lte: dateTo,
        }),
      ])
    );
  };

  const changeQuery = (val) => {
    if (!val) {
      setDateFrom();
      setDateTo();
      setSearch(false);
      return;
    }
    setDateFrom(formatDate(val[0]._d));
    setDateTo(formatDate(val[1]._d));
    setSearch(true);

    const accessor = defineAccessor();
    accessor.state = accessor.state.setValue([
      formatDate(val[0]._d),
      formatDate(val[1]._d),
    ]);

    const inmutableQuery = queryDates(
      accessor.state.value[0],
      accessor.state.value[1]
    );
    const sharedQuery = accessor.buildSharedQuery(inmutableQuery);
    console.log(sharedQuery);
    return sharedQuery;
  };

  return (
    <RangePicker
      value={dates}
      onChange={changeQuery}
      id="dates"
      title="Dates"
    />
  );
};

export default DatesFilter;
