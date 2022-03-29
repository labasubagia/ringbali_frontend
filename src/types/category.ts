import { Data } from "@/types/data";
import { Image } from "@/types/image";

export type Category = Data<Attributes>;

interface Attributes {
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image?: { data: Image };
}
