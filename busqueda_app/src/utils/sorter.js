import { Table } from "antd";

const dateSort = (rowA, rowB) => {
  if (isDeliveryFrom) {
    const a = new Date(rowA.deliveryFrom).getTime();
    const b = new Date(rowB.deliveryFrom).getTime();

    if (a < b) return -1;
    if (b < a) return 1;
    return 0;
  } else {
    const a = new Date(rowA.deliveryTo).getTime();
    const b = new Date(rowB.deliveryTo).getTime();

    if (a < b) return -1;
    if (b < a) return 1;
    return 0;
  }
};

const defaultSort = (rowA, rowB) => {
  if (rowA.orderNumber < rowB.orderNumber) return -1;
  if (rowB.orderNumber < rowA.orderNumber) return 1;
  return 0;
};

const addColumnsSorterType = (columns) => {
  const sortableColumns = [];

  columns.map((column) => {
    if (
      column.dataIndex === "deliveryFrom" ||
      column.dataIndex === "deliveryTo"
    ) {
      column.sorter = dateSort;
    } else {
      column.sorter = defaultSort;
    }
    sortableColumns.push(column);
  });

  return sortableColumns;
};

const isDeliveryFrom = (dataIndex) => {
  return dataIndex === "deliveryFrom";
};

export const Sorter = {
  DEFAULT: defaultSort,
  DATE: dateSort,
  addColumnsSorterType,
};
