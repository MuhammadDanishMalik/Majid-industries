export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  samplePrice: number;
  cartonPrice: number;
  cartonQty: number;
  image: string;
  images?: string[];
  description: string;
  keyFeatures?: string[];
  specifications?: {
    height?: string;
    topDiameter?: string;
    bottomDiameter?: string;
    weight?: string;
    material?: string;
  };
  colors?: string[];
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  products?: Product[];
}

export interface CartItem extends Product {
  quantity: number;
  type: 'sample' | 'carton';
}
