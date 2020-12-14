import React from "react";
import { SearchkitComponent, QueryAccessor } from "searchkit";
import { formatDate } from "../utils/Utils";
import { DatePicker } from "antd";
import { searchkit } from "./Main";

const { RangePicker } = DatePicker;

export default class DatesClass extends SearchkitComponent {
  defineAccessor() {
    const accessor = new QueryAccessor("dates", {
      title: "Dates",
      id: "dates",
      addToFilters: true,
    });

    searchkit.addAccessor(accessor);

    return accessor;
  }

  render() {
    return (
      <RangePicker
        value={dates}
        onChange={changeQuery}
        id="dates"
        title="Dates"
      />
    );
  }
}
