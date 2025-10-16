// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from "./Components/Navbar.js";
import Footer from "./Components/Footer.js";
import Addproduct from './Components/Addproduct.js';
import Allproducts from './Components/Allproducts.js';
import Reports from './Components/Reports.js';
import React from 'react';
import Cart from './Components/Cart.js';

function App() {
  const [userType, setUserType] = React.useState("Customer");
  const [cartStatus, setCartstatus] = React.useState("closed");

  const [allProducts, setAllProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);

  return (
    <div  
    style={{
      display: "flex",
      textAlign: "center",
      flexDirection: "column",  
      }}>
      <Navbar userType={userType} setUserType={setUserType} cartStatus={cartStatus} setCartstatus={setCartstatus} />
      <div style={{display: "flex", flexDirection:"column", height: "100%"}}>
        {userType === "Customer" && cartStatus === "closed" && <Allproducts allProducts={allProducts} cartItems={cartItems} setCartItems={setCartItems} />}
        {userType === "Customer" && cartStatus === "open" && <Cart cartItems={cartItems} setCartItems={setCartItems} orders={orders} setOrders={setOrders}/>}
        {userType === "Admin" && <Addproduct allProducts={allProducts} setAllProducts={setAllProducts}/>}
        {userType === "Owner" && <Reports allProducts={allProducts} orders={orders}/>}
      </div>
      {console.log(allProducts)}
      <Footer title="Copyright &copy; Flipcoin.com"/>
    </div>
  );
}

export default App;
