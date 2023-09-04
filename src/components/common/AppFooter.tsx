"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

const buttonList = [
  {
    type: "home",
    path: "/",
    icon: "home-icon",
    text: "홈",
  },
  {
    type: "getter",
    path: "/getter",
    icon: "dog-icon",
    text: "봉사모집",
  },
  {
    type: "share",
    path: "/share",
    icon: "share-icon",
    text: "봉사 이야기",
  },
  {
    type: "myPage",
    path: "/mypage",
    icon: "my-icon",
    text: "마이 페이지",
  },
];

export default function AppFooter() {
  const router = useRouter();
  return (
    <div className="px-6 py-2 fixed bottom-0 w-[420px] bg-white">
      <div className="flex justify-between">
        {buttonList.map((item) => (
          <button
            className="text-xs flex flex-col items-center"
            onClick={() => router.push(item.path)}
          >
            <Image
              src={`/images/icons/${item.icon}.svg`}
              width={35}
              height={35}
              alt={item.text}
            />
            {item.text}
          </button>
        ))}
      </div>
    </div>
  );
}
