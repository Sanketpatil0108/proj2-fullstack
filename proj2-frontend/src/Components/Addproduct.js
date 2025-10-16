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
  const handleAddProduct = () => {
    if (!name || !brand || !price) {
      alert("Please fill all required fields!");
      return;
    }
    // Create new product object which has Srno + form data
    const newProduct = {
      srno: props.allProducts.length
        ? props.allProducts[props.allProducts.length - 1].srno + 1
        : 1,
      name,
      model,
      brand,
      rating,
      price,
      description,
    };
    // Update the product list in parent component
    props.setAllProducts([...props.allProducts, newProduct]);
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
          width: "70%",
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
