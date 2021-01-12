import React, { useState } from "react";
import { DatePicker } from "antd";
import { formatDate } from "./../utils/Utils";

const { RangePicker } = DatePicker;

const DatesRangeFilter = ({ onFinished }) => {
  const [dates, setDates] = useState({});

  const handleOnChange = (val) => {
    console.log(val);
    setDates(val);
    if (val === null) {
      return;
    }
    onFinished({
      min: formatDate(val[0]._d),
      max: formatDate(val[1]._d),
    });
  };

  const handleChangeFrom = (val) => {
    if (val === null) {
      return;
    }
    onFinished({
      min: formatDate(val._d),
      max: formatDate(val._d),
    });
  };
  const handleChangeTo = (val) => {
    if (val === null) {
      return;
    }
    onFinished({
      min: formatDate(val._d),
      max: formatDate(val._d),
    });
  };

  return (
    <>
      <RangePicker
        value={dates}
        onChange={handleOnChange}
        //disabled={[false, true]}
      />
      {/* <DatePicker onChange={handleChangeFrom} /> */}
      {/* <DatePicker onChange={handleChangeTo} /> */}
    </>
  );
};

export default DatesRangeFilter;
