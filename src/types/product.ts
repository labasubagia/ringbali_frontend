import { Image } from "@/types/image";
import { Data } from "@/types/data";

export type Product = Data<Attributes>;

interface Attributes {
  name: string;
  description: string;
  price: number;
  stock: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: { data: Image[] };
}
