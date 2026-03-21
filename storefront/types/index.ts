export type Products = {
  id: string;
  title: string;
  image: { url: string; alt: string };
  price: number;
  discountedPrice: number;
  quantity?: number;
};

export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  image?: {
    url?: string;
    alt?: string;
  };
};