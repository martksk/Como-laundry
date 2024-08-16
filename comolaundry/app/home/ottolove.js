'use client'

import Image from "next/image";

export default function Ottolove() {
    return ( 
      <div className="flex relative">
        <Image src="/images/como3.jpg" alt="Ottolove" width={1920} height={1080} className="w-screen h-screen object-cover" />
        <div className="flex flex-row absolute bottom-0 bg-white text-black w-full justify-around items-center p-16 backdrop-blur-sm bg-opacity-20 ">
          <div className="text-center">
            <div className="grid justify-center items-center text-4xl my-2 font-semibold">ใส่ใจทุกความต้องการ</div>
            <div className="grid text-center items-center text-2xl px-8">พบการผสานศาสตร์ และศิลป์เพื่อความโดดเด่นอย่างแท้จริง</div>
          </div>
          <div className="text-center">
            <div className="grid justify-center items-center text-4xl my-2 font-semibold">เลือกสรรทุกรายละเอียด</div>
            <div className="grid text-center items-center text-2xl px-8">เปิดประสบการณ์พัฒนาที่ไม่สิ้นสุด เพื่อที่สุดของความสมบูรณ์แบบ</div>
          </div>
          <div className="text-center">
            <div className="grid justify-center items-center text-4xl my-2 font-semibold">พัฒนาอย่างต่อเนื่อง</div>
            <div className="grid text-center items-center text-2xl px-8">นวัตกรรมที่ใช้งานได้จริง ด้วยการออกแบบเพื่อตอบสนองการใช้ชีวิตยุคใหม่</div>
          </div>
        </div>
      </div>
    )
}