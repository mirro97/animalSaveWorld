import { TagType } from "@/types/components";

export const announcementStatus: { [key in TagType]: string } = {
  ALLTIME: "상시모집",
  LUNCH: "점심제공",
  CARPOOL: "카풀제공",
  REGULAR: "정기모집",
};
