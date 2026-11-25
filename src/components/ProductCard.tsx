import type { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const isOutOfStock = product.stock === 0;

  return (
    <article className={`product-card ${isOutOfStock ? "out-of-stock" : ""}`}>
      <div className="product-img-wrap">
        {isOutOfStock && <span className="stock-badge">Hết hàng</span>}
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-body">
        <span className="product-category">{product.category}</span>
        <h3 className="product-title">{product.name}</h3>
        <p className="product-price">{product.price.toLocaleString("vi-VN")} ₫</p>
        <button type="button" className="btn" disabled={product.stock === 0}>
          {isOutOfStock ? "Hết hàng" : "Thêm vào giỏ"}
        </button>
      </div>
    </article>
  );
}