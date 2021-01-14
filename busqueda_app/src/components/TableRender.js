import React from "react";
import { Table } from "antd";

const TableRender = (props) => {
  const { columns, ...otherTableProps } = props;
  //console.log(columns);
  const sortableColumns = columns.map((column) => {
    const { sorter, dataIndex, ...otherColumnProps } = column;
    //console.log(column);
    if (sorter) {
      return {
        ...otherColumnProps,
        dataIndex,
        sorter: (a, b) => {
          if (a < b) return -1;
          if (b < a) return 1;
          return 0;
        },
      };
    }

    return column;
  });

  return <Table columns={sortableColumns} {...otherTableProps} />;
};

export default TableRender;
