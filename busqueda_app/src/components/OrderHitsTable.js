import React, { useState, useEffect } from "react";
import {
  notExist,
  statusMigration,
  orderCreationSystemMigration,
  formatDateTime,
} from "../utils/Utils";
import styled from "styled-components";
import { Table } from "antd";
import { ExportTableButton } from "ant-table-extensions";

// components
import TableColumns from "./TableColumns";
import ColumnsMenu from "./ColumnsMenu";

// styles
import "antd/dist/antd.css";

const Status = styled.div`
  color: ${({ color }) => color} !important;
  font-weight: bold;
`;

const OnHold = styled.div`
  background-color: ${({ backgroundcolor }) => backgroundcolor};
`;

const OrderHitsTable = ({ hits, dataDateFilter, orderStatus }) => {
  const [data, setData] = useState([]);
  const [headerPrintable, setheaderPrintable] = useState([]);
  const [dataPrintable, setPrintable] = useState([]);
  const [checkedColumns, setCheckedColumns] = useState(TableColumns);
  const [columns, setColumns] = useState(TableColumns);

  const fillDataTable = async (data) => {
    const arrayData = [];
    await data.map((hit, idx) => {
      let backgroundcolor;
      switch (hit._source.ON_HOLD_ORDER_AND_LOCKED_FLAG) {
        case 1:
          backgroundcolor = "rgba(0, 115, 175, 0.2)";
          break;
        case 0:
          backgroundcolor = "rgba(255, 255, 255, 0.2)";
          break;
      }

      let row = {
        /*  onHold: <OnHold backgroundcolor= {backgroundcolor} > {hit._source.ON_HOLD_ORDER_AND_LOCKED_FLAG} </OnHold>, */
        orderNumber: (
          <OnHold backgroundcolor={backgroundcolor}>
            {" "}
            {hit._source.ORDER_NUMBER}
          </OnHold>
        ),
        sequentialNumber: (
          <OnHold backgroundcolor={backgroundcolor}>
            {" "}
            {notExist(hit._source.ORDER_NUMBER_FROM_SEQ_USAGE)}{" "}
          </OnHold>
        ),
        shippingPoint: (
          <OnHold backgroundcolor={backgroundcolor}>
            {" "}
            {hit._source.SHIPPINGPOINT_ID}{" "}
          </OnHold>
        ),
        ldsNumber: (
          <OnHold backgroundcolor={backgroundcolor}>
            {" "}
            {notExist(hit._source.LDS_DELIVERY_NOTE_NO)}{" "}
          </OnHold>
        ),
        orderStatus: (
          <OnHold backgroundcolor={backgroundcolor}>
            <Status color={statusMigration(hit._source.ORDER_STATUS_CD).color}>
              {" "}
              {statusMigration(hit._source.ORDER_STATUS_CD).txt}{" "}
            </Status>{" "}
          </OnHold>
        ),
        orderCreationSystem: (
          <OnHold backgroundcolor={backgroundcolor}>
            {" "}
            {orderCreationSystemMigration(
              hit._source.ORDER_CREATION_TYPE_CD
            )}{" "}
          </OnHold>
        ),
        shipTo: (
          <OnHold backgroundcolor={backgroundcolor}>
            {" "}
            {hit._source.SHIPTO_SAP_BP_ID}{" "}
          </OnHold>
        ),
        soldTo: (
          <OnHold backgroundcolor={backgroundcolor}>
            {" "}
            {hit._source.SOLDTO_SAP_BP_ID}{" "}
          </OnHold>
        ),
        billTo: (
          <OnHold backgroundcolor={backgroundcolor}>
            {" "}
            {hit._source.BILLTO_SAP_BP_ID}{" "}
          </OnHold>
        ),
        payer: (
          <OnHold backgroundcolor={backgroundcolor}>
            {" "}
            {hit._source.PAYER_SAP_BP_ID}{" "}
          </OnHold>
        ),
        commercialCarrier: (
          <OnHold backgroundcolor={backgroundcolor}>
            {" "}
            {hit._source.COMM_CARRIER_ID}{" "}
          </OnHold>
        ),
        executingCarrier: (
          <OnHold backgroundcolor={backgroundcolor}>
            {" "}
            {hit._source.EXEC_CARRIER_ID}{" "}
          </OnHold>
        ),
        deliveryType: (
          <OnHold backgroundcolor={backgroundcolor}>
            {" "}
            {hit._source.DELIVERY_TYPE_CD}{" "}
          </OnHold>
        ),
        processType: (
          <OnHold backgroundcolor={backgroundcolor}>
            {" "}
            {hit._source.DISTRIBUTION_DEST_CD}{" "}
          </OnHold>
        ),
        deliveryFrom: (
          <OnHold backgroundcolor={backgroundcolor}>
            {" "}
            {formatDateTime(hit._source.DELIVERY_FROM_DAT)}{" "}
          </OnHold>
        ),
        deliveryTo: (
          <OnHold backgroundcolor={backgroundcolor}>
            {" "}
            {formatDateTime(hit._source.DELIVERY_TO_DAT)}{" "}
          </OnHold>
        ),
        createdBy: (
          <OnHold backgroundcolor={backgroundcolor}>
            {" "}
            {hit._source.CTL_CRE_UID}{" "}
          </OnHold>
        ),
        key: idx,
      };
      arrayData.push(row);
    });
    return arrayData;
  };

  const getColumnTitleByKey = (key) => {
    const column = columns.filter((col) => col.key === key);
    return column[0].title;
  };

  const onChangeCheckbox = (e) => {
    const column = {
      title: getColumnTitleByKey(e.target.id),
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

  const changeHeader = (hdr) => {
    let newH = [];
    for (let index = 0; index < hdr.length; index++) {
      if (checkedColumns[index]) {
        newH.push(checkedColumns[index]);
      }
    }
    return newH;
  };

  const changeData = (dta) => {
    const dataPrintable = [];
    // "sequentialNumber"
    // "shippingPoint"
    // "ldsNumber"
    // "orderStatus"
    // "orderCreationSystem"
    // "shipTo"
    // "soldTo"
    // "payer"
    // "commercialCarrier"
    // "executingCarrier"
    // "deliveryType"
    // "processType"
    // "deliveryFrom"
    // "deliveryTo"
    // "createdBy"

    dta.forEach((element) => {
      console.log(element);
      dataPrintable.push({
        orderNumber: element._source.ORDER_NUMBER,
        billTo: element._source.BILLTO_SAP_BP_ID,
        sequentialNumber: element._source.ORDER_NUMBER_FROM_SEQ_USAGE,
        shippingPoint: element._source.SHIPPINGPOINT_ID,
        ldsNumber: element._source.LDS_DELIVERY_NOTE_NO,
        orderStatus: element._source.ORDER_STATUS_CD,
        orderCreationSystem: element._source.ORDER_CREATION_TYPE_CD,
        shipTo: element._source.SHIPTO_SAP_BP_ID,
        soldTo: element._source.SOLDTO_SAP_BP_ID,
        payer: element._source.PAYER_SAP_BP_ID,
        commercialCarrier: element._source.COMM_CARRIER_ID,
        executingCarrier: element._source.EXEC_CARRIER_ID,
        deliveryType: element._source.DELIVERY_TYPE_CD,
        processType: element._source.DISTRIBUTION_DEST_CD,
        deliveryFrom: element._source.DELIVERY_FROM_DAT,
        deliveryTo: element._source.DELIVERY_TO_DAT,
        createdBy: element._source.CTL_CRE_UID,
      });
    });
    return dataPrintable;
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

    const newHeader = changeHeader(checkedColumns);
    const newData = changeData(hits);
    setheaderPrintable(newHeader);
    setPrintable(newData);
  }, [hits, dataDateFilter, checkedColumns]);

  console.log(dataPrintable);

  const DataToExport = () => {
    data.map((row) => {
      return JSON.stringify(row);
    });
  };
  console.table(headerPrintable);
  return (
    <>
      <ColumnsMenu columns={columns} onChangeCheckbox={onChangeCheckbox} />
      <ExportTableButton
        columns={headerPrintable}
        dataSource={dataPrintable}
        btnProps={{ type: "primary" }}
        showColumnPicker
      >
        Export to CSV
      </ExportTableButton>
      <Table columns={checkedColumns} dataSource={data} size="small" bordered />
    </>
  );
};

export default OrderHitsTable;
