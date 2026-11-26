import type { Product } from "../data/products";

export type SortOrder = "asc" | "desc";

export type ProductFilter = {
  keyword?: string;
  category?: string;
  maxPrice?: number;
  sort?: SortOrder;
};

export function getCategories(products: Product[]): string[] {
  return [...new Set(products.map((p) => p.category))];
}

export function filterProducts(products: Product[], filter: ProductFilter = {}): Product[] {
  const { keyword = "", category, maxPrice, sort } = filter;
  const kw = keyword.trim().toLowerCase();

  const result = products.filter((p) => {
    const matchKeyword = p.name.toLowerCase().includes(kw);
    const matchCategory = !category || p.category === category;
    const matchPrice = maxPrice === undefined || p.price <= maxPrice;
    return matchKeyword && matchCategory && matchPrice;
  });

  if (sort === "asc") return [...result].sort((a, b) => a.price - b.price);
  if (sort === "desc") return [...result].sort((a, b) => b.price - a.price);
  return result;
}


// 1. Tìm sản phẩm trong khoảng giá [min, max]
export function searchByPriceRange(
  products: Product[],
  min: number,
  max: number
): Product[] {
  return products.filter((p) => p.price >= min && p.price <= max);
}

// 2. Đếm số lượng sản phẩm theo từng danh mục bằng reduce
export function groupByCategory(products: Product[]): Record<string, number> {
  return products.reduce<Record<string, number>>((acc, product) => {
    const cat = product.category;
    acc[cat] = (acc[cat] ?? 0) + 1;
    return acc;
  }, {});
}