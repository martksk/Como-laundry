import Image from "next/image";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white border-b-8 border-b-blue-800 px-8 py-4 justify-center items-center text-black grid grid-cols-3 z-50">
      <div className="grid col-start-2 justify-center items-center">
        <Image src="/icons/como-logo.png" alt="Logo" width={112} height={112} />
      </div>
      {/* <div className="flex gap-4 text-black justify-center items-center">
        <div>Home</div>
        <div>Services</div>
        <div>About</div>
        <div>Contact</div>
      </div> */}
    </div>
  );
}
