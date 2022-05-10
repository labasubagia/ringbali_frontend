import axiosInstance from "@/helpers/axios";
import { IArtist } from "@/types/artist";
import { Res } from "@/types/response";

export const getAllArtist = async () => {
  const params = { populate: "profile,backdrop" };
  const res = await axiosInstance.get(`/artists`, { params });
  const data: Res<IArtist[]> = await res.data;
  return data?.data || [];
};
