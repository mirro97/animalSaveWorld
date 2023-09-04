import { LinkImageCardType } from "@/types/components";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  info: LinkImageCardType;
  path: string;
}

export default function LinkImgaeCard({ info, path }: IProps) {
  return (
    <Link href={`/${path}/${info.id}`} className="py-2 mb-2 ">
      <div className="flex items-center mb-2">
        <div className="w-[80px] h-[80px] overflow-hidden">
          <Image
            className="w-full h-full"
            src={info.img}
            width={100}
            height={100}
            alt={info.title}
          />
        </div>
        <div className="flex-1 ml-[14px]">
          <div className="flex justify-between items-center">
            <div className="flex items-baseline">
              <h2 className="font-bold text-sm text-ellipsis max-w-[130px] line-clamp-1">
                {info.title}
              </h2>
              <span className="text-xxs text-secondary ml-2">
                장소: {info.location}
              </span>
            </div>
            <span className="text-xxs text-secondary">{info.date}</span>
          </div>
          <div className="mt-1">
            <div className="text-xs">★★★★★ (5.0)</div>
            <p className="mt-4 text-xs text-ellipsis line-clamp-2">
              {info.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
