'use client'

import CustomerAmount from "./customer_amount"
import Ottolove from "./ottolove"
import OttoShop from "./ottoshop"
import Preview from "./preview_store"

export default function HomePage() {

    return (
    <div>
        <Preview />
        <div className="p-24 bg-gray-100"><CustomerAmount /></div> 
        <div className=" bg-gray-200 h-screen flex justify-center items-center"><Ottolove /></div> 
        <div className="p-24 bg-gray-100 h-screen flex justify-center items-center"><OttoShop /></div> 
    </div>
    )
}