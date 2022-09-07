import React from "react";

function Headlincard() {
  return (
    //   card container
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 ">
      {/* cards */}
      <div className="'rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white flex flex-col">
          <p className="font-bold text-1xl px-2 pt-4">Sun's Out, BOGO's Out</p>
          <p className="px-2">Through 8/23</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[260px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      </div>
      {/* cards */}
      <div className="'rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white flex flex-col">
          <p className="font-bold text-1xl px-2 pt-4">New Restureant</p>
          <p className="px-2">Added Daily</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[260px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      </div>
      {/* cards */}
      <div className="'rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white flex flex-col">
          <p className="font-bold text-1xl px-2 pt-4">We deliver Desserts</p>
          <p className="px-2">Tasty Treats</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[260px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
        />
      </div>
    </div>
  );
}

export default Headlincard;
