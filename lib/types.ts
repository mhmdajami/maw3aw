export type Animal = "dog" | "cat";

export type Product = {
  id: string;
  slug: string;
  name: string;
  animal: Animal;
  category: string;
  price: number;
  description: string;
  longDescription: string;
  images: string[];
  colors: string[];
  colorHex: Record<string, string>;
  materials: string;
  dimensions: string;
  features: string[];
  careInstructions: string;
  featured: boolean;
  inStock: boolean;
};

export type CartItem = { product: Product; color: string; quantity: number };
