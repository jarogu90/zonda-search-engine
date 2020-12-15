import React, { useState, useEffect } from "react";
import {
  notExist,
  statusMigration,
  orderCreationSystemMigration,
  formatDateTime,
} from "../utils/Utils";
import TableColumns from "./TableColumns";
import { Table } from "antd";

import "antd/dist/antd.css";
import styled from "styled-components";

const Status = styled.div`
  color:  ${({ color }) => color} !important;
  font-weight: bold;
`;

const OnHold = styled.div`
  background-color:  ${({ backgroundcolor }) => backgroundcolor};
`;

const OrderHitsTable = ({ hits, dataDateFilter, orderStatus }) => {
  const [data, setData] = useState([]);

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
  }, [hits, dataDateFilter]);

  const fillDataTable = async (data) => {
    const arrayData = [];
    await data.map((hit) => {
      
     let backgroundcolor 
        switch(hit._source.ON_HOLD_ORDER_AND_LOCKED_FLAG) {
          case 1:
            backgroundcolor = "rgba(0, 115, 175, 0.2)"
           break;
          case 0:
           backgroundcolor = "#ffffff"
           break;
      };

      let row = {
       /*  onHold: <OnHold backgroundcolor= {backgroundcolor} > {hit._source.ON_HOLD_ORDER_AND_LOCKED_FLAG} </OnHold>, */
        orderNumber:<OnHold backgroundcolor= {backgroundcolor} > {hit._source.ORDER_NUMBER}</OnHold>,
        sequentialNumber:<OnHold backgroundcolor= {backgroundcolor} > {notExist(hit._source.ORDER_NUMBER_FROM_SEQ_USAGE)} </OnHold>,
        shippingPoint:<OnHold backgroundcolor= {backgroundcolor} > {hit._source.SHIPPINGPOINT_ID} </OnHold>,
        ldsNumber: <OnHold backgroundcolor= {backgroundcolor} > {notExist(hit._source.LDS_DELIVERY_NOTE_NO)} </OnHold>,
        orderStatus:<OnHold backgroundcolor= {backgroundcolor} ><Status color={statusMigration(hit._source.ORDER_STATUS_CD).color}> {statusMigration(hit._source.ORDER_STATUS_CD).txt} </Status> </OnHold>,
        orderCreationSystem: <OnHold backgroundcolor= {backgroundcolor} > {orderCreationSystemMigration(hit._source.ORDER_CREATION_TYPE_CD)} </OnHold>,
        shipTo: <OnHold backgroundcolor= {backgroundcolor} > {hit._source.SHIPTO_SAP_BP_ID} </OnHold>,
        soldTo:<OnHold backgroundcolor= {backgroundcolor} > { hit._source.SOLDTO_SAP_BP_ID} </OnHold>,
        billTo:<OnHold backgroundcolor= {backgroundcolor} > {hit._source.BILLTO_SAP_BP_ID} </OnHold>,
        payer: <OnHold backgroundcolor= {backgroundcolor} > {hit._source.PAYER_SAP_BP_ID} </OnHold>,
        commercialCarrier:<OnHold backgroundcolor= {backgroundcolor} > { hit._source.COMM_CARRIER_ID} </OnHold>,
        executingCarrier:<OnHold backgroundcolor= {backgroundcolor} > { hit._source.EXEC_CARRIER_ID} </OnHold>,
        deliveryType:<OnHold backgroundcolor= {backgroundcolor} > { hit._source.DELIVERY_TYPE_CD} </OnHold>,
        processType: <OnHold backgroundcolor= {backgroundcolor} > {hit._source.DISTRIBUTION_DEST_CD} </OnHold>,
        deliveryFrom: <OnHold backgroundcolor= {backgroundcolor} > {formatDateTime(hit._source.DELIVERY_FROM_DAT)} </OnHold>,
        deliveryTo:<OnHold backgroundcolor= {backgroundcolor} > { formatDateTime(hit._source.DELIVERY_TO_DAT)} </OnHold>,
        createdBy:<OnHold backgroundcolor= {backgroundcolor} > { hit._source.CTL_CRE_UID} </OnHold>,
      };
      arrayData.push(row);
    });
    return arrayData;
  };

  return (
    <Table columns={TableColumns()} dataSource={data} /* rowClassName={(record, onHold) => onHold === 0 ? 'table-row-light' :  'table-row-dark'} */ size="small" bordered />
  );
};

export default OrderHitsTable;
