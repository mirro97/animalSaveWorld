import Link from "next/link";

interface IProps {
  title: string;
  description?: string;
  link: string;
}

export default function MoreTitle({ title, description, link }: IProps) {
  return (
    <div className="flex content-center justify-between items-center mb-1">
      <div>
        <h2 className="text-base font-bold">{title}</h2>
        <div className="text-[12px] text-secondary">{description}</div>
      </div>
      <Link href={link} className="text-sm">
        더보기
      </Link>
    </div>
  );
}
