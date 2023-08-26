import Link from "next/link";

interface IProps {
  title: string;
  link: string;
}

export default function MoreTitle({ title, link }: IProps) {
  return (
    <div className="flex content-center justify-between ">
      <h2 className="text-base font-bold">{title}</h2>
      <Link href={link}>더보기</Link>
    </div>
  );
}
