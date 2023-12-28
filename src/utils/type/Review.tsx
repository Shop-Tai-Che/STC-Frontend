export interface Reply {
  user_id: number;
  comment: string;
  created_at: string;
  updated_at: string;
}
export interface Review {
  product_id: number;
  user_id: number;
  rating: number;
  comment: string;
  created_at: string;
  updated_at: string;
  ReviewMedia?: [];
  Reply?: Reply[];
}
