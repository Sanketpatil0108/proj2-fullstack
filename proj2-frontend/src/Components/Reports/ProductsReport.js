import React from 'react'
import { useEffect, useState } from 'react'
import { Table, TableBody, TableHead, TableRow, TableCell } from "@mui/material"

export default function ProductsReport(props) {

  const [products, setProducts] = useState([]);
  // Fetch products from backend API @GetMapping("/allproducts")
  useEffect(() => {
    fetch("http://localhost:8080/allproducts")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
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
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Id</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Name</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Model</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Brand</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Price</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>   {/*This code maps the data fetched from database,takes t in "products" and displays in tabular format.*/}
        {products.map(p => (
          <TableRow >
            <TableCell>{p.id}</TableCell>
            <TableCell>{p.name}</TableCell>
            <TableCell>{p.model}</TableCell>
            <TableCell>{p.brand}</TableCell>
            <TableCell>{p.price}</TableCell>
            <TableCell>{p.rating}</TableCell>
          </TableRow>
        ))}
        </TableBody>
        {/* ----- Table Body (Dynamic Data) ----- */}  
        {/* <TableBody> // (Use this when taking data stored in frontend code and using values as props)
          {(
            // For each element (map):
            // 1. product = the current product object
            // 2. index = the position of that product in the array (0, 1, 2, ...)
            props.allProducts.map((product, index) => (
              <TableRow
                key={index}
              >
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.model}</TableCell>
                <TableCell>{product.brand}</TableCell>
                <TableCell>{product.rating}</TableCell>
                <TableCell>{product.price}</TableCell>
              </TableRow>
            ))
          ) }
        </TableBody> */}
      </Table>  

      </>
  )
}
