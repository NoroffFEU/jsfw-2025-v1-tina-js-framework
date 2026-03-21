export type Products = {
  id: string;
  title: string;
  image: { url: string; alt: string };
  price: number;
  discountedPrice: number;
  quantity?: number;
};
