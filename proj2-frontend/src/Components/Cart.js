import React from 'react';
import { Stack, Button } from '@mui/material';

export default function Cart(props) {

  const updateCart = (index, newQuantity) => {
    const updatedCart = [...props.cartItems];
    if (updatedCart[index]) {
      if (Number(newQuantity) === 0) {
        updatedCart.splice(index, 1);
      } else {
        updatedCart[index] = {
          ...updatedCart[index],
          quantity: parseInt(newQuantity) || 0,
        };
      }
      props.setCartItems(updatedCart);
    }
  };

  const total = props.cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const placeOrder = async () => {
    if (props.cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const newOrder = {
      id: Date.now(),
      items: [...props.cartItems],
      total: total,
      date: new Date().toLocaleString(),
    };

    // ✅ Convert cart items to single string (JS way)
    const itemsString = props.cartItems
    .map(
      (item) =>
        `${item.name} (Qty:${item.quantity}, Price:${item.price})`
    )
    .join(" | ");
    
    const newOrder1 = {
      items: itemsString,
      totalAmount: total,  // convert to string for BigDecimal
      orderDate: new Date().toString(),  // better ISO format
    };

    // Sending the order data to backend
    const response = await fetch ("http://localhost:8080/placeorder", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newOrder1)
    });

    if (!response.ok) {
      throw new Error("Failed to save product");
    }
    
    alert("✅ order placed successfully!");

    // ✅ use setOrders instead of setOrderss
    props.setOrders((prevOrders) => [...prevOrders, newOrder]);

    // clear cart
    props.setCartItems([]);

    alert("Order placed successfully!");
  };

  return (
    <>
      <div style={{ backgroundColor: "lightgrey", margin: "10px" }}>
        <Stack
          direction="column"
          spacing={1}
          style={{
            backgroundColor: "lightgrey",
            border: "2px solid black",
            padding: "10px",
          }}
        >
          {props.cartItems.length > 0
            ? props.cartItems.map((item, index) => (
                <div key={index} style={{ display: "flex" }}>
                  <div
                    style={{
                      backgroundColor: "lightBlue",
                      border: "1px solid black",
                      padding: "5px 5px 5px 20px",
                      margin: "10px",
                      width: "85%",
                      textAlign: "left",
                      borderRadius: "5px",
                    }}
                  >
                    {item.name} - ₹{item.price}
                  </div>
                  <Button
                    onClick={() => updateCart(index, item.quantity - 1)}
                    style={{
                      backgroundColor: "lightBlue",
                      border: "1px solid black",
                      padding: "5px",
                      margin: "10px",
                      width: "5%",
                      borderRadius: "5px",
                    }}
                  >
                    -
                  </Button>
                  <div
                    style={{
                      backgroundColor: "lightBlue",
                      border: "1px solid black",
                      padding: "5px",
                      margin: "10px",
                      width: "5%",
                      borderRadius: "5px",
                    }}
                  >
                    {item.quantity}
                  </div>
                  <Button
                    onClick={() => updateCart(index, item.quantity + 1)}
                    style={{
                      backgroundColor: "lightBlue",
                      border: "1px solid black",
                      padding: "5px",
                      margin: "10px",
                      width: "5%",
                      borderRadius: "5px",
                    }}
                  >
                    +
                  </Button>
                </div>
              ))
            : "Cart Empty"}

          <div
            style={{
              textAlign: "right",
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            Your Total is : ₹{total}
          </div>
        </Stack>
      </div>

      <Button
        onClick={placeOrder}
        style={{
          color: "black",
          backgroundColor: "green",
          border: "2px solid black",
          margin: "10px",
          borderRadius: "5px",
        }}
      >
        Place Order
      </Button>
    </>
  );
}
