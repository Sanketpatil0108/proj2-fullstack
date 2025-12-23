import React from "react";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";

export default function OrdersReport(props) {
  //const { orders } = props;

  const [orders, setOrders] = useState([]);
  // Fetch orders from backend API @GetMapping("/allorders")
  useEffect(() => {
    fetch("http://localhost:8080/allorders")
      .then(res => res.json())
      .then(data => setOrders(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Table
      sx={{
        border: "3px solid #000407ff",
        boxShadow: "0 0 5px rgba(0,0,0,0.3)",
        width: "80%",
        margin: "50px auto",
        textAlign: "center",
      }}
    >
      <TableHead sx={{ backgroundColor: "#66a3e0ff" }}>
        <TableRow>
          <TableCell sx={{ color: "white", fontWeight: "bold" }}>#</TableCell>
          <TableCell sx={{ color: "white", fontWeight: "bold" }}>Items</TableCell>
          <TableCell sx={{ color: "white", fontWeight: "bold" }}>Order Date</TableCell>
          <TableCell sx={{ color: "white", fontWeight: "bold" }}>Total (₹)</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>   {/*This code maps the data fetched from database,takes t in "products" and displays in tabular format.*/}
        {orders.map(o => (
          <TableRow >
            <TableCell>{o.id}</TableCell>
            <TableCell>{o.items}</TableCell>
            <TableCell>{o.orderdate}</TableCell>
            <TableCell>{o.total}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
