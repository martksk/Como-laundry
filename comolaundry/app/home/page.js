'use client'

import CustomerAmount from "./customer_amount"
import FAQ from "./faq"
import Ottolove from "./ottolove"
import OttoShop from "./ottoshop"
import Preview from "./preview_store"
import Video from "./video"
import Washer from "./washer"

export default function HomePage() {

    return (
    <div>
        <Preview />
        <div className="p-24 bg-white"><CustomerAmount /></div>
        <div className=" bg-white"><Video /></div>
        <div className=" bg-gray-200 h-screen flex justify-center items-center"><Ottolove /></div>
        {/* <div className="p-24 bg-white"><Washer /></div>  */}
        <div className="p-9 bg-gray-100 h-full"><OttoShop /></div>
        <div className="p-24 bg-white"><FAQ /></div> 
        
    </div>
    )
}