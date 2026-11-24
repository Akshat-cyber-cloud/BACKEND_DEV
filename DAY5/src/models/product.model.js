import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
      min: [0, "Price cannot be negative"]
    },
    stock: {
      type: Number,
      required: [true, "Stock count is required"],
      min: [0, "Stock cannot be negative"],
      default: 0
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true
    }
  },
  {
    timestamps: true 
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;