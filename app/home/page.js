"use client";

import CustomerAmount from "./customer_amount";
import FAQ from "./faq";
import Franchise from "./franchise";
import Ottolove from "./ottolove";
import OttoShop from "./ottoshop";
import Preview from "./preview_store";
import Video from "./video";

export default function HomePage() {
  return (
    <div>
      <div>
        <Preview />
      </div>
      <div className="p-24 bg-white">
        <CustomerAmount />
      </div>
      <div className=" bg-white">
        <Video />
      </div>
      <div className=" bg-gray-200 flex justify-center items-center">
        <Ottolove />
      </div>
      <div className="p-9 bg-gray-100 w-full">
        <OttoShop />
      </div>
      <div className="p-24 bg-white">
        <FAQ />
      </div>
      <div className="pb-24 bg-white">
        <Franchise />
      </div>
    </div>
  );
}
