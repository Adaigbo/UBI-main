import React, { useState } from 'react';
import eth from "../../assets/img/svgs/crypto-currencies/eth.svg";
import xrp from "../../assets/img/svgs/crypto-currencies/xrp.svg";
import ltc from "../../assets/img/svgs/crypto-currencies/ltc.svg";
import xmr from "../../assets/img/svgs/crypto-currencies/xmr.svg";
import steem from "../../assets/img/svgs/crypto-currencies/steem.svg";
import dash from "../../assets/img/svgs/crypto-currencies/dash.svg";
import waves from "../../assets/img/svgs/crypto-currencies/waves.svg";
import user2 from "../../assets/img/users/2.jpg";
import user3 from "../../assets/img/users/3.jpg";
import user4 from "../../assets/img/users/4.jpg";
import user5 from "../../assets/img/users/5.jpg";
import user6 from "../../assets/img/users/6.jpg";
import user7 from "../../assets/img/users/7.jpg";
import user9 from "../../assets/img/users/9.jpg";
import user11 from "../../assets/img/users/11.jpg";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import btc from "../../assets/img/svgs/crypto-currencies/btc.svg";
import { Tooltip, OverlayTrigger, Button } from "react-bootstrap";
import "react-data-table-component-extensions/dist/index.css";
import OrderServices from '../../services/OrderServices';
import Utils from '../../utils/Utils';


export function Basicdatatable({ orders }) {

  if (!orders || orders.length === 0) {
    return <div>No data available</div>;
  }

  const columns = [
    {
      name: "Order ID",
      selector: row => [row.id],
      sortable: true,
      width: '165px',
    },
    {
      name: "Product NAME",
      selector: row => [row.products.name],
      sortable: true,
      width: '165px',
    },
    {
      name: "DATE",
      selector: row => {
        const date = new Date(row.created_at);
        const formattedDate = date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
        return [formattedDate];
      },      
      sortable: true,
      width: '165px',
    },
    {
      name: "Price",
      selector: row => [row.price],
      sortable: false,
      width: '165px',
    },
    {
      name: "Quantity",
      selector: row => [row.amount], // Assuming the quantity is stored in 'amount'
      sortable: true,
      width: '165px',
    },
    {
      name: "STATUS",
      selector: row => [row.fulfiled ? 'Fulfil' : 'Pending'],
      sortable: true,
      cell: row => (
        <div>
          <span className={`status bg-${row.fulfiled ? 'success' : 'danger'}`}></span>
          {row.fulfiled ? 'Fulfiled' : 'Pending'}
        </div>
      )
    },
  ];

  const tableData = {
    columns,
    data: orders,
  };
  return (
    <DataTableExtensions {...tableData} >
      <DataTable
        columns={columns}
        defaultSortAsc={false}
      // pagination
      />
    </DataTableExtensions>
  );
}
