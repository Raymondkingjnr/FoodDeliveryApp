import React, { useState } from "react";
import { data } from "../Data/data.js";

function Food() {
  //   console.log(data);
  const [foods, setFoods] = useState(data);

  //filter type
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  // filter price

  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* fliter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* fliter type */}
        <div>
          <p className="font-bold text-gray-700">Filter Types</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setFoods(data)}
              className="border-orange-600 text-orange-600 hover:bg-orange-200 hover:text-white-600"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="border-orange-600 text-orange-600 hover:bg-orange-200 hover:text-white-600"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="border-orange-600 text-orange-600 hover:bg-orange-200 hover:text-white-600"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className="border-orange-600 text-orange-600 hover:bg-orange-200 hover:text-white-600"
            >
              Salads
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="border-orange-600 text-orange-600 hover:bg-orange-200 hover:text-white-600"
            >
              Chicken
            </button>
          </div>
        </div>
        {/* fliter price */}
        <div>
          <p className="font-bold text-gray-700">Filter price</p>
          <div className="flex justify-between max-w-[390] x-full">
            <button
              onClick={() => filterPrice("$")}
              className="border-orange-600 text-orange-600 hover:bg-orange-200 hover:text-white-600"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="border-orange-600 text-orange-600 hover:bg-orange-200 hover:text-white-600"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="border-orange-600 text-orange-600 hover:bg-orange-200 hover:text-white-600"
            >
              $$$
            </button>

            <button
              onClick={() => filterPrice("$$$$")}
              className="border-orange-600 text-orange-600 hover:bg-orange-200 hover:text-white-600"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* dispaly foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((items, index) => (
          <div
            key={index}
            className="border shadow-lg hover:scale-105 duration-300 rounded-lg"
          >
            <img
              src={items.image}
              alt={items.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{items.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  {items.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Food;
