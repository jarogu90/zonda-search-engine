import React from "react";
import ColumnsMenu from "./ColumnsMenu";
import { Sorter } from "./../utils/sorter";

const ColumnsCheckbox = ({ columns, checkedColumns, setCheckedColumns }) => {
  const getColumnTitleByKey = (key) => {
    const column = columns.filter((col) => col.key === key);
    return column[0].title;
  };

  const onChangeCheckbox = (e) => {
    let column = {};
    if (e.target.id !== "deliveryFrom" || e.target.id !== "deliveryTo") {
      column = {
        title: getColumnTitleByKey(e.target.id),
        dataIndex: e.target.id,
        key: e.target.id,
        sorter: Sorter.DEFAULT,
      };
    } else {
      column = {
        title: getColumnTitleByKey(e.target.id),
        dataIndex: e.target.id,
        key: e.target.id,
        sorter: Sorter.DATE,
      };
    }

    if (!e.target.checked) {
      setCheckedColumns(
        checkedColumns.filter((col) => col.dataIndex !== column.dataIndex)
      );
    } else {
      setCheckedColumns([...checkedColumns, column]);
    }
  };

  return <ColumnsMenu columns={columns} onChangeCheckbox={onChangeCheckbox} />;
};

export default ColumnsCheckbox;
