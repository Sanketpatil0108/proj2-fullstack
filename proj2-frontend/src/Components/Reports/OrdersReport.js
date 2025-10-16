import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";

export default function OrdersReport(props) {
  const { orders } = props;

  // Handle empty or undefined orders gracefully
  if (!orders || orders.length === 0) {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
          fontSize: "20px",
          fontWeight: "bold",
          color: "#555",
        }}
      >
        No orders found.
      </div>
    );
  }

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
          <TableCell sx={{ color: "white", fontWeight: "bold" }}>Order Date</TableCell>
          <TableCell sx={{ color: "white", fontWeight: "bold" }}>Items</TableCell>
          <TableCell sx={{ color: "white", fontWeight: "bold" }}>Total (₹)</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {orders.map((order, index) => (
          <TableRow key={index}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>
              {order.date ? order.date : "N/A"}
            </TableCell>
            <TableCell>
              {order.items && order.items.length > 0
                ? order.items.map((item, i) => (
                    <div key={i}>
                      {item.name} (x{item.quantity})
                    </div>
                  ))
                : "No items"}
            </TableCell>
            <TableCell>{order.total}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
