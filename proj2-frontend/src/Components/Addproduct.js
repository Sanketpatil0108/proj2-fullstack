import React, { useState } from "react";
import { Box, Button, FormControl, TextField } from "@mui/material";

export default function AddProduct(props) {
  // State variables for input fields
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [brand, setBrand] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

// Function to handle adding a new product
  const handleAddProduct = async () => {
    if (!name || !brand || !price) {
      alert("Please fill all required fields!");
      return;
    }
    // Create new product object which will be sent to backend
    const newProduct = {
      name,
      model,
      brand,
      rating: Number(rating),
      price: Number(price),
      description,
    };

    // Update parent's allProducts array
    if (props.allProducts && props.setAllProducts) {
      props.setAllProducts([...props.allProducts, newProduct]);
    }

    // Code to send newProduct to backend API using POST request
    const response = await fetch ("http://localhost:8080/addproduct", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newProduct)
    });

    if (!response.ok) {
      throw new Error("Failed to save product");
    }
    
    alert("✅ Product added successfully!");

    // Reset input fields
    setName("");
    setModel("");
    setBrand("");
    setRating("");
    setPrice("");
    setDescription("");
  };

  return (
    <div style={{ backgroundColor: "#98c2a3d2", padding: "20px" }}>
      <p style={{ fontSize: "25px", fontWeight: "bold" }}>
        Add your product details here
      </p>

      <FormControl
        style={{
          width: "80%",
          margin: "auto",
          display: "flex",
          gap: "20px",
        }}
      >
        <TextField
          label="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />
        <Box display="flex" gap="10px">
          <TextField
            label="Brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            fullWidth
          />
          <TextField
            label="Model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            fullWidth
          />
        </Box>
        <Box display="flex" gap="10px">
          <TextField
            label="Rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            fullWidth
          />
          <TextField
            label="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            fullWidth
          />
        </Box>
        <TextField
          label="Description"
          multiline
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
        />
        <Button
          variant="contained"
          onClick={handleAddProduct}
          style={{ width: "30%", margin: "auto" }}
        >
          Add Product
        </Button>
      </FormControl>
    </div>
  );
}
