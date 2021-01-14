import moment from "moment";

const dateSort = (dateA, dateB) => moment(dateA).diff(moment(dateB));

const defaultSort = (a, b) => {
  /* console.log("aaaaaaaa", a.orderNumber.props.children[1]);
  console.log("bbbbbbb", b.orderNumber); */
  if (a.shippingPoint.props.children[1] < b.shippingPoint.props.children[1])
    return -1;
  if (b.shippingPoint.props.children[1] < a.shippingPoint.props.children[1])
    return 1;
  return 0;
};

const addColumnsSorterType = (columns) => {
  const sortableColumns = [];

  columns.map((column) => {
    if (
      column.dataIndex !== "deliveryFrom" ||
      column.dataIndex !== "deliveryTo"
    ) {
      column.sorter = defaultSort;
    } else {
      column.sorter = dateSort;
    }
    sortableColumns.push(column);
  });

  return sortableColumns;
};

export const Sorter = {
  DEFAULT: defaultSort,
  DATE: dateSort,
  addColumnsSorterType,
};
