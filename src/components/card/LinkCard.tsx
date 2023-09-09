import { MoreCardType } from "@/types/components";
import Link from "next/link";
import Tag from "@/components/common/Tag";

interface IProps {
  info: MoreCardType;
  path: string;
}

export default function LinkCard({ info, path }: IProps) {
  return (
    <Link href={`/${path}/${info.id}`} className="py-2 mb-2 ">
      <div className="flex items-center mb-2">
        <h2 className="font-bold text-sm mr-4">{info.title}</h2>
        <div className="flex">
          {info.tag.map((text, index) => (
            <Tag key={index} text={text} />
          ))}
        </div>
      </div>
      <div className="text-[12px] text-secondary">
        <div>위치: {info.location}</div>
        <div>날짜: {info.date}</div>
      </div>
    </Link>
  );
}
``;
