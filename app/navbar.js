"use client";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    console.log(latest, previous);
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="sticky top-0 z-50 flex w-full bg-white border-b-8 border-b-blue-800 px-8 py-4 justify-center items-center text-black"
    >
      <div className="grid col-start-2 justify-center items-center">
        <Image src="/icons/como-logo.png" alt="Logo" width={112} height={112} />
      </div>
      {/* <div className="flex gap-4 text-black justify-center items-center">
        <div>Home</div>
        <div>Services</div>
        <div>About</div>
        <div>Contact</div>
      </div> */}
    </motion.nav>
  );
}
