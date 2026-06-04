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
  dimensions?: {
    height: string;
    topOuter: string;
    topInner: string;
    bottomOuter: string;
    bottomInner: string;
    bucketWeight: string;
    lidWeight: string;
    handleWeight: string;
    containerLabel?: string; // e.g. 'Jar', 'Can' — defaults to 'Bucket'
    hideHandle?: boolean;    // for jars that have no handle row
  };
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
