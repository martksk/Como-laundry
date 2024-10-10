// 'use client'
// import { useState } from 'react';

// export default function FAQ() {
//     const [visibleAnswers, setVisibleAnswers] = useState({});

//     const toggleAnswer = (index) => {
//         setVisibleAnswers(prev => ({
//             ...prev,
//             [index]: !prev[index]
//         }));
//     };

//     const faqData = [
//         {
//             question: "เครื่องซักผ้านำเข้าจากประเทศอะไร?",
//             answer: "จากประเทศญี่ปุ่น แบรนด์ยามาโมโตะ เกรดอุตสาหกรรม ทันสมัย ตอบโจทย์ความต้องการ มาตราฐานสากล"
//         },
//         {
//             question: "การรับประกัน",
//             answer: "รับประกันเครื่อง 3 ปี รับประกันเครื่องจักรตามเงื่อนไขของบริษัท ตลอดระยะเวลา 3 ปี"
//         },
//         {
//             question: "ค่าใช้จ่ายในการหาพื้นที่เพื่อเปิดร้านสะดวกซัก",
//             answer: "การประเมินพื้นที่ทางร้านประเมินพื้นที่ให้ฟรี และไม่มีค่าใช้จ่ายใดๆ"
//         },
//         {
//             question: "การเก็บค่าแฟรนไชส์",
//             answer: "ทางบริษัทไม่มีการเก็บเปอร์เซ็นต์ ส่วนแบ่งรายได้จากเจ้าของร้าน"
//         },
//         {
//             question: "ระยะเวลาการใช้งานของเครื่อง",
//             answer: "ทางบริษัทyamamto รับประกันเครื่องให้ถึง 30 ปี"
//         }
//     ];

//     return (
//     <div className="flex flex-col text-black">
//       <div className="flex flex-col justify-center items-center text-black mb-36">
//         <div className="text-9xl tracking-widest font-bold text-blue-900">FAQ</div>
//       </div>
//       {faqData.map((faq, index) => (
//         <div key={index} className="mb-6">
//           <button
//             onClick={() => toggleAnswer(index)}
//             className="text-3xl mb-6 w-full text-left hover:text-blue-600 transition-colors duration-300"
//           >
//             {faq.question}
//           </button>
//           {visibleAnswers[index] && (
//             <div className="text-2xl mb-2">
//               <span className="font-bold text-blue-800">คำตอบ :</span> {faq.answer}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//     )
// }

"use client";
import { useState, useEffect } from "react";

export default function FAQ() {
  const [visibleAnswers, setVisibleAnswers] = useState({});

  const toggleAnswer = (index) => {
    setVisibleAnswers((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const faqData = [
    {
      question: "เครื่องซักผ้านำเข้าจากประเทศอะไร?",
      answer:
        "จากประเทศญี่ปุ่น แบรนด์ยามาโมโตะ เกรดอุตสาหกรรม ทันสมัย ตอบโจทย์ความต้องการ มาตราฐานสากล",
    },
    {
      question: "การรับประกัน",
      answer:
        "รับประกันเครื่อง 3 ปี รับประกันเครื่องจักรตามเงื่อนไขของบริษัท ตลอดระยะเวลา 3 ปี",
    },
    {
      question: "ค่าใช้จ่ายในการหาพื้นที่เพื่อเปิดร้านสะดวกซัก",
      answer:
        "การประเมินพื้นที่ทางร้านประเมินพื้นที่ให้ฟรี และไม่มีค่าใช้จ่ายใดๆ",
    },
    {
      question: "การเก็บค่าแฟรนไชส์",
      answer: "ทางบริษัทไม่มีการเก็บเปอร์เซ็นต์ ส่วนแบ่งรายได้จากเจ้าของร้าน",
    },
    {
      question: "ระยะเวลาการใช้งานของเครื่อง",
      answer: "ทางบริษัทyamamto รับประกันเครื่องให้ถึง 30 ปี",
    },
  ];

  return (
    <div className="flex flex-col text-black max-w-4xl mx-auto px-4">
      <div className="flex flex-col justify-center items-center text-black mb-16">
        <div
          className={`text-6xl md:text-9xl tracking-widest font-bold text-blue-900 pl-20`}
        >
          FAQ
        </div>
      </div>
      {faqData.map((faq, index) => (
        <div key={index} className="mb-6">
          <button
            onClick={() => toggleAnswer(index)}
            className="w-full text-left p-6 bg-white border-2 border-blue-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-500 ease-in-out"
          >
            <div className="flex justify-between items-center">
              <span className="text-xl md:text-2xl font-semibold text-blue-800">
                {faq.question}
              </span>
              <span
                className={`transform transition-transform duration-500 ${
                  visibleAnswers[index] ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </div>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              visibleAnswers[index]
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="text-lg md:text-xl mt-4 px-6 pb-6">
              <span className="font-bold text-blue-800">คำตอบ :</span>{" "}
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
