"use client";

import CustomerAmount from "./customer_amount";
import Ottolove from "./ottolove";

export default function FranchisePage() {
  return (
    <div>
      <div className=" bg-gray-200 flex justify-center items-center">
        <Ottolove />
      </div>
      <div className="p-24 bg-white">
        <CustomerAmount />
      </div>
    </div>
  );
}
