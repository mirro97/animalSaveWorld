"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function SearchHeader() {
  // @TODO  헤더 스크롤 이벤트 개발시 사용
  // const ref = useRef<HTMLDivElement | null>(null);
  // const [visible, setVisible] = useState(false);

  // useEffect(() => {
  //   console.log(visible);
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach(({ target, isIntersecting }) => {
  //         if (target === ref.current) {
  //           setVisible(isIntersecting);
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.5,
  //     }
  //   );

  //   if (ref.current) {
  //     observer.observe(ref.current);
  //   }

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);

  return (
    <div className="fixed top-0">
      <div className="flex justify-center items-center p-[17px] w-[420px] relative">
        <h1 className="font-bold text-lg">강아지가 세상을 구한다</h1>
        <button className="flex justify-center items-center absolute right-6">
          <Image
            src="/images/icons/search.png"
            alt="검색"
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  );
}
