import qs from "qs";
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

export const getFilteredProducts = async (
  key: string | null = null,
  categoryId: number | null = null
) => {
  let query: any = { populate: "image", filters: { $and: [] } };
  if (key) {
    query.filters.$and.push({ name: { $containsi: key } });
  }
  if (categoryId) {
    query.filters.$and.push({ category: { id: { $eq: categoryId } } });
  }
  query = qs.stringify(query, { encodeValuesOnly: true });

  const res = await axiosInstance.get(`/products?${query}`);
  const data: Res<Product[]> = await res.data;
  return data?.data;
};
