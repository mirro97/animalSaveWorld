import MainBanner from "@/components/banner/MainBanner";
import LinkCard from "@/components/card/LinkCard";
import SearchHeader from "@/components/header/SearchHeader";
import MoreTitle from "@/components/title/MoreTitle";
import { MoreCardType } from "@/types/components";

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

export default function Home() {
  return (
    <div>
      <SearchHeader />
      <MainBanner />
      <section className="mt-5">
        <MoreTitle title="신규 봉사모집 소식" link="/news" />
        {volunteerRecruitmentNewsDummy.map((card, index) => (
          <LinkCard key={index} info={card} type="news" />
        ))}
      </section>
      <section className="mt-5">
        <MoreTitle
          title="내 위치 주변 보호소 추천"
          description="가까운 곳 먼저 도전해보세요."
          link="/news"
        />
        {nearMyLocationDummy.map((card, index) => (
          <LinkCard key={index} info={card} type="news" />
        ))}
      </section>
    </div>
  );
}
