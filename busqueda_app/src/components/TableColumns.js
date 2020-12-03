const TableColumns = () => {
  const columns = [
    {
      title: "Logon Order Number",
      dataIndex: "orderNumber",
      key: "orderNumber",
    },
    {
      title: "Sequential Number",
      dataIndex: "sequentialNumber",
      key: "sequentialNumber",
    },
    {
      title: "Shipping Point",
      dataIndex: "shippingPoint",
      key: "shippingPoint",
    },
    { title: "LDS Number", dataIndex: "ldsNumber", key: "ldsNumber" },
    { title: "Order Status", dataIndex: "orderStatus", key: "orderStatus" },
    {
      title: "Order Creation System",
      dataIndex: "orderCreationSystem",
      key: "orderCreationSystem",
    },
    { title: "Ship-to (Destination)", dataIndex: "shipTo", key: "shipTo" },
    { title: "Sold-to (Customer)", dataIndex: "soldTo", key: "soldTo" },
    { title: "Bill-to (Address invoice)", dataIndex: "billTo", key: "billTo" },
    { title: "Payer (credit check)", dataIndex: "payer", key: "payer" },
    {
      title: "Commercial Carrier",
      dataIndex: "commercialCarrier",
      key: "commercialCarrier",
    },
    {
      title: "Executing Carrier",
      dataIndex: "executingCarrier",
      key: "executingCarrier",
    },
    { title: "Delivery Type", dataIndex: "deliveryType", key: "deliveryType" },
    { title: "Process Type", dataIndex: "processType", key: "processType" },
    { title: "Delivery From", dataIndex: "deliveryFrom", key: "deliveryFrom" },
    { title: "Delivery To", dataIndex: "deliveryTo", key: "deliveryTo" },
    { title: "Created By", dataIndex: "createdBy", key: "createdBy" },
  ];

  return columns;
};

export default TableColumns;
