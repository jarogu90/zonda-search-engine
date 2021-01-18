import React from "react";
import ColumnsMenu from "./ColumnsMenu";
import { Sorter } from "./../../utils/sorter";

const ColumnsCheckbox = ({ columns, checkedColumns, setCheckedColumns }) => {
  const getColumnTitleByKey = (key) => {
    const column = columns.filter((col) => col.key === key);
    return column[0].title;
  };

  const onChangeCheckbox = (e) => {
    let column = {};
    console.log(e);
    if (e.target.id === "deliveryFrom" || e.target.id === "deliveryTo") {
      column = {
        title: getColumnTitleByKey(e.target.id),
        dataIndex: e.target.id,
        key: e.target.id,
        sorter: Sorter.DATE,
      };
    } else if (e.target.id === "orderNumber") {
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
      };
    }

    if (!e.target.checked) {
      const index = checkedColumns.findIndex(
        (element) => element.dataIndex === column.dataIndex
      );
      console.log(index);
      checkedColumns.splice(index, 1);
      setCheckedColumns([...checkedColumns]);
      /* setCheckedColumns(
        checkedColumns.filter((col) => col.dataIndex !== column.dataIndex)
      ); */
    } else {
      const index = columns.findIndex(
        (element) => element.dataIndex === column.dataIndex
      );
      checkedColumns.splice(index, 0, column);
      setCheckedColumns([...checkedColumns]);
      //setCheckedColumns([column, ...checkedColumns]);
    }
  };

  return <ColumnsMenu columns={columns} onChangeCheckbox={onChangeCheckbox} />;
};

export default ColumnsCheckbox;
