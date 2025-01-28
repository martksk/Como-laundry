// "use client";

// import Image from "next/image";

// export default function OttoShop() {
//   return (
//     <div className="mx-auto">
//       <div className="flex flex-col gap-12 justify-center items-center">
//         <Image
//           src="/images/washer.png"
//           alt="Washer Model XYZ"
//           width={1000}
//           height={500}
//         />
//         <div className="w-full">
//           <h2 className="text-3xl font-bold mb-12 text-black text-center">
//             Washer Model XYZ Specifications
//           </h2>
//           <div className="">
//             <table className="w-full text-2xl text-left text-gray-500">
//               <tbody>
//                 {/* Example with a main label without sub-labels */}
//                 <tr className="border-b border-gray-200 hover:bg-gray-50">
//                   <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
//                     ปริมาณ(ซัก/อบแห้ง)
//                   </th>
//                   <td className="py-4 px-6 text-center"></td>
//                   <td className="py-4 px-6 text-center">12kg/8kg</td>
//                   <td className="py-4 px-6 text-center">17kg/11kg</td>
//                   <td className="py-4 px-6 text-center">27kg/18kg</td>
//                   <td className="py-4 px-6 text-center">35kg/25kg</td>
//                 </tr>
//                 <tr className="border-b border-gray-200 hover:bg-gray-50">
//                   <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
//                     ฟังก์ชั่นล้างถังก่อนซัก
//                   </th>
//                   <td className="py-4 px-6 text-center"></td>
//                   <td className="py-4 px-6 text-center">O</td>
//                   <td className="py-4 px-6 text-center">O</td>
//                   <td className="py-4 px-6 text-center">O</td>
//                   <td className="py-4 px-6 text-center">O</td>
//                 </tr>
// <tr className="border-b border-gray-200 hover:bg-gray-50">
//   <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
//     ตั้งค่าการซักได้หลายรูปแบบ
//   </th>
//   <td className="py-4 px-6 text-center"></td>
//   <td className="py-4 px-6 text-center">O</td>
//   <td className="py-4 px-6 text-center">O</td>
//   <td className="py-4 px-6 text-center">O</td>
//   <td className="py-4 px-6 text-center">O</td>
// </tr>
// <tr className="border-b border-gray-200 hover:bg-gray-50">
//   <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
//     การให้น้ำร้อน
//   </th>
//   <td className="py-4 px-6 text-center"></td>
//   <td className="py-4 px-6 text-center">O</td>
//   <td className="py-4 px-6 text-center">O</td>
//   <td className="py-4 px-6 text-center">O</td>
//   <td className="py-4 px-6 text-center">O</td>
// </tr>
// <tr className="border-b border-gray-200 hover:bg-gray-50">
//   <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
//     ปั้มน้ำยาซักผ้าในเครื่อง
//   </th>
//   <td className="py-4 px-6 text-center"></td>
//   <td className="py-4 px-6 text-center">O</td>
//   <td className="py-4 px-6 text-center">O</td>
//   <td className="py-4 px-6 text-center">O</td>
//   <td className="py-4 px-6 text-center">O</td>
// </tr>

