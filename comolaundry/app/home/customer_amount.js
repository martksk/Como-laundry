// 'use client'
// export default function CustomerAmount() {
//     return ( 
//     <div className="grid grid-cols-1 justify-center items-center text-black">
//       <div className="grid grid-cols-1 justify-center items-center text-black">
//         <div className="text-center text-5xl tracking-wider mb-2">THE ART OF</div>
//         <div className="text-center text-9xl tracking-widest font-bold mb-12 pl-10">EASE</div>
//       </div>
//       <div className="flex flex-col justify-center items-center text-black text-2xl mb-4">
//         <div>โคโม่ ใช้เครื่องซักผ้า แบรนด์ Yamamoto เป็นเทคโนโลยีเครื่องซักผ้าที่ดีที่สุดในญี่ปุ่น</div>
//         <div>เป็นเครื่องซัก+อบในเครื่องเดียวกันนำเข้าเป็นเจ้าแรก และมุ่งเน้นความสะดวกสบายให้กับลูกค้า</div>
//         <div>ใช้เทคโนโลยีที่ทันสมัยที่สุด และมีคุณภาพ สร้างผลลัพธ์ทำให้เกิด passive income</div>
//       </div>
//       {/* <div className="flex flex-col justify-center items-center text-black text-2xl">
        
//         <div>เครื่องใช้ระบบPLC ที่เป็นเอกลักษณ์มีเฉพาะแบรนด์ของเราเท่านั้นที่มี ใช้งานง่ายและมีประสิทธิภาพสูง</div>
//         <div>มังฟังก์ชันล้างถ้งก่อนซัก และมีน้ำยาฆ่าเชื้อก่อนใช้งาน มีแผงหน้าจอแสดงผล เข้าใจง่ายและง่ายต่อการใช้งาน </div>
//         <div>หน้าจอมีขนาดใหญ่ ไม่เป็นปัญหาสำหรับลูกค้าใหม่</div>
//       </div> */}
//     </div>
//     )
// }

'use client'
import { useEffect, useState, useRef } from 'react';

export default function CustomerAmount() {
  const [inView, setInView] = useState(false);
  const customerRef = useRef(null); // Reference to the component

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting); // Set inView based on intersection status
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (customerRef.current) {
      observer.observe(customerRef.current);
    }

    return () => {
      if (customerRef.current) {
        observer.unobserve(customerRef.current);
      }
    };
  }, []);

  return (
    <div ref={customerRef} className="flex flex-col justify-center items-center text-black">
      <div className="flex flex-col justify-center items-center text-black">
        <div
          className={`text-5xl tracking-wider mb-2 transition-transform duration-1000 ${
            inView ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          THE ART OF
        </div>
        <div
          className={`text-9xl tracking-widest font-bold mb-12 pl-10 transition-transform duration-1000 ${
            inView ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          EASE
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-black text-2xl mb-4">
        <div>
          โคโม่ ใช้เครื่องซักผ้า แบรนด์ Yamamoto เป็นเทคโนโลยีเครื่องซักผ้าที่ดีที่สุดในญี่ปุ่น
        </div>
        <div>
          เป็นเครื่องซัก+อบในเครื่องเดียวกันนำเข้าเป็นเจ้าแรก และมุ่งเน้นความสะดวกสบายให้กับลูกค้า
        </div>
        <div>
          ใช้เทคโนโลยีที่ทันสมัยที่สุด และมีคุณภาพ สร้างผลลัพธ์ทำให้เกิด passive income
        </div>
      </div>
    </div>
  );
}
