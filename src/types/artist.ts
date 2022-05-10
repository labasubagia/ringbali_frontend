import { Data } from "@/types/data";
import { Image } from "@/types/image";

export type IArtist = Data<Attributes>;

interface Attributes {
  name: string;
  description: string;
  profile: { data: Image };
  backdrop: { data: Image };
  publishedAt: string;
}
