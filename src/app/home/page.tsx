'use client';
import React, { useEffect } from "react";
import Banner from "../component/banner/Banner";
import ApiCall from "../api/Api";
import "../../../public/assets/css/Banner.css";
import { useDispatch } from "react-redux";
import { product } from "../redux/slices/product/ProductSlice";

export default function HomePage() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const productsList = await ApiCall.Product.getAll();
  //       console.log("Fetched Products:",productsList);
  //       dispatch(product(productsList))
  //     } catch (err) {
  //       console.error("Failed to fetch products:", err);
  //     }
  //   };

  //   fetchProducts();
  // }, []); 

  return (
    <>
      <section className="banner">
        <div className="banner-wrapper py-5">
          <div className="container mx-auto">
            <Banner />
          </div>
        </div>
      </section>
    </>
  );
}
