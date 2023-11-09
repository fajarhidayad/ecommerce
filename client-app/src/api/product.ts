import { api } from '.';

export interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  stock: number;
  image: string;
  status: boolean;
  createdAt: Date;
}

export const getProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data as Product[];
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const getProductById = async (id: string) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data as Product;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};
