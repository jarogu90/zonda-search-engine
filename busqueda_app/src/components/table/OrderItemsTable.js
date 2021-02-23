import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Table, Tag, Space  } from "antd";
// import  './style.css';
// styles
import "antd/dist/antd.css";
import axios from 'axios';

const columns = [
    {
      title: 'ORDER ITEM ID',
      dataIndex: 'ORDER_ITEM_ID',
      key: 'ORDER_ITEM_ID',
      render: text => <a>{text}</a>,
    },
    {
        title: 'Order Item No',
        dataIndex: 'ORDER_ITEM_NO',
        key: 'ORDER_ITEM_NO',
    },
    {
      title: 'Ordered Quantity',
      dataIndex: 'ORDERED_QUANTITY',
      key: 'ORDERED_QUANTITY',
    },
    {
        title: 'Rate',
        dataIndex: 'RATE',
        key: 'RATE',
    },
    {
      title: 'Planned Loading Time',
      dataIndex: 'PLANNED_LOADING_TIME_MIN',
      key: 'PLANNED_LOADING_TIME_MIN',
    },
    {
        title: 'Delivered Load Truck Id',
        dataIndex: 'DELIVERED_LOAD_TRUCK_ID',
        key: 'DELIVERED_LOAD_TRUCK_ID',
    },
    {
        title: 'SAP Contract Item Id',
        dataIndex: 'SAP_CONTRACT_ITEM_ID',
        key: 'SAP_CONTRACT_ITEM_ID',
    },
    {
        title: 'Currency',
        dataIndex: 'CURRENCY_CD',
        key: 'CURRENCY_CD',
    },
    {
        title: 'Production Plant',
        dataIndex: 'PRODUCTION_PLANT_CD',
        key: 'PRODUCTION_PLANT_CD',
    },
    // {
    //   title: 'Tags',
    //   key: 'tags',
    //   dataIndex: 'tags',
    //   render: tags => (
    //     <>
    //       {tags.map(tag => {
    //         let color = tag.length > 5 ? 'geekblue' : 'green';
    //         if (tag === 'loser') {
    //           color = 'volcano';
    //         }
    //         return (
    //           <Tag color={color} key={tag}>
    //             {tag.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </>
    //   ),
    // },
    // {
    //   title: 'Action',
    //   key: 'action',
    //   render: (text, record) => (
    //     <Space size="middle">
    //       <a>Invite {record.name}</a>
    //       <a>Delete</a>
    //     </Space>
    //   ),
    // },
  ];
  
//   const data = [
//     {
//       key: '1',
//       name: 'John Brown',
//       age: 32,
//       address: 'New York No. 1 Lake Park',
//       tags: ['nice', 'developer'],
//     },
//     {
//       key: '2',
//       name: 'Jim Green',
//       age: 42,
//       address: 'London No. 1 Lake Park',
//       tags: ['loser'],
//     },
//     {
//       key: '3',
//       name: 'Joe Black',
//       age: 32,
//       address: 'Sidney No. 1 Lake Park',
//       tags: ['cool', 'teacher'],
//     },
//   ];


const OrderItemsTable = ({ order }) => {
    const [data, setData] = useState([]);

    const options = {
        headers: {'Authorization': 'Basic b3JkNDNyZXMyOg=='}
    };
    const body = {
        "query": {
          "match": {
            "ORDER_ID": {
              "query": order
            }
          }
        }
    }
    useEffect(() => {
        axios.post(`https://v398e2cse5.execute-api.eu-west-1.amazonaws.com/v1/_search?indice=tlgnc_order_item`, body, options)
        .then(res => {
            const order_items_col = res.data.hits.hits;
            console.log(order_items_col)
            const col = order_items_col.map(order_item => (order_item._source))
            //this.setState({ persons });
            setData(col)
        })
    }, [order]);
    return(
        <Table columns={columns} dataSource={data} />
    );
}

export default OrderItemsTable;