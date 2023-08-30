import { tagColor } from "@/contants/style";
import { announcementStatus } from "@/contants/text";
import { TagType } from "@/types/components";

interface IProps {
  text: TagType;
}

export default function Tag({ text }: IProps) {
  return (
    <span
      className={`text-[10px] rounded-[4px] px-[5px] py-[1px] w-fit ${tagColor[text]} text-[10px] mr-1`}
    >
      {announcementStatus[text]}
    </span>
  );
}
