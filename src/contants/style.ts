import { TagType } from "@/types/components";

export const tagColor: { [key in string]: string } = {
  ALLTIME: "bg-lightgreen",
  LUNCH: "bg-lightyellow",
  CARPOOL: "bg-lightdeepgray",
  REGULAR: "bg-lightblue",
};

export const tagTextColor: { [key in string]: string } = {
  ALLTIME: "text-green",
  LUNCH: "text-yellow",
  CARPOOL: "text-deepgray",
  REGULAR: "text-blue",
};
