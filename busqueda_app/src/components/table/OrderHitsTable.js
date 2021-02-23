import React, { useState, useEffect } from "react";
// import { Modal } from "react-responsive-modal";

import {
  notExist,
  statusMigration,
  orderCreationSystemMigration,
  formatDateTime,
  deliveryTypeMigration,
} from "../../utils/Utils";
import styled from "styled-components";
import { Table, Modal } from "antd";
import { ExportTableButton } from "ant-table-extensions";
import Popup from "../GenericComponents/Popup";
import OrderItemsTable from "./OrderItemsTable";
// components
import TableColumns from "./TableColumns";
//import ColumnsMenu from "./ColumnsMenu";
//import TableRender from "./TableRender";
import ColumnsCheckbox from "./ColumnsCheckbox";

// styles
import "antd/dist/antd.css";

const Status = styled.div`
  color: ${({ color }) => color} !important;
  font-weight: bold;
`;

const OnHold = styled.div`
  background-color: ${({ backgroundcolor }) => backgroundcolor};
`;

const OrderHitsTable = ({ hits }) => {
  const [data, setData] = useState([]);
  const [headerPrintable, setheaderPrintable] = useState([]);
  const [dataPrintable, setPrintable] = useState([]);
  const [checkedColumns, setCheckedColumns] = useState(TableColumns);
  const [columns, setColumns] = useState(TableColumns);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [clickedOrder, setClickedOrder] = useState()
  const showModal = (order) => {
    const modal = Modal.success({
      title:"Order Items Detail for Order ID" + order,
      content : <OrderItemsTable order={order} />,
      width: 1000,
      onOk: handleOk
    })
    console.log(order)
    setClickedOrder(order)
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
        orderDetails: (
          <OnHold backgroundcolor={backgroundcolor}>
              <span onClick={()=>showModal(hit._source.ORDER_ID)}>Details</span>
          </OnHold>
        ),
        orderNumber: (
          <OnHold backgroundcolor={backgroundcolor}>
            
            <a href={`http://zonda-ext-eu-dev.publicapps.lfgh.ocpqa.lafargeholcim-go.com/logon/order/bestellung/BestellungSearchEntry.do?order=13273122`} >{hit._source.ORDER_NUMBER}</a>
            {/* <span onClick={()=>showModal(hit._source.ORDER_ID)}>{hit._source.ORDER_ID}</span> */}
            {/* <a href={`http://zonda-ext-eu-dev.publicapps.lfgh.ocpqa.lafargeholcim-go.com/logon/order/bestellung/BestellungSearchEntry.do?order=${hit._source.ORDER_ID}`} >{hit._source.ORDER_NUMBER}</a> */}
          </OnHold>
        ),
        sequentialNumber: (
          <OnHold backgroundcolor={backgroundcolor}>
            {notExist(hit._source.ORDER_NUMBER_FROM_SEQ_USAGE)}
          </OnHold>
        ),
        shippingPoint: (
          <OnHold backgroundcolor={backgroundcolor}>
            {hit._source.SHIPPINGPOINT_ID}
          </OnHold>
        ),
        ldsNumber: (
          <OnHold backgroundcolor={backgroundcolor}>
            {notExist(hit._source.LDS_DELIVERY_NOTE_NO)}
          </OnHold>
        ),
        orderStatus: (
          <OnHold backgroundcolor={backgroundcolor}>
            <Status color={statusMigration(parseInt(hit._source.ORDER_STATUS_CD)).color}>
              {statusMigration(parseInt(hit._source.ORDER_STATUS_CD)).txt}
            </Status>
          </OnHold>
        ),
        orderCreationSystem: (
          <OnHold backgroundcolor={backgroundcolor}>
            {orderCreationSystemMigration(parseInt(hit._source.ORDER_CREATION_TYPE_CD))}
          </OnHold>
        ),
        shipTo: (
          <OnHold backgroundcolor={backgroundcolor}>
            {hit._source.SHIPTO_SAP.NAME1}
          </OnHold>
        ),
        soldTo: (
          <OnHold backgroundcolor={backgroundcolor}>
            {hit._source.SOLDTO_SAP.NAME1}
          </OnHold>
        ),
        billTo: (
          <OnHold backgroundcolor={backgroundcolor}>
            {hit._source.BILLTO_SAP.NAME1}
          </OnHold>
        ),
        payer: (
          <OnHold backgroundcolor={backgroundcolor}>
            {hit._source.PAYER_SAP.NAME1}
          </OnHold>
        ),
        commercialCarrier: (
          <OnHold backgroundcolor={backgroundcolor}>
            {hit._source.COMM_CARRIER_ID}
          </OnHold>
        ),
        executingCarrier: (
          <OnHold backgroundcolor={backgroundcolor}>
            {hit._source.EXEC_CARRIER_ID}
          </OnHold>
        ),
        deliveryType: (
          <OnHold backgroundcolor={backgroundcolor}>
            {deliveryTypeMigration(parseInt(hit._source.DELIVERY_TYPE_CD))}
          </OnHold>
        ),
        processType: (
          <OnHold backgroundcolor={backgroundcolor}>
            {hit._source.DISTRIBUTION_DEST_CD}
          </OnHold>
        ),
        deliveryFrom: (
          <OnHold backgroundcolor={backgroundcolor}>
            {formatDateTime(hit._source.DELIVERY_FROM_DAT)}
          </OnHold>
        ),
        deliveryTo: (
          <OnHold backgroundcolor={backgroundcolor}>
            {formatDateTime(hit._source.DELIVERY_TO_DAT)}
          </OnHold>
        ),
        createdBy: (
          <OnHold backgroundcolor={backgroundcolor}>
            {hit._source.USER.PERSON.FIRSTNAME} {hit._source.USER.PERSON.NAME}
          </OnHold>
        ),
        key: idx,
      };
      arrayData.push(row);
    });
    return arrayData;
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

    dta.forEach((element) => {
      //console.log(element);
      dataPrintable.push({
        orderDetails: element._source.ORDER_NUMBER,
        orderNumber: element._source.ORDER_NUMBER,
        billTo: element._source.BILLTO_SAP.NAME1,
        sequentialNumber: element._source.ORDER_NUMBER_FROM_SEQ_USAGE,
        shippingPoint: element._source.SHIPPINGPOINT_ID,
        ldsNumber: element._source.LDS_DELIVERY_NOTE_NO,
        orderStatus: element._source.ORDER_STATUS_CD,
        orderCreationSystem: element._source.ORDER_CREATION_TYPE_CD,
        shipTo: element._source.SHIPTO_SAP.NAME1,
        soldTo: element._source.SOLDTO_SAP.NAME1,
        payer: element._source.PAYER_SAP.NAME1,
        commercialCarrier: element._source.COMM_CARRIER_ID,
        executingCarrier: element._source.EXEC_CARRIER_ID,
        deliveryType: element._source.DELIVERY_TYPE_CD,
        processType: element._source.DISTRIBUTION_DEST_CD,
        deliveryFrom: element._source.DELIVERY_FROM_DAT,
        deliveryTo: element._source.DELIVERY_TO_DAT,
        createdBy: element._source.USER.PERSON.FIRSTNAME + ' ' + element._source.USER.PERSON.NAME,
      });
    });
    return dataPrintable;
  };

  useEffect(() => {
    const getData = async () => {
      //CÓDIGO COMENTADO PARA QUERY MANUAL DE FECHAS
      /* if (dataDateFilter && dataDateFilter.length > 0) {
        const datesData = await fillDataTable(dataDateFilter);
        setData(datesData);
      } else {
        const restData = await fillDataTable(hits);
        setData(restData);
      } */
      const restData = await fillDataTable(hits);
      setData(restData);
    };
    getData();

    const newHeader = changeHeader(checkedColumns);
    const newData = changeData(hits);
    setheaderPrintable(newHeader);
    setPrintable(newData);
  }, [hits, checkedColumns]);

  //console.log(dataPrintable);

  /* const DataToExport = () => {
    data.map((row) => {
      return JSON.stringify(row);
    });
  }; */
  //console.table(headerPrintable);
  //console.log(checkedColumns);

  return (
    <div className="box-table">
      <ColumnsCheckbox
        columns={columns}
        checkedColumns={checkedColumns}
        setCheckedColumns={setCheckedColumns}
      />
      <div className="btn-export">
        <ExportTableButton
          columns={headerPrintable}
          dataSource={dataPrintable}
          btnProps={{ type: "primary" }}
          showColumnPicker
        >
          Download data
        </ExportTableButton>
      </div>

      <Table columns={checkedColumns} dataSource={data} size="small" bordered />
      {/* <Modal
        title="Modal 1000px width"
        centered
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleOk}
        width={1000}
      > */}
        {/* <OrderItemsTable order={clickedOrder} /> */}
      {/* </Modal> */}
    </div>
  );
};

export default OrderHitsTable;
