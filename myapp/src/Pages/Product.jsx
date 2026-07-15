import { useState, useEffect } from "react";
import { Productcard } from "../components/Productcard";

export function Product() {
  const [products, setProduct] = useState([]);

  useEffect(() =>{
    fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.products);
      setProduct(data.products);
    })
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

      <h1 className="text-4xl font-bold mb-2">Products</h1>

      <p className="text-gray-600 mb-8">
        This page demonstrates React Props by passing data to the ProductCard component.
      </p>

      <div className="p-6 bg-white rounded-xl shadow-lg">
        {products.map((product) => (
          <Productcard
            key={product.id}
            name={product.title}
            description={product.description}
            price={product.price}
            image={product.images}
          />
        ))}
      </div>

    </div>
  );
}