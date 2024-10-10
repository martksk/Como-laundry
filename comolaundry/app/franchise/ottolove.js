"use client";

import Image from "next/image";

export default function Ottolove() {
  return (
    <div className="flex relative">
      <Image
        src="/images/como3.jpg"
        alt="Ottolove"
        width={1920}
        height={1080}
        className="w-screen h-screen object-cover"
      />
    </div>
  );
}
