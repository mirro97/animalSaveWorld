"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface IProps {
  title: string;
}

export default function BackTitle({ title }: IProps) {
  const router = useRouter();
  return (
    <div className="flex content-center justify-between items-center mb-1">
      <button onClick={() => router.back()} className="text-xs">
        <Image
          src="/images/icons/back.svg"
          width={30}
          height={30}
          alt="뒤로가기"
        />
      </button>

      <h2 className="text-lg font-bold">{title}</h2>
    </div>
  );
}
