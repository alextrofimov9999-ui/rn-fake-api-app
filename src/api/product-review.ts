import apiClient from "./client";

export interface ProductReviewUser {
  id: number;
}

export interface ProductReviewProduct {
  id: number;
}

export interface ProductReview {
  id: number;
  rating: number;
  comment: string;
  user: ProductReviewUser;
  product: ProductReviewProduct;
}

//получаем список всех отзывов
export const getProductReviews = async () => {
  return apiClient.get<ProductReview[]>("/product-reviews");
};

//получаем отзывы по id
export const getProductReviewById = async (id: number) => {
  return apiClient.get<ProductReview>(`/product-reviews/${id}`);
};