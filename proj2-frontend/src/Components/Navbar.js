// import React, { useState } from "react";
import Logo from "../Assets/Logo.PNG";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Navbar(props) {
  // const [choice, setChoice] = useState("");
  const cartClick = () => {
    if(props.cartStatus === "closed") {
      props.setCartstatus("open"); 
      console.log("Cart Opened")
    }
    else {
      props.setCartstatus("closed");
      console.log("Cart Closed")
    }
  }
  const handleChange = (event) => {
    props.setUserType(event.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        position: "sticky",
        alignItems: "center",
        fontSize: "25px",
        height: "55px",
        backgroundColor: "#cad0d4d2",
        color: "Black",
      }}
    >
      <div style={{ 
        padding: "10px 5px 5px 5px",
       }}>
      <img
        src={Logo}
        alt="Logo"
        style={{
          height: "50px",
          width: "auto",
          marginRight: "15px",
        }}
      />
      </div>
      {/* Left side: Welcome text */}
      <div
        style={{
          textAlign: "center",
          width: "100%",
          padding : "25px 10px 10px 10px",
          height: "100%",
        }}
      >
        Welcome to the Best E-commerce Store !!
      </div>

      {/* Right side: Dropdown */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "20%",
          height: "100%",
        }}
      >
        <select
          value={props.userType}
          onChange={handleChange}
          style={{
            height: "60%",
            width: "80%",
            backgroundColor: "#9ba0a5d2",
            borderRadius: "5px",
            fontSize: "18px",
            cursor  : "pointer",
            textAlign: "center",
          }}
        >
          <option value="Customer">Customer</option>
          <option value="Admin">Admin</option>
          <option value="Owner">Owner</option>
        </select>
      </div>
      {/* Conditional Rendering */}
      {props.userType === "Customer" ? (
        props.cartStatus === "closed" ? (
          <ShoppingCartIcon
            cursor="pointer"
            onClick={cartClick}
            style={{ fontSize: 30, color: "black", paddingRight: "20px" }}
          />
        ) : (
          <button 
          onClick={() =>{ props.setCartstatus("closed")}}
          style={{
            color: "black",
            backgroundColor: "red",
            borderRadius: "5px",
            marginRight: "20px",
            width: "4%",
            height: "60%",
          }}>
            Back
          </button>
        )
      ) : null}
       
    </div>
  );
}
