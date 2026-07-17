import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../components/Loader";

export function ProductDetails() {

    const { id } = useParams();

    const [product, setProduct] = useState(null);

    useEffect(() => {

        fetch(`https://dummyjson.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setProduct(data);
            });

    }, [id]);

    if (!product) {
        return <Loader />;
    }

    return (

        <div className="flex gap-10 p-10">

            {/* Left Side */}

            <div>

                <img
                    src={product.images[0]}
                    alt={product.title}
                    width="350"
                />

            </div>

            {/* Right Side */}

            <div>

                <h1>{product.title}</h1>

                <h3>${product.price}</h3>

                <p>{product.description}</p>

                <p>Brand : {product.brand}</p>

                <p>Category : {product.category}</p>

                <p>Rating : {product.rating}</p>

                <p>Stock : {product.stock}</p>

            </div>

        </div>

    );
}