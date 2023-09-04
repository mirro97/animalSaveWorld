import MainBanner from "@/components/banner/MainBanner";
import LinkCard from "@/components/card/LinkCard";
import LinkImgaeCard from "@/components/card/LinkImageCard";
import SearchHeader from "@/components/header/SearchHeader";
import MoreTitle from "@/components/title/MoreTitle";
import { MoreCardType, LinkImageCardType } from "@/types/components";

const volunteerRecruitmentNewsDummy: MoreCardType[] = [
  {
    id: "1",
    title: "아지네 하우스 봉사",
    tag: ["ALLTIME", "LUNCH"],
    location: "인천",
    date: "2023.08.12(토) ~ 08.31(목)",
  },
  {
    id: "2",
    title: "아지네 하우스 정기 봉사",
    tag: ["REGULAR", "CARPOOL"],
    location: "인천",
    date: "2023.08.14(월) ~ 08.31(목)",
  },
];

const nearMyLocationDummy: MoreCardType[] = [
  {
    id: "1",
    title: "인천 시립 보호소",
    tag: ["ALLTIME", "LUNCH", "CARPOOL"],
    location: "인천",
    date: "2023.08.12(토) ~ 08.31(목)",
  },
  {
    id: "2",
    title: "인천 케어 연계 보호소",
    tag: ["REGULAR"],
    location: "인천",
    date: "2023.08.14(월) ~ 08.31(목)",
  },
  {
    id: "3",
    title: "춘천 케어 보호소",
    tag: ["REGULAR"],
    location: "인천",
    date: "2023.08.14(월) ~ 08.31(목)",
  },
];

const reviewDummy: LinkImageCardType[] = [
  {
    id: "1",
    title: "강아지야 행복하자",
    location: "포천 00 보호소",
    date: "23.08.02",
    description:
      "친구 추천으로 봉사 신청해서 다녀왔어요. 매번 생각만 하다가 이번에 다녀왔는데 너무 좋더라구요. 다들 친절하게 반겨주셔너무 행복했어요 감사 무한 감사 왕 너무 신나는 강아지강아지 산책",
    img: "https://blog.kakaocdn.net/dn/I65sF/btqH8bGlkFm/2ZoTW0ZoXtKU0tAhtGcYkk/img.jpg",
  },
  {
    id: "2",
    title: "강아지야 행복하자이이이이이이이잉",
    location: "포천 00 보호소",
    date: "23.08.02",
    description:
      "친구 추천으로 봉사 신청해서 다녀왔어요. 매번 생각만 하다가 이번에 다녀왔는데 너무 좋더라구요. 다들 친절하게 반겨주셔너무 행복했어요 감사 무한 감사 왕 너무 신나는 강아지강아지 산책",
    img: "https://i.namu.wiki/i/L7Ugbaa7vJrLY_6DmhufRJyE3NkkRzoq48VZIyXRQv6D0lWZYnjc9PPjtDzJLZKiQA2CbHwHzjbCFXh3EDxmTk_q5ZoFZJGFtksTa68FmEUndRfjSR7dvYyjvtUX4UdHDdBNCDA4OMJWbXG3irGJvA.webp",
  },
];

export default function Home() {
  return (
    <>
      <SearchHeader />
      <div className="px-6">
        <MainBanner />
        <section className="mt-5">
          <MoreTitle title="신규 봉사모집 소식" link="/news" />
          {volunteerRecruitmentNewsDummy.map((card, index) => (
            <LinkCard key={index} info={card} path="news" />
          ))}
        </section>
        <section className="mt-[50px]">
          <MoreTitle
            title="내 위치 주변 보호소 추천"
            description="가까운 곳 먼저 도전해보세요."
            link="/news"
          />
          {nearMyLocationDummy.map((card, index) => (
            <LinkCard key={index} info={card} path="recommend" />
          ))}
        </section>
        <section className="mt-[50px]">
          <MoreTitle title="봉사 후기" link="/news" />
          {reviewDummy.map((card, index) => (
            <LinkImgaeCard key={index} info={card} path="recommend" />
          ))}
        </section>
      </div>
    </>
  );
}
