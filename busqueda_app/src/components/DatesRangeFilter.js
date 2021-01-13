import React, { useEffect, useState } from "react";
import { DatePicker } from "antd";
import { formatDate } from "./../utils/Utils";

const { RangePicker } = DatePicker;

const DatesRangeFilter = ({ onFinished, cleanDate, turnFalseDateFilter }) => {
  const [dates, setDates] = useState({});

  const cleanInput = () => {
    if (cleanDate) {
      setDates(null);
    }
  };

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
    turnFalseDateFilter();
  };

  useEffect(() => {
    cleanInput();
  }, [cleanDate]);

  return (
    <RangePicker value={dates} onChange={handleOnChange} allowClear={false} />
  );
};

export default DatesRangeFilter;
