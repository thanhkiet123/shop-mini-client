import { useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import { products } from "./data/products";
import { filterProducts } from "./utils/product";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tất cả");

  // Khu 1: Lọc sản phẩm theo danh mục bằng hàm filterProducts đã viết ở Bước 2
  const filteredProducts = filterProducts(products, {
    category: selectedCategory === "Tất cả" ? undefined : selectedCategory,
  });

  // Khu 2: Sản phẩm giá tốt (dưới 3.000.000 đ, sắp xếp giá tăng dần)
  const budgetProducts = filterProducts(products, {
    maxPrice: 3000000,
    sort: "asc",
  });

  // Khu 3 (Bài tập về nhà): Sản phẩm sắp hết hàng (1 <= stock <= 5)
  const lowStockProducts = products.filter(
    (p) => p.stock >= 1 && p.stock <= 5
  );

  return (
    <>
      <Header />
      <main>
        <Banner />
        <CategoryList
          products={products}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Khu 1: Tất cả / Theo danh mục */}
        <ProductList
          title={selectedCategory === "Tất cả" ? "Sản phẩm nổi bật" : selectedCategory}
          items={filteredProducts}
        />

        {/* Khu 2: Sản phẩm giá tốt */}
        <ProductList
          title="Sản phẩm giá tốt (Dưới 3 triệu)"
          items={budgetProducts}
        />

        {/* Khu 3: Sản phẩm sắp hết hàng (BTVN) */}
        <ProductList
          title="Sản phẩm sắp hết hàng"
          items={lowStockProducts}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;