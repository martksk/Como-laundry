// 'use client';

// import React, { useEffect, useState } from "react";
// import { motion, useMotionValue } from "framer-motion";

// const imgs = [
//     'https://cms.otteriwashdry.com/assets/fd7b9735-cf11-4968-be41-d1ea4589aa25',
//     'https://cms.otteriwashdry.com/assets/9bc3ecd4-cd97-4771-8717-6e7a7095bc72',
//     'https://cms.otteriwashdry.com/assets/6ddb269f-675e-4a67-89e1-e9a168e6b479',
//     'https://cms.otteriwashdry.com/assets/51007b8b-35de-48ce-ae63-8200c6942e65'
// ];

// const ONE_SECOND = 1000;
// const AUTO_DELAY = ONE_SECOND * 10;
// const DRAG_BUFFER = 50;

// const SPRING_OPTIONS = {
//   type: "spring",
//   mass: 3,
//   stiffness: 400,
//   damping: 50,
// };

// const SwipeCarousel = () => {
//   const [imgIndex, setImgIndex] = useState(0);
//   const dragX = useMotionValue(0);

//   useEffect(() => {
//     const intervalRef = setInterval(() => {
//       const x = dragX.get();

//       if (x === 0) {
//         setImgIndex((pv) => {
//           if (pv === imgs.length - 1) {
//             return 0;
//           }
//           return pv + 1;
//         });
//       }
//     }, AUTO_DELAY);

//     return () => clearInterval(intervalRef);
//   }, [dragX]);

//   const onDragEnd = () => {
//     const x = dragX.get();

//     if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
//       setImgIndex((pv) => pv + 1);
//     } else if (x >= DRAG_BUFFER && imgIndex > 0) {
//       setImgIndex((pv) => pv - 1);
//     }
//   };

//   return (
//     <div className="relative overflow-hidden bg-neutral-950 py-8">
//       <motion.div
//         drag="x"
//         dragConstraints={{ left: 0, right: 0 }}
//         style={{ x: dragX }}
//         animate={{ translateX: `-${imgIndex * 100}%` }}
//         transition={SPRING_OPTIONS}
//         onDragEnd={onDragEnd}
//         className="flex cursor-grab items-center active:cursor-grabbing"
//       >
//         <Images imgIndex={imgIndex} />
//       </motion.div>

//       <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
//       <GradientEdges />
//     </div>
//   );
// };

// const Images = ({ imgIndex }) => {
//   return (
//     <>
//       {imgs.map((imgSrc, idx) => (
//         <motion.div
//           key={idx}
//           style={{
//             backgroundImage: `url(${imgSrc})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//           animate={{ scale: imgIndex === idx ? 0.95 : 0.85 }}
//           transition={SPRING_OPTIONS}
//           className="aspect-video w-screen shrink-0 rounded-xl bg-neutral-800 object-cover"
//         />
//       ))}
//     </>
//   );
// };

// const Dots = ({ imgIndex, setImgIndex }) => {
//   return (
//     <div className="mt-4 flex w-full justify-center gap-2">
//       {imgs.map((_, idx) => (
//         <button
//           key={idx}
//           onClick={() => setImgIndex(idx)}
//           className={`h-3 w-3 rounded-full transition-colors ${
//             idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
//           }`}
//         />
//       ))}
//     </div>
//   );
// };

// const GradientEdges = () => {
//   return (
//     <>
//       <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
//       <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
//     </>
//   );
// };

// export default function Preview() {
//   return <SwipeCarousel />;
// }

// 'use client';

// import React, { useEffect, useState } from "react";
// import { motion, useMotionValue } from "framer-motion";

// const imgs = [
//     'https://cms.otteriwashdry.com/assets/fd7b9735-cf11-4968-be41-d1ea4589aa25',
//     'https://cms.otteriwashdry.com/assets/9bc3ecd4-cd97-4771-8717-6e7a7095bc72',
//     'https://cms.otteriwashdry.com/assets/6ddb269f-675e-4a67-89e1-e9a168e6b479',
//     'https://cms.otteriwashdry.com/assets/51007b8b-35de-48ce-ae63-8200c6942e65'
// ];

