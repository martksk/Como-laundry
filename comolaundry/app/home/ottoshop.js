'use client'

import Image from 'next/image';

export default function OttoShop() {
    // return ( 
    // <div className="flex flex-row justify-center items-center gap-24">
    //   <img src="/images/washer-spec.jpg" alt="text" className="w-1/3 p-4 rounded-3xl" />
    //   <div className="flex flex-col text-black items-center p-4">
    //     <div className="text-4xl font-bold py-12 text-blue-800">เครื่องซักผ้าของโคโม่</div>
    //     <div className="text-2xl text-center">ใช้ระบบPLC ที่เป็นเอกลักษณ์มีเฉพาะแบรนด์ของเราเท่านั้นที่มี ใช้งานง่ายและมีประสิทธิภาพสูง</div>
    //     <div className="text-2xl text-center">มีแผงหน้าจอแสดงผล เข้าใจง่ายและง่ายต่อการใช้งาน หน้าจอมีขนาดใหญ่ ไม่เป็นปัญหาสำหรับลูกค้าใหม่</div>
    //     <div className="text-2xl text-center">เติมน้ำยาซักผ้าและน้ำยาปรับผ้านุ่ม อัตโนมัติสามารถติดปั๊มน้ำยาอัตโนมัติได้ถึง 3 ชนิด</div>
    //     <div className="text-2xl text-center">น้ำยาซักผ้า น้ำยาปรับผ้านุ่ม น้ำยาฆ่าเชื้อ ใช้ร่วมกับกระบวนการซักได้อย่างลงตัว</div>
    //   </div>
    // </div>
    // )


    // return (
    //   <div className="container mx-auto">
    //     <div className="flex flex-col gap-8 justify-center items-center">
    //       <Image
    //         src="/images/como-washer.jpg"
    //         alt="Washer Model XYZ"
    //         width={1000}
    //         height={500}
    //         className="rounded-lg shadow-lg"
    //       />
    //       <div className="md:w-1/2">
    //         <h2 className="text-3xl font-bold mb-4 text-black text-center">Washer Model XYZ Specifications</h2>
    //         <div className="overflow-x-auto">
    //           <table className="w-full text-3xl text-left text-gray-500">
    //             <tbody>
    //               {[
    //                 { label: 'Capacity', value: '4.5 cu. ft.' },
    //                 { label: 'Washing Programs', value: '12' },
    //                 { label: 'Spin Speed', value: '1200 RPM' },
    //                 { label: 'Energy Rating', value: 'A+++' },
    //                 { label: 'Dimensions', value: '27" x 39" x 33"' },
    //                 { label: 'Smart Features', value: 'Wi-Fi enabled, App control' },
    //               ].map((spec, index) => (
    //                 <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
    //                   <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
    //                     {spec.label}
    //                   </th>
    //                   <td className="py-4 px-6 text-center">
    //                     {spec.value}
    //                   </td>
    //                 </tr>
    //               ))}
    //             </tbody>
    //           </table>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // );


    // return (
    //   <div className="container mx-auto">
    //     <div className="flex flex-col gap-8 justify-center items-center">
    //       <Image
    //         src="/images/como-washer.jpg"
    //         alt="Washer Model XYZ"
    //         width={1000}
    //         height={500}
    //         className="rounded-lg shadow-lg"
    //       />
    //         <h2 className="text-3xl font-bold mb-4 text-black text-center">Washer Model XYZ Specifications</h2>
    //         <div className="overflow-x-auto">
    //           <table className="w-full text-3xl text-left text-gray-600">
    //             <tbody>
    //               {[
    //                 { label: 'Capacity', values: ['4.5 cu. ft.', '', ''] },
    //                 { label: 'Washing Programs', values: ['Quick Wash', 'Delicate', 'Heavy Duty'] },
    //                 { label: 'Spin Speed', values: ['1200 RPM', '', ''] },
    //                 { label: 'Energy Rating', values: ['A+++', '', ''] },
    //                 { label: 'Dimensions', values: ['27" x 39" x 33"', '', ''] },
    //                 { label: 'Smart Features', values: ['Wi-Fi enabled', 'App control', 'Voice control'] },
    //               ].map((spec, index) => (
    //                 <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
    //                   <th className="py-4 pr-12 px-6 font-medium text-gray-900 whitespace-nowrap">
    //                     {spec.label}
    //                   </th>
    //                   {spec.values.map((value, i) => (
    //                     <td key={i} className="py-4 px-6 text-center">
    //                       {value}
    //                     </td>
    //                   ))}
    //                 </tr>
    //               ))}
    //             </tbody>
    //           </table>
    //         </div>
    //     </div>
    //   </div>
    // );

    return (
      <div className="mx-auto">
        <div className="flex flex-col gap-12 justify-center items-center">
          <Image
            src="/images/washer.png"
            alt="Washer Model XYZ"
            width={1000}
            height={500}
          />
          <div className="w-full">
            <h2 className="text-3xl font-bold mb-12 text-black text-center">Washer Model XYZ Specifications</h2>
            <div className="">
              <table className="w-full text-2xl text-left text-gray-500">
                <tbody>
                  {/* Example with a main label without sub-labels */}
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                      ปริมาณ(ซัก/อบแห้ง)
                    </th>
                    <td className="py-4 px-6 text-center"></td>
                    <td className="py-4 px-6 text-center">12kg/8kg</td>
                    <td className="py-4 px-6 text-center">17kg/11kg</td>
                    <td className="py-4 px-6 text-center">27kg/18kg</td>
                    <td className="py-4 px-6 text-center">35kg/25kg</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                      ฟังก์ชั่นล้างถังก่อนซัก
                    </th>
                    <td className="py-4 px-6 text-center"></td>
                    <td className="py-4 px-6 text-center">O</td>
                    <td className="py-4 px-6 text-center">O</td>
                    <td className="py-4 px-6 text-center">O</td>
                    <td className="py-4 px-6 text-center">O</td>
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
                    <th rowSpan={4} className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap text-center border-r">
                      ถังซัก
                    </th>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">เส้นผ่านศูนย์กลาง</td>
                    <td className="py-4 px-6 text-center">600mm</td>
                    <td className="py-4 px-6 text-center">660mm</td>
                    <td className="py-4 px-6 text-center">762mm</td>
                    <td className="py-4 px-6 text-center">890mm</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">ความลึก</td>
                    <td className="py-4 px-6 text-center">450mm</td>
                    <td className="py-4 px-6 text-center">500mm</td>
                    <td className="py-4 px-6 text-center">600mm</td>
                    <td className="py-4 px-6 text-center">566mm</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">ความจุถังซัก</td>
                    <td className="py-4 px-6 text-center">127 L</td>
                    <td className="py-4 px-6 text-center">171 L</td>
                    <td className="py-4 px-6 text-center">273 L</td>
                    <td className="py-4 px-6 text-center">352 L</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th rowSpan={3} className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap text-center border-r">
                      ความเร็วหมุนรอบ(รอบ/นาที)
                    </th>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">ซักล้าง</td>
                    <td className="py-4 px-6 text-center">50 rpm</td>
                    <td className="py-4 px-6 text-center">37 rpm</td>
                    <td className="py-4 px-6 text-center">41 rpm</td>
                    <td className="py-4 px-6 text-center">39 rpm</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">ปั่นแห้ง</td>
                    <td className="py-4 px-6 text-center">772 rpm</td>
                    <td className="py-4 px-6 text-center">900 rpm</td>
                    <td className="py-4 px-6 text-center">880 rpm</td>
                    <td className="py-4 px-6 text-center">800 rpm</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th rowSpan={4} className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap text-center border-r">
                      เส้นผ่านศูนย์กลางท่อ
                    </th>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">ให้น้ำเย็น/น้ำร้อน</td>
                    <td className="py-4 px-6 text-center">3/4B(20A)</td>
                    <td className="py-4 px-6 text-center">3/4B(20A)</td>
                    <td className="py-4 px-6 text-center">3/4B(20A)</td>
                    <td className="py-4 px-6 text-center">3/4B(20A)</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">แก๊ส</td>
                    <td className="py-4 px-6 text-center">Rc 1/2(15A)</td>
                    <td className="py-4 px-6 text-center">Rc 1/2(15A)</td>
                    <td className="py-4 px-6 text-center">Rc 1/2(15A)</td>
                    <td className="py-4 px-6 text-center">Rc 1/2(15A)</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">ลมร้อน</td>
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
                    <td className="py-4 px-6 text-center">200V, 3 Phases, 60Hz</td>
                    <td className="py-4 px-6 text-center">200V, 3 Phases, 60Hz</td>
                    <td className="py-4 px-6 text-center">200V, 3 Phases, 60Hz</td>
                    <td className="py-4 px-6 text-center">200V, 3 Phases, 60Hz</td>
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