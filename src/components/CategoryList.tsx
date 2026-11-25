interface ProductItem {
  id: number | string;
  category: string;
}

interface CategoryListProps {
  products: ProductItem[];
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
}

export default function CategoryList({
  products,
  selectedCategory = 'Tất cả',
  onSelectCategory,
}: CategoryListProps) {
  const categories = ['Tất cả', ...Array.from(new Set(products.map((p) => p.category)))];

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        marginBottom: '1.5rem',
      }}
    >
      {categories.map((category) => {
        const isActive = selectedCategory === category;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelectCategory?.(category)}
            style={{
              padding: '0.45rem 1rem',
              borderRadius: '999px',
              border: '1px solid #cbd5e1',
              backgroundColor: isActive ? '#0f172a' : '#ffffff',
              color: isActive ? '#ffffff' : '#1e293b',
              fontWeight: isActive ? 600 : 400,
              cursor: 'pointer',
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}