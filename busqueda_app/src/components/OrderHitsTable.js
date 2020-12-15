import React, { useState, useEffect } from "react";
import {
  notExist,
  statusMigration,
  orderCreationSystemMigration,
  formatDateTime,
} from "../utils/Utils";
import TableColumns from "./TableColumns";
import ColumnsCheckbox from "./GenericComponents/ColumnsCheckbox";
import { Table, Button, Dropdown, Menu, Checkbox } from "antd";

import "antd/dist/antd.css";

const OrderHitsTable = ({ hits, dataDateFilter }) => {
  const [data, setData] = useState([]);
  const [checkedColumns, setCheckedColumns] = useState(TableColumns);
  const [columns, setColumns] = useState(TableColumns);
  const [visibleMenuSettings, setVisibleMenuSettings] = useState(false);

  const fillDataTable = async (data) => {
    const arrayData = [];
    await data.map((hit, idx) => {
      let row = {
        orderNumber: hit._source.ORDER_NUMBER,
        sequentialNumber: notExist(hit._source.ORDER_NUMBER_FROM_SEQ_USAGE),
        shippingPoint: hit._source.SHIPPINGPOINT_ID,
        ldsNumber: notExist(hit._source.LDS_DELIVERY_NOTE_NO),
        orderStatus: statusMigration(hit._source.ORDER_STATUS_CD),
        orderCreationSystem: orderCreationSystemMigration(
          hit._source.ORDER_CREATION_TYPE_CD
        ),
        shipTo: hit._source.SHIPTO_SAP_BP_ID,
        soldTo: hit._source.SOLDTO_SAP_BP_ID,
        billTo: hit._source.BILLTO_SAP_BP_ID,
        payer: hit._source.PAYER_SAP_BP_ID,
        commercialCarrier: hit._source.COMM_CARRIER_ID,
        executingCarrier: hit._source.EXEC_CARRIER_ID,
        deliveryType: hit._source.DELIVERY_TYPE_CD,
        processType: hit._source.DISTRIBUTION_DEST_CD,
        deliveryFrom: formatDateTime(hit._source.DELIVERY_FROM_DAT),
        deliveryTo: formatDateTime(hit._source.DELIVERY_TO_DAT),
        createdBy: hit._source.CTL_CRE_UID,
        key: idx,
      };
      arrayData.push(row);
    });
    return arrayData;
  };

  const onChangeCheckbox = (e) => {
    const column = {
      title: e.target.id,
      dataIndex: e.target.id,
      key: e.target.id,
    };

    if (!e.target.checked) {
      setCheckedColumns(
        checkedColumns.filter((col) => col.dataIndex !== column.dataIndex)
      );
    } else {
      setCheckedColumns([...checkedColumns, column]);
    }
  };

  const ColumnsDropdown = () => {
    return (
      <Menu>
        <Menu.ItemGroup title="Columns">
          {columns.map((column) => {
            console.log(column);
            return (
              <Menu.Item key={column.dataIndex}>
                <Checkbox
                  id={column.dataIndex}
                  onChange={onChangeCheckbox}
                  defaultChecked
                >
                  {column.title}
                </Checkbox>
              </Menu.Item>
            );
          })}
        </Menu.ItemGroup>
      </Menu>
    );
  };

  const handleVisibleChange = (flag) => {
    setVisibleMenuSettings(flag);
  };

  useEffect(() => {
    const getData = async () => {
      if (dataDateFilter && dataDateFilter.length > 0) {
        const datesData = await fillDataTable(dataDateFilter);
        setData(datesData);
      } else {
        const restData = await fillDataTable(hits);
        setData(restData);
      }
    };
    getData();
  }, [hits, dataDateFilter, checkedColumns]);

  return (
    <>
      <Dropdown
        overlay={ColumnsDropdown}
        onVisibleChange={handleVisibleChange}
        visible={visibleMenuSettings}
        trigger="click"
      >
        <Button>Show/Hide</Button>
      </Dropdown>
      <Table columns={checkedColumns} dataSource={data} size="small" bordered />
    </>
  );
};

export default OrderHitsTable;
