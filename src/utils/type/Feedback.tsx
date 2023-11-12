export type Feedback = {
  id: number;
  user_id: string;
  cover: string;
  product_id: string;
  rating: 4;
  comment: string;
  create_at: string;
  update_at?: string;
  child_id: number;
};
