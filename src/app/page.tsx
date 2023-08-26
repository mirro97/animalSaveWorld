import MainBanner from "@/components/banner/MainBanner";
import SearchHeader from "@/components/header/SearchHeader";
import MoreTitle from "@/components/title/MoreTitle";

const volunteerRecruitmentNewsDummy = [
  {
    title: "아지네 하우스 봉사",
    tag: ["ALLTIME", "LUNCH"],
    location: "인천",
    date: "2023.08.12(토) ~ 08.31(목)",
  },
  {
    title: "아지네 하우스 정기 봉사",
    tag: ["REGULAR", "CARPOOL"],
    location: "인천",
    date: "2023.08.12(토) ~ 08.31(목)",
  },
];

export default function Home() {
  return (
    <div>
      <SearchHeader />
      <MainBanner />
      <section className="mt-5">
        <MoreTitle title="신규 봉사모집 소식" link="/news" />
      </section>
    </div>
  );
}
