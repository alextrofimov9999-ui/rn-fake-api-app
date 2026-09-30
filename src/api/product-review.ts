import apiClient from "./client";

export interface ProductReview {
  id: number;
  productId: number;
  userId: number;
  rating: number;
  comment: string;
  createdAt: string;
}

//получаем список всех отзывов
export const getProductReviews = async () => {
  return apiClient.get<ProductReview[]>("/product-reviews");
};

//получаем отзывы по id
export const getProductReviewById = async (id: number) => {
  return apiClient.get<ProductReview>(`/product-reviews/${id}`);
};