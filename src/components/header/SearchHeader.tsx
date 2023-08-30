import Image from "next/image";

export default function SearchHeader() {
  return (
    <div className="flex justify-center items-center relative p-[17px]">
      <h1 className="font-bold text-lg">강아지가 세상을 구한다</h1>
      <button className="flex justify-center items-center absolute right-0">
        <Image
          src="/images/icons/search.png"
          alt="검색"
          width={20}
          height={20}
        />
      </button>
    </div>
  );
}
