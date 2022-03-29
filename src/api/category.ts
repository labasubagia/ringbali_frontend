import axiosInstance from "@/helpers/axios";
import { Category } from "@/types/category";
import { Res } from "@/types/response";

export const getAllCategory = async () => {
  const params = { populate: "image" };
  const res = await axiosInstance.get(`/categories`, { params });
  const data: Res<Category[]> = await res.data;
  return data?.data || [];
};