// {/* Example with a main label and three sub-labels */}
// <tr className="border-b border-gray-200">
//   <th
//     rowSpan={4}
//     className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap text-center border-r"
//   >
//     ถังซัก
//   </th>
// </tr>
// <tr className="border-b border-gray-200 hover:bg-gray-50">
//   <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
//     เส้นผ่านศูนย์กลาง
//   </td>
//   <td className="py-4 px-6 text-center">600mm</td>
//   <td className="py-4 px-6 text-center">660mm</td>
//   <td className="py-4 px-6 text-center">762mm</td>
//   <td className="py-4 px-6 text-center">890mm</td>
// </tr>
// <tr className="border-b border-gray-200 hover:bg-gray-50">
//   <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
//     ความลึก
//   </td>
//   <td className="py-4 px-6 text-center">450mm</td>
//   <td className="py-4 px-6 text-center">500mm</td>
//   <td className="py-4 px-6 text-center">600mm</td>
//   <td className="py-4 px-6 text-center">566mm</td>
// </tr>
// <tr className="border-b border-gray-200 hover:bg-gray-50">
//   <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
//     ความจุถังซัก
//   </td>
//   <td className="py-4 px-6 text-center">127 L</td>
//   <td className="py-4 px-6 text-center">171 L</td>
//   <td className="py-4 px-6 text-center">273 L</td>
//   <td className="py-4 px-6 text-center">352 L</td>
// </tr>
// <tr className="border-b border-gray-200">
//   <th
//     rowSpan={3}
//     className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap text-center border-r"
//   >
//     ความเร็วหมุนรอบ(รอบ/นาที)
//   </th>
// </tr>
// <tr className="border-b border-gray-200 hover:bg-gray-50">
//   <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
//     ซักล้าง
//   </td>
//   <td className="py-4 px-6 text-center">50 rpm</td>
//   <td className="py-4 px-6 text-center">37 rpm</td>
//   <td className="py-4 px-6 text-center">41 rpm</td>
//   <td className="py-4 px-6 text-center">39 rpm</td>
// </tr>
// <tr className="border-b border-gray-200 hover:bg-gray-50">
//   <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
//     ปั่นแห้ง
//   </td>
//   <td className="py-4 px-6 text-center">772 rpm</td>
//   <td className="py-4 px-6 text-center">900 rpm</td>
//   <td className="py-4 px-6 text-center">880 rpm</td>
//   <td className="py-4 px-6 text-center">800 rpm</td>
// </tr>
// <tr className="border-b border-gray-200">
//   <th
//     rowSpan={4}
//     className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap text-center border-r"
//   >
//     เส้นผ่านศูนย์กลางท่อ
//   </th>
// </tr>
// <tr className="border-b border-gray-200 hover:bg-gray-50">
//   <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
//     ให้น้ำเย็น/น้ำร้อน
//   </td>
//   <td className="py-4 px-6 text-center">3/4B(20A)</td>
//   <td className="py-4 px-6 text-center">3/4B(20A)</td>
//   <td className="py-4 px-6 text-center">3/4B(20A)</td>
//   <td className="py-4 px-6 text-center">3/4B(20A)</td>
// </tr>
// <tr className="border-b border-gray-200 hover:bg-gray-50">
//   <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
//     แก๊ส
//   </td>
//   <td className="py-4 px-6 text-center">Rc 1/2(15A)</td>
//   <td className="py-4 px-6 text-center">Rc 1/2(15A)</td>
//   <td className="py-4 px-6 text-center">Rc 1/2(15A)</td>
//   <td className="py-4 px-6 text-center">Rc 1/2(15A)</td>
// </tr>
// <tr className="border-b border-gray-200 hover:bg-gray-50">
//   <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
//     ลมร้อน
//   </td>
//   <td className="py-4 px-6 text-center">200mm</td>
//   <td className="py-4 px-6 text-center">200mm</td>
//   <td className="py-4 px-6 text-center">200mm</td>
//   <td className="py-4 px-6 text-center">200mm</td>
// </tr>
// <tr className="border-b border-gray-200 hover:bg-gray-50">
//   <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
//     แรงดันน้ำ (Mpa)
//   </th>
//   <td className="py-4 px-6 text-center"></td>
//   <td className="py-4 px-6 text-center">0.1 - 0.3</td>
//   <td className="py-4 px-6 text-center">0.1 - 0.3</td>
//   <td className="py-4 px-6 text-center">0.1 - 0.3</td>
//   <td className="py-4 px-6 text-center">0.1 - 0.3</td>
// </tr>
// <tr className="border-b border-gray-200 hover:bg-gray-50">
//   <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
//     การไหลของลมสูงสุด (ลูกบาศก์เมตร/นาที)
//   </th>
//   <td className="py-4 px-6 text-center"></td>
//   <td className="py-4 px-6 text-center">7.8</td>
//   <td className="py-4 px-6 text-center">7.6</td>
//   <td className="py-4 px-6 text-center">16.7</td>
// </tr>
// <tr className="border-b border-gray-200 hover:bg-gray-50">
//   <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
//     ความต้องการไฟฟ้า
//   </th>
//   <td className="py-4 px-6 text-center"></td>
//   <td className="py-4 px-6 text-center">
//     200V, 3 Phases, 60Hz
//   </td>
//   <td className="py-4 px-6 text-center">
//     200V, 3 Phases, 60Hz
//   </td>
//   <td className="py-4 px-6 text-center">
//     200V, 3 Phases, 60Hz
//   </td>
//   <td className="py-4 px-6 text-center">
//     200V, 3 Phases, 60Hz
//   </td>
// </tr>
// <tr className="border-b border-gray-200 hover:bg-gray-50">
//   <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
//     กำลังไฟฟ้าที่ใช้ซัก
//   </th>
//   <td className="py-4 px-6 text-center"></td>
//   <td className="py-4 px-6 text-center">670</td>
//   <td className="py-4 px-6 text-center">1150</td>
//   <td className="py-4 px-6 text-center">1710</td>
// </tr>
// <tr className="border-b border-gray-200 hover:bg-gray-50">
//   <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
//     ปริมาณแก๊สที่ใช้ LPG {"{"}KW(kg/h){"}"}
//   </th>
//   <td className="py-4 px-6 text-center"></td>
//   <td className="py-4 px-6 text-center">14Kw(12000kcal/h)</td>
//   <td className="py-4 px-6 text-center">14Kw(12000kcal/h)</td>
//   <td className="py-4 px-6 text-center">23.3Kw(20000kcal/h)</td>
//   <td className="py-4 px-6 text-center">27.9Kw(24000kcal/h)</td>
// </tr>
// <tr className="border-b border-gray-200 hover:bg-gray-50">
//   <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
//     ปริมาณน้ำที่ใช้ โปรแกรมมาตรฐาน (L)
//   </th>
//   <td className="py-4 px-6 text-center"></td>
//   <td className="py-4 px-6 text-center">129 L</td>
//   <td className="py-4 px-6 text-center">161 L</td>
//   <td className="py-4 px-6 text-center">207 L</td>
//   <td className="py-4 px-6 text-center">214 L</td>
// </tr>
// <tr className="border-b border-gray-200 hover:bg-gray-50">
//   <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
//     ขนาดเครื่อง (กว้าง x ลึก x สูง) (mm)
//   </th>
//   <td className="py-4 px-6 text-center"></td>
//   <td className="py-4 px-6 text-center">804 x 1119 x 1794</td>
//   <td className="py-4 px-6 text-center">858 x 1150 x 1800</td>
//   <td className="py-4 px-6 text-center">1003 x 1352 x 1848</td>
//   <td className="py-4 px-6 text-center">1140 x 1416 x 1973</td>
// </tr>
// <tr className="border-b border-gray-200 hover:bg-gray-50">
//   <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
//     น้ำหนักเครื่อง (Kg)
//   </th>
//   <td className="py-4 px-6 text-center"></td>
//   <td className="py-4 px-6 text-center">510</td>
//   <td className="py-4 px-6 text-center">618</td>
//   <td className="py-4 px-6 text-center">864</td>
//   <td className="py-4 px-6 text-center">1080</td>
// </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";

