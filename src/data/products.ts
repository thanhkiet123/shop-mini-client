export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  stock: number;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Tai nghe Bluetooth Sony WH-1000XM5",
    price: 6490000,
    category: "Âm thanh",
    stock: 12,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Bàn phím cơ Keychron K2 Pro",
    price: 2150000,
    category: "Phụ kiện",
    stock: 8,
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Chuột không dây Logitech MX Master 3S",
    price: 2390000,
    category: "Phụ kiện",
    stock: 0,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Loa di động Marshall Emberton II",
    price: 3890000,
    category: "Âm thanh",
    stock: 5,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Màn hình đồ họa Dell UltraSharp U2723QE 27\"",
    price: 12500000,
    category: "Màn hình",
    stock: 4,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Đồng hồ thông minh Apple Watch Series 9",
    price: 9490000,
    category: "Đồng hồ",
    stock: 7,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 7,
    name: "Đèn treo màn hình Xiaomi Mi Computer Light Bar",
    price: 890000,
    category: "Phụ kiện",
    stock: 15,
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    name: "Webcam Logitech Brio 4K Ultra HD",
    price: 4290000,
    category: "Phụ kiện",
    stock: 0,
    image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?auto=format&fit=crop&w=600&q=80",
  },
];