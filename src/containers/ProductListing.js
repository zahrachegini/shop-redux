import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponents from "./ProductComponents";
import { setProducts } from "./../redux/action/productActions";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    await axios("https://fakestoreapi.com/products")
      .then((res) => {
        dispatch(setProducts(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("products:", products);
  return (
    <div className="ui grid container">
      <ProductComponents />
    </div>
  );
};

export default ProductListing;
