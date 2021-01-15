const dateSort = (rowA, rowB) => {
  console.log(rowA);
  if (isDeliveryFrom) {
    const a = new Date(rowA.deliveryFrom.props.children).getTime();
    const b = new Date(rowB.deliveryFrom.props.children).getTime();

    if (a < b) return -1;
    if (b < a) return 1;
    return 0;
  } else {
    const a = new Date(rowA.deliveryTo.props.children).getTime();
    const b = new Date(rowB.deliveryTo.props.children).getTime();

    if (a < b) return -1;
    if (b < a) return 1;
    return 0;
  }
};

const defaultSort = (rowA, rowB) => {
  if (rowA.orderNumber.props.children < rowB.orderNumber.props.children)
    return -1;
  if (rowB.orderNumber.props.children < rowA.orderNumber.props.children)
    return 1;
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
    } else if (column.dataIndex === "orderNumber") {
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
