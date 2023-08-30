import { MoreCardType } from "@/types/components";
import Link from "next/link";
import Tag from "@/components/common/Tag";

interface IProps {
  info: MoreCardType;
  type: "news" | "recommend";
}

export default function LinkCard({ info, type }: IProps) {
  return (
    <div className="py-2 px-3 border border-blue-500">
      <div className="flex items-center">
        <h2 className="mr-4">{info.title}</h2>
        <div className="flex">
          {info.tag.map((text) => (
            <Tag text={text} />
          ))}
        </div>
      </div>
      <div className="text-[12px] text-secondary">
        <div>위치: {info.location}</div>
        <div>날짜: {info.date}</div>
      </div>
    </div>
  );
}
``;
