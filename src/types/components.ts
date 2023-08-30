export type TagType = "ALLTIME" | "LUNCH" | "CARPOOL" | "REGULAR";

export type MoreCardType = {
  id: string;
  title: string;
  tag: TagType[];
  location: string;
  date: string;
};
