import status from "../tables/status.json";
import orderCreationSystem from "../tables/orderCreationSystem.json";
import deliveryType from "../tables/deliveryType.json";
import moment from "moment";

export const statusMigration = (statusNumber) => {
  switch (statusNumber) {
    case 1:
      return status[1];
    case 2:
      return status[2];
    case 3:
      return status[3];
    case 4:
      return status[4];
    case 5:
      return status[5];
    case 6:
      return status[6];
    case 7:
      return status[7];
    case 8:
      return status[8];
    case 9:
      return status[9];
    case 10:
      return status[10];
    case 11:
      return status[11];
    case 12:
      return status[12];
    case 13:
      return status[13];
    case 14:
      return status[14];
    case 15:
      return status[15];
    case 16:
      return status[16];
    case 17:
      return status[17];
    case 18:
      return status[18];
  }
};

export const orderCreationSystemMigration = (creationNumber) => {
  switch (creationNumber) {
    case 1:
      return orderCreationSystem[1];
    case 2:
      return orderCreationSystem[2];
    case 3:
      return orderCreationSystem[3];
    case 4:
      return orderCreationSystem[4];
    case 5:
      return orderCreationSystem[5];
    case 6:
      return orderCreationSystem[6];
    case 7:
      return orderCreationSystem[7];
    case 8:
      return orderCreationSystem[8];
    case 9:
      return orderCreationSystem[9];
    case 10:
      return orderCreationSystem[10];
    case 11:
      return orderCreationSystem[11];
  }
};

export const deliveryTypeMigration = (deliveryTypeNumber) => {
  switch (deliveryTypeNumber) {
    case 1:
      return deliveryType[1];
    case 2:
      return deliveryType[2];
    case 3:
      return deliveryType[3];
    case 4:
      return deliveryType[4];
    case 5:
      return deliveryType[5];
    case 6:
      return deliveryType[6];
    case 7:
      return deliveryType[7];
    case 8:
      return deliveryType[8];
    case 9:
      return deliveryType[9];
    case 10:
      return deliveryType[10];
    case 11:
      return deliveryType[11];
    case 12:
      return deliveryType[12];
  }
};

export const notExist = (field) => {
  if (!field) {
    return "-";
  } else {
    return field;
  }
};

export const formatDate = (date) => {
  return moment(date).format("YYYY-MM-DD");
};

export const formatDateTime = (date) => {
  return moment(date).format("YYYY-MM-DD HH:mm:ss");
};

/*export const shipTo = async (shipToId) => {
    try{
        let request = await fetch(`https://search-logon-order-search-qyhfl5jwmhiaatf23g3wafmjia.eu-west-1.es.amazonaws.com/tlgns_sap_bp/_search?q=SAP_BP_ID:${shipToId}`)
        let resJson = await request.json()
        console.log(resJson.hits.hits[0]._source);
        let data = resJson.hits.hits[0]._source;
        if(data.BP_IS_SHIPTO === 1){
            console.log('aaaaaaa')
            return data.NAME1
        } else {
            return '-'
        }
    }
    catch(error){
        console.log(error)
    }
}

export const soldTo = async (sapContractId) => {
    try{
        let request = await fetch(`https://search-logon-order-search-qyhfl5jwmhiaatf23g3wafmjia.eu-west-1.es.amazonaws.com/tlgns_sap_bp/_search?q=SAP_BP_ID:${sapContractId}`)
        let resJson = await request.json()
        //console.log(resJson.hits.hits[0]._source);
        let data = resJson.hits.hits[0]._source;

        if(data.BP_IS_SOLDTO === 1){
            return data.NAME1
        } else {
            return '-'
        }
    }
    catch(error){
        console.log(error)
    }
}

export const billTo = async (billToId) => {
    try{
        let request = await fetch(`https://search-logon-order-search-qyhfl5jwmhiaatf23g3wafmjia.eu-west-1.es.amazonaws.com/tlgns_sap_bp/_search?q=SAP_BP_ID:${billToId}`)
        let resJson = await request.json()
        console.log(resJson.hits.hits[0]._source);
        let data = resJson.hits.hits[0]._source;

        if(data.BP_IS_BILLTO === 1){
            return data.NAME1
        } else {
            return '-'
        }
    }
    catch(error){
        console.log(error)
    }
}

export const payerTo = async (sapContractId) => {
    try{
        let request = await fetch(`https://search-logon-order-search-qyhfl5jwmhiaatf23g3wafmjia.eu-west-1.es.amazonaws.com/tlgns_sap_bp/_search?q=SAP_BP_ID:${sapContractId}`)
        let resJson = await request.json()
        console.log(resJson.hits.hits[0]._source);
        let data = resJson.hits.hits[0]._source;

        if(data.BP_IS_PAYERTO === 1){
            return data.NAME1
        } else {
            return '-'
        }
    }
    catch(error){
        console.log(error)
    }
}*/
