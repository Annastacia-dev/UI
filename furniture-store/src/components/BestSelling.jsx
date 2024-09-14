import { useState } from "react";
import { bestSellers } from "./data/bestSelling";

const BestSelling = () => {
  const [quantities, setQuantities] = useState(() => {
    const initialQuantities = {};
    bestSellers.forEach((product) => {
      initialQuantities[product.title] = 0;
    });
    return initialQuantities;
  });

  const handleIncrease = (productTitle) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productTitle]: prevQuantities[productTitle] + 1,
    }));
  };

  const handleDecrease = (productTitle) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productTitle]: Math.max(0, prevQuantities[productTitle] - 1),
    }));
  };

  return (
    <div className="flex flex-col gap-10 md:pt-40 md:px-10 px-5 pt-[38em]">
      <div className="flex items-center gap-4">
        <hr className="border border-black md:w-1/2 w-1/3" />
        <h4 className="font-bold md:text-3xl text-xl capitalize">
          Best Sellers
        </h4>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5">
        {bestSellers.slice(0, 12).map((product) => (
          <div key={product.title} className="flex flex-col gap-4">
            <a href={product.path} className="flex flex-col gap-3">
              <img
                src={product.image}
                className="w-full md:h-60 h-48 object-cover rounded hover:scale-95"
              />
              <h5 className="font-semibold">{product.title}</h5>
              <p className="text-xs font-light leading-5">
                {product.description.slice(0, 40)}...
              </p>
              <p className="text-sm font-bold uppercase">
                kes {product.price.toLocaleString()}
              </p>
            </a>

            <div className="flex items-center justify-between gap-4 mt-2 border border-black">
              <button
                onClick={() => handleDecrease(product.title)}
                className="text-xl font-bold px-4 py-1 bg-gray-50"
              >
                -
              </button>
              <span className="font-semibold">{quantities[product.title]}</span>
              <button
                onClick={() => handleIncrease(product.title)}
                className="text-xl font-bold px-2 py-1 bg-gray-50"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