export default function OttoShop() {
  return (
    <div className="mx-auto px-4">
      <div className="flex flex-col gap-8 justify-center items-center">
        <Image
          src="/images/washer.png"
          alt="Washer Model XYZ"
          width={500}
          height={500}
          className="w-full max-w-max h-auto object-contain"
        />
        <div className="w-full h-full">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-black text-center">
            Washer Model XYZ Specifications
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm md:text-lg text-left text-gray-500">
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <th className="py-2 px-4 md:py-4 md:px-6 font-medium text-gray-900 whitespace-nowrap">
                    ปริมาณ(ซัก/อบแห้ง)
                  </th>
                  <td className="py-2 px-4 md:py-4 md:px-6 text-center"></td>
                  <td className="py-2 px-4 md:py-4 md:px-6 text-center">
                    12kg/8kg
                  </td>
                  <td className="py-2 px-4 md:py-4 md:px-6 text-center">
                    17kg/11kg
                  </td>
                  <td className="py-2 px-4 md:py-4 md:px-6 text-center">
                    27kg/18kg
                  </td>
                  <td className="py-2 px-4 md:py-4 md:px-6 text-center">
                    35kg/25kg
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <th className="py-2 px-4 md:py-4 md:px-6 font-medium text-gray-900 whitespace-nowrap">
                    ฟังก์ชั่นล้างถังก่อนซัก
                  </th>
                  <td className="py-2 px-4 md:py-4 md:px-6 text-center"></td>
                  <td className="py-2 px-4 md:py-4 md:px-6 text-center">O</td>
                  <td className="py-2 px-4 md:py-4 md:px-6 text-center">O</td>
                  <td className="py-2 px-4 md:py-4 md:px-6 text-center">O</td>
                  <td className="py-2 px-4 md:py-4 md:px-6 text-center">O</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                    ตั้งค่าการซักได้หลายรูปแบบ
                  </th>
                  <td className="py-4 px-6 text-center"></td>
                  <td className="py-4 px-6 text-center">O</td>
                  <td className="py-4 px-6 text-center">O</td>
                  <td className="py-4 px-6 text-center">O</td>
                  <td className="py-4 px-6 text-center">O</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                    การให้น้ำร้อน
                  </th>
                  <td className="py-4 px-6 text-center"></td>
                  <td className="py-4 px-6 text-center">O</td>
                  <td className="py-4 px-6 text-center">O</td>
                  <td className="py-4 px-6 text-center">O</td>
                  <td className="py-4 px-6 text-center">O</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                    ปั้มน้ำยาซักผ้าในเครื่อง
                  </th>
                  <td className="py-4 px-6 text-center"></td>
                  <td className="py-4 px-6 text-center">O</td>
                  <td className="py-4 px-6 text-center">O</td>
                  <td className="py-4 px-6 text-center">O</td>
                  <td className="py-4 px-6 text-center">O</td>
                </tr>

                {/* Example with a main label and three sub-labels */}
                <tr className="border-b border-gray-200">
                  <th
                    rowSpan={4}
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap text-center border-r"
                  >
                    ถังซัก
                  </th>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                    เส้นผ่านศูนย์กลาง
                  </td>
                  <td className="py-4 px-6 text-center">600mm</td>
                  <td className="py-4 px-6 text-center">660mm</td>
                  <td className="py-4 px-6 text-center">762mm</td>
                  <td className="py-4 px-6 text-center">890mm</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                    ความลึก
                  </td>
                  <td className="py-4 px-6 text-center">450mm</td>
                  <td className="py-4 px-6 text-center">500mm</td>
                  <td className="py-4 px-6 text-center">600mm</td>
                  <td className="py-4 px-6 text-center">566mm</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                    ความจุถังซัก
                  </td>
                  <td className="py-4 px-6 text-center">127 L</td>
                  <td className="py-4 px-6 text-center">171 L</td>
                  <td className="py-4 px-6 text-center">273 L</td>
                  <td className="py-4 px-6 text-center">352 L</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th
                    rowSpan={3}
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap text-center border-r"
                  >
                    ความเร็วหมุนรอบ(รอบ/นาที)
                  </th>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                    ซักล้าง
                  </td>
                  <td className="py-4 px-6 text-center">50 rpm</td>
                  <td className="py-4 px-6 text-center">37 rpm</td>
                  <td className="py-4 px-6 text-center">41 rpm</td>
                  <td className="py-4 px-6 text-center">39 rpm</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                    ปั่นแห้ง
                  </td>
                  <td className="py-4 px-6 text-center">772 rpm</td>
                  <td className="py-4 px-6 text-center">900 rpm</td>
                  <td className="py-4 px-6 text-center">880 rpm</td>
                  <td className="py-4 px-6 text-center">800 rpm</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th
                    rowSpan={4}
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap text-center border-r"
                  >
                    เส้นผ่านศูนย์กลางท่อ
                  </th>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                    ให้น้ำเย็น/น้ำร้อน
                  </td>
                  <td className="py-4 px-6 text-center">3/4B(20A)</td>
                  <td className="py-4 px-6 text-center">3/4B(20A)</td>
                  <td className="py-4 px-6 text-center">3/4B(20A)</td>
                  <td className="py-4 px-6 text-center">3/4B(20A)</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                    แก๊ส
                  </td>
                  <td className="py-4 px-6 text-center">Rc 1/2(15A)</td>
                  <td className="py-4 px-6 text-center">Rc 1/2(15A)</td>
                  <td className="py-4 px-6 text-center">Rc 1/2(15A)</td>
                  <td className="py-4 px-6 text-center">Rc 1/2(15A)</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                    ลมร้อน
                  </td>
                  <td className="py-4 px-6 text-center">200mm</td>
                  <td className="py-4 px-6 text-center">200mm</td>
                  <td className="py-4 px-6 text-center">200mm</td>
                  <td className="py-4 px-6 text-center">200mm</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                    แรงดันน้ำ (Mpa)
                  </th>
                  <td className="py-4 px-6 text-center"></td>
                  <td className="py-4 px-6 text-center">0.1 - 0.3</td>
                  <td className="py-4 px-6 text-center">0.1 - 0.3</td>
                  <td className="py-4 px-6 text-center">0.1 - 0.3</td>
                  <td className="py-4 px-6 text-center">0.1 - 0.3</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                    การไหลของลมสูงสุด (ลูกบาศก์เมตร/นาที)
                  </th>
                  <td className="py-4 px-6 text-center"></td>
                  <td className="py-4 px-6 text-center">7.8</td>
                  <td className="py-4 px-6 text-center">7.6</td>
                  <td className="py-4 px-6 text-center">16.7</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                    ความต้องการไฟฟ้า
                  </th>
                  <td className="py-4 px-6 text-center"></td>
                  <td className="py-4 px-6 text-center">
                    200V, 3 Phases, 60Hz
                  </td>
                  <td className="py-4 px-6 text-center">
                    200V, 3 Phases, 60Hz
                  </td>
                  <td className="py-4 px-6 text-center">
                    200V, 3 Phases, 60Hz
                  </td>
                  <td className="py-4 px-6 text-center">
                    200V, 3 Phases, 60Hz
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                    กำลังไฟฟ้าที่ใช้ซัก
                  </th>
                  <td className="py-4 px-6 text-center"></td>
                  <td className="py-4 px-6 text-center">670</td>
                  <td className="py-4 px-6 text-center">1150</td>
                  <td className="py-4 px-6 text-center">1710</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                    ปริมาณแก๊สที่ใช้ LPG {"{"}KW(kg/h){"}"}
                  </th>
                  <td className="py-4 px-6 text-center"></td>
                  <td className="py-4 px-6 text-center">14Kw(12000kcal/h)</td>
                  <td className="py-4 px-6 text-center">14Kw(12000kcal/h)</td>
                  <td className="py-4 px-6 text-center">23.3Kw(20000kcal/h)</td>
                  <td className="py-4 px-6 text-center">27.9Kw(24000kcal/h)</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                    ปริมาณน้ำที่ใช้ โปรแกรมมาตรฐาน (L)
                  </th>
                  <td className="py-4 px-6 text-center"></td>
                  <td className="py-4 px-6 text-center">129 L</td>
                  <td className="py-4 px-6 text-center">161 L</td>
                  <td className="py-4 px-6 text-center">207 L</td>
                  <td className="py-4 px-6 text-center">214 L</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                    ขนาดเครื่อง (กว้าง x ลึก x สูง) (mm)
                  </th>
                  <td className="py-4 px-6 text-center"></td>
                  <td className="py-4 px-6 text-center">804 x 1119 x 1794</td>
                  <td className="py-4 px-6 text-center">858 x 1150 x 1800</td>
                  <td className="py-4 px-6 text-center">1003 x 1352 x 1848</td>
                  <td className="py-4 px-6 text-center">1140 x 1416 x 1973</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                    น้ำหนักเครื่อง (Kg)
                  </th>
                  <td className="py-4 px-6 text-center"></td>
                  <td className="py-4 px-6 text-center">510</td>
                  <td className="py-4 px-6 text-center">618</td>
                  <td className="py-4 px-6 text-center">864</td>
                  <td className="py-4 px-6 text-center">1080</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
