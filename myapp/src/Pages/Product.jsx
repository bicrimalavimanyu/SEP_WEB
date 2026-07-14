import { Productcard } from "../components/Productcard";

export function Product() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

      <h1 className="text-4xl font-bold mb-2">Products</h1>

      <p className="text-gray-600 mb-8">
        This page demonstrates React Props by passing data to the ProductCard component.
      </p>

      <div className="p-6 bg-white rounded-xl shadow-lg">
        <Productcard
          name="Gaming Laptop"
          description="Powerful laptop with Ryzen 7, RTX Graphics and 16GB RAM."
          price="$999.99"
        />
      </div>

    </div>
  );
}