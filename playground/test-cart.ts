import { products } from "../src/data/products.ts";
import { addToCart, updateQuantity, removeFromCart, countItems, calcTotal } from "../src/utils/cart.ts";
import type { CartItem } from "../src/utils/cart.ts";
import { formatPrice } from "../src/utils/format.ts";
import { filterProducts, getCategories } from "../src/utils/product.ts";

let cart: CartItem[] = [];
cart = addToCart(cart, products[0]);      // Tai nghe Sony x1
cart = addToCart(cart, products[0], 2);   // Tai nghe Sony x3
cart = addToCart(cart, products[3]);      // Loa Marshall x1
console.log("Số sản phẩm:", countItems(cart));           // 4
console.log("Tổng tiền:", formatPrice(calcTotal(cart))); // 23.360.000 đ

cart = updateQuantity(cart, products[0].id, 1);
cart = removeFromCart(cart, products[3].id);
console.log(cart.map((i) => `${i.product.name} x${i.quantity}`));

console.log("Danh mục:", getCategories(products));
console.log(
  "Phụ kiện, giá tăng dần:",
  filterProducts(products, { category: "Phụ kiện", sort: "asc" }).map((p) => p.name)
);
console.log(
  "Tìm 'chuột', tối đa 2.5 triệu:",
  filterProducts(products, { keyword: "chuột", maxPrice: 2500000 }).map((p) => p.name)
);