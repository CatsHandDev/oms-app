// src/types/index.ts
export interface Product {
  id: string; // システムで一意なID
  productCode: string; // 店舗独自の管理コード
  janCode?: string; // JANコード
  name: string;
  price: number;
  stock: number;
  imageUrl?: string;
  createdAt: Date;
}