// const ONE_SECOND = 1000;
// const AUTO_DELAY = ONE_SECOND * 10;
// const DRAG_BUFFER = 50;

// const SPRING_OPTIONS = {
//   type: "spring",
//   mass: 3,
//   stiffness: 400,
//   damping: 50,
// };

// const SwipeCarousel = () => {
//   const [imgIndex, setImgIndex] = useState(0);
//   const dragX = useMotionValue(0);

//   useEffect(() => {
//     const intervalRef = setInterval(() => {
//       const x = dragX.get();

//       if (x === 0) {
//         setImgIndex((pv) => {
//           if (pv === imgs.length - 1) {
//             return 0;
//           }
//           return pv + 1;
//         });
//       }
//     }, AUTO_DELAY);

//     return () => clearInterval(intervalRef);
//   }, [dragX]);

//   const onDragEnd = () => {
//     const x = dragX.get();

//     if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
//       setImgIndex((pv) => pv + 1);
//     } else if (x >= DRAG_BUFFER && imgIndex > 0) {
//       setImgIndex((pv) => pv - 1);
//     }
//   };

//   return (
//     <div className="bg-neutral-950 h-screen mb-10">
//       <motion.div
//         drag="x"
//         dragConstraints={{ left: 0, right: 0 }}
//         style={{ x: dragX }}
//         animate={{ translateX: `-${imgIndex * 100}%` }}
//         transition={SPRING_OPTIONS}
//         onDragEnd={onDragEnd}
//         className="flex items-center"
//       >
//         <Images imgIndex={imgIndex} className="relative" />
//         <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10">
//         <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
//       </div>

//       </motion.div>
//     </div>
//   );
// };

// const Images = ({ imgIndex }) => {
//   return (
//     <>
//       {imgs.map((imgSrc, idx) => (
//         <motion.div
//           key={idx}
//           style={{
//             backgroundImage: `url(${imgSrc})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//           animate={{ scale: imgIndex === idx ? 1.05 : 1 }}
//           transition={SPRING_OPTIONS}
//           className="relative w-screen h-screen flex-shrink-0 rounded-xl opacity-50"
//         />
//       ))}
//     </>
//   );
// };

// const Dots = ({ imgIndex, setImgIndex }) => {
//   return (
//     <div className="flex w-full justify-center gap-2">
//       {imgs.map((_, idx) => (
//         <button
//           key={idx}
//           onClick={() => setImgIndex(idx)}
//           className={`h-3 w-3 rounded-full transition-colors ${
//             idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
//           }`}
//         />
//       ))}
//     </div>
//   );
// };

// export default function Preview() {
//   return <SwipeCarousel />;
// }

"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const imgs = [
  "/images/como2.jpg",
  "/images/como1.jpg",
  "/images/como3.jpg",
  "/images/como5.jpg",
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [dragX]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative bg-neutral-950 h-screen overflow-hidden">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{ translateX: `-${imgIndex * 100}%` }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex items-center w-full z-20"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      </div>
      <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 z-30 pointer-events-none">
        {/* <img src="https://cms.otteriwashdry.com/assets/30440a13-eb59-4dd6-b7a8-21396597a837" alt="logo"/> */}
      </div>
    </div>
  );
};

const Images = ({ imgIndex }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => (
        <motion.div
          key={idx}
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          animate={{ scale: imgIndex === idx ? 1.05 : 1 }}
          transition={SPRING_OPTIONS}
          className="w-screen h-screen flex-shrink-0 rounded-xl opacity-50"
        />
      ))}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className="flex justify-center gap-6">
      {imgs.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setImgIndex(idx)}
          className={`h-3.5 w-3.5 rounded-full transition-colors ${
            idx === imgIndex ? "bg-blue-600" : "bg-white"
          }`}
        />
      ))}
    </div>
  );
};

export default function Preview() {
  return <SwipeCarousel />;
}
