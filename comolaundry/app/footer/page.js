import Link from "next/link";
import { FacebookFilled, TikTokFilled, YoutubeFilled } from "@ant-design/icons";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="mx-auto flex justify-center gap-10">
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold mt-4 mb-2">ติดต่อเรา</h4>
          <br />
          <p className="text-white mb-2">บริษัท แม็กซ์โตะ จำกัด</p>
          <p className="text-white mb-2">
            เลขที่ 39 ซอย ลาดพร้าว 80 แยก 22 แขวงวังทองหลาง
          </p>
          <p className="text-white mb-2">เขตวังทองหลาง กรุงเทพมหานคร 10310</p>
        </div>
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold mt-4">Official Channel</h4>
          <br />
          <div className="flex flex-row gap-6 text-3xl mb-4">
            <div>
              <a
                href="https://www.facebook.com/Comolaundryplace"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookFilled />
              </a>
            </div>
            <div>
              <a
                href="https://www.tiktok.com/@comolaundry"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TikTokFilled />
              </a>
            </div>
            <div>
              <a
                href="https://youtube.com/@comothailand?si=igGs_z7NZML3kFPC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YoutubeFilled />
              </a>
            </div>
          </div>
          <p className="text-white">
            สนใจแฟรนไชน์ : 098-4927888 / 086-6694644 / 063-7852424
          </p>
          <p className="text-white">
            Email: maxto.como@gmail.com / como.thailand88@gmail.com
          </p>
          <p className="text-white">Line ID: comolaundryplace</p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
