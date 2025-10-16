import React from "react";
import logo from "../Assets/Logo.PNG";
import {
  Card,
  Typography,
  CardMedia,
  CardContent,
  CardActionArea,
} from "@mui/material";

export default function AllProducts(props) {
  // Function to handle adding a product to the cart
  const addtoCart = (product) => {
    // searches the index of the item in cartItems by name
    const index = props.cartItems.findIndex((item) => item.name === product.name);
    // If index is found, add quantity +1 
    if (index >=0) {
      const updatedCart = [...props.cartItems];     // The the cartItems in new variable
      updatedCart[index].quantity += 1;             // Update the quantity of ite with index found
      props.setCartItems(updatedCart);              // Rewrite the updatedCart to CartItems
      alert("✅ Product added successfully!");}              
    else
      { 
      // Create new object and add it to cartItems
      const newProduct1 = {
        srno: props.cartItems.length
          ? props.cartItems[props.cartItems.length - 1].srno + 1
          : 1,
        name: product.name,
        model: product.model,
        brand: product.brand,
        rating: product.rating,
        price: product.price,
        description: product.description,
        quantity: 1,};
      props.setCartItems([...props.cartItems, newProduct1]);
      alert("✅ Product added successfully!");
      }
    }

  return (
    <>
    <div style={{ backgroundColor: "#cfbfbfff", padding: "20px", margin: "10px" }}>
      {props.allProducts.length > 0
        ? props.allProducts.map((product, index) => (
            <Card
              key={index}
              style={{
                width: "250px",
                display: "inline-block",
                margin: "10px",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <CardMedia
                component="img"
                // height="150px"
                width="100% "
                image={logo}
                alt={product.name}
              />
              <CardContent
                style={{ textAlign: "left", backgroundColor: "#99daa2ff" }}
              >
                <Typography variant="h5">{product.name}</Typography>
                <Typography variant="body1" color="text.secondary">
                  Brand: {product.brand}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Model: {product.model}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Rating: {product.rating}/5
                </Typography>
                <Typography variant="body1" sx={{ color: "green" }}>
                  Price: ₹{product.price}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Description: {product.description}
                </Typography>
              </CardContent>
              <CardActionArea>
                <button
                  style={{
                    backgroundColor: "#4CAF50",
                    width: "100%",
                    marginTop: "10px",
                    color: "white",
                    padding: "8px",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                  onClick={() => addtoCart(product)}
                >
                  Add to Cart
                </button>
              </CardActionArea>
            </Card>
          ))
        : "No Products to Display"}
    </div>
    {/* <div><pre>{JSON.stringify(props.cartItems, null, 2)}</pre></div> */}
    </>
  );
}
