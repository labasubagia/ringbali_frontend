import axiosInstance from "@/helpers/axios";
import { Product } from "@/types/product";
import { Res } from "@/types/response";

export const getAllProducts = async () => {
  const params = { populate: "image" };
  const res = await axiosInstance.get(`/products`, { params });
  const data: Res<Product[]> = await res.data;
  return data?.data || [];
};

export const getProduct = async (id: string) => {
  const params = { populate: "image" };
  const res = await axiosInstance.get(`/products/${id}`, { params });
  const data: Res<Product> = await res.data;
  return data?.data;
};
