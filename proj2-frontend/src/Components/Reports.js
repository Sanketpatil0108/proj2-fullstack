import React from 'react'
import OrdersReport from './Reports/OrdersReport.js'
import ProductsReport from './Reports/ProductsReport.js'

export default function Reports(props) {
  const [selectedReport, setSelectedReport] = React.useState("");
  const report1 = () => {
    // alert("Orders Report Clicked")
    console.log("Orders Report Clicked")
    setSelectedReport("OrdersReport")
  }
  const report2 = () => {
    // alert("Products Report Clicked")
    console.log("Products Report Clicked")
    setSelectedReport("ProductsReport")
  }
  return (
    <>
    <div style={{fontSize:"40px"}}>Reports Page</div>
    <div style=
      {{
        display:"flex", 
        justifyContent:"space-evenly", 
        backgroundColor:"#98c2a3d2", 
        fontSize:"20px", 
        padding:"10px",
        }}>
      <div onClick={report1}>Orders Reports</div>
      <div onClick={report2}>Products Reports</div>
    </div>
    <div style={{marginTop:"20px", fontSize:"25px"}}>
      { selectedReport === "OrdersReport" && <OrdersReport orders={props.orders} setOrders={props.setOrders}/>}
      { selectedReport === "ProductsReport" && <ProductsReport allProducts={props.allProducts}/>}
    </div>
    </>
  )
}
