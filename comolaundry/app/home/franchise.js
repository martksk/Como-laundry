"use client";
import { useRouter } from "next/navigation";
import { Button } from "antd";

export default function Franchise() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/franchise");
  };

  return (
    <>
      <div className="flex gap-4 justify-center">
        <Button
          shape="round"
          size="large"
          type="primary"
          onClick={handleClick}
          style={{ padding: "24px 48px", fontSize: "24px", height: "auto" }}
        >
          สนใจแฟรนไชน์
        </Button>
      </div>
    </>
  );
}
