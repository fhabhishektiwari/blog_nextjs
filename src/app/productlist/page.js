"use client";
import { useEffect, useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await fetch("https://dummyjson.com/products");
      const result = await data.json();
      console.log(result);
      setProducts(result.products);
    }
    fetchData();
  }, []);
  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h3>Name: {product.title}</h3>
          <p>Price: {product.price}</p>
        </div>
      ))}
    </div>
  );
}
