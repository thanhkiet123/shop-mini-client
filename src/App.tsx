import { useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import { products } from "./data/products";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tất cả");

  const filteredProducts =
    selectedCategory === "Tất cả"
      ? products
      : products.filter((p) => p.category === selectedCategory);

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
        <ProductList
          title={selectedCategory === "Tất cả" ? "Sản phẩm nổi bật" : selectedCategory}
          items={filteredProducts}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;