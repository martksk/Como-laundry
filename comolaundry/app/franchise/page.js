"use client";

import CustomerAmount from "./customer_amount";
import Ottolove from "./ottolove";

export default function FranchisePage() {
  return (
    <div>
      <div className="w-full h-[330px] bg-cover bg-center "
        style={{ backgroundImage: "url('/images/franchise-washer.jpg')" }}>
      </div>
      <div className="py-24 px-96 bg-white">
        <CustomerAmount />
      </div>
    </div>
  );
}
