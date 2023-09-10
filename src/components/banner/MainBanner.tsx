"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const dummy = [
  {
    key: "acacac",
    title: "인천 보호소 꼬물이 7남매 입소!",
    description: "아가들 돌봐주실 봉사자 모집해요",
    date: "2023.08.12(목) - 08.13(일)",
    bannerImg: "https://i.ytimg.com/vi/9ONqnsb2adI/maxresdefault.jpg",
  },
  {
    key: "bsfsdfs",
    title: "인천 보호소 꼬물이 7남매 입소!",
    description: "아가들 돌봐주실 봉사자 모집해요",
    date: "2023.08.12(목) - 08.13(일)",
    bannerImg: "https://i.ytimg.com/vi/i6Kwg4QPE60/maxresdefault.jpg",
  },
  {
    key: "cdgdfg",
    title: "인천 보호소 꼬물이 7남매 입소!",
    description: "아가들 돌봐주실 봉사자 모집해요",
    date: "2023.08.12(목) - 08.13(일)",
    bannerImg: "https://i.ytimg.com/vi/i6Kwg4QPE60/maxresdefault.jpg",
  },
  {
    key: "dasesg",
    title: "인천 보호소 꼬물이 7남매 입소!",
    description: "아가들 돌봐주실 봉사자 모집해요",
    date: "2023.08.12(목) - 08.13(일)",
    bannerImg: "https://i.ytimg.com/vi/i6Kwg4QPE60/maxresdefault.jpg",
  },
];

export default function MainBanner() {
  return (
    <Swiper>
      {dummy.map((banner) => (
        <SwiperSlide key={banner.key}>
          <Image
            src={banner.bannerImg}
            width={384}
            height={141}
            alt={banner.title}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
