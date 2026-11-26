import { useState, useEffect } from "react";

interface BannerProps {
  onShopNow?: () => void;
}

interface Slide {
  id: number;
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    badge: "Ưu đãi tuần này",
    title: "Siêu Sale Công Nghệ – Giảm Đến 30%",
    description:
      "Săn ngay phụ kiện, thiết bị văn phòng và đồ công nghệ chính hãng với mức giá tốt nhất trong tháng.",
    buttonText: "Mua ngay",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    badge: "Bộ sưu tập mới",
    title: "Âm Thanh Đỉnh Cao – Trải Nghiệm Sống Động",
    description:
      "Tai nghe chống ồn và loa di động từ Sony, Marshall giúp nâng tầm không gian làm việc và giải trí.",
    buttonText: "Khám phá ngay",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    badge: "Setup Góc Làm Việc",
    title: "Bàn Phím Cơ & Màn Hình Chuẩn Đồ Họa",
    description:
      "Tối ưu hiệu suất mỗi ngày với hệ sinh thái Keychron, Logitech và Dell UltraSharp.",
    buttonText: "Xem sản phẩm",
    image:
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Banner({ onShopNow }: BannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const currentSlide = slides[currentIndex];

  return (
    <section
      className="banner"
      style={{
        backgroundImage: `linear-gradient(95deg, #0f1b2d 45%, rgba(15, 27, 45, 0.55) 100%), url("${currentSlide.image}")`,
      }}
    >
      <div key={currentSlide.id} className="banner-content banner-fade">
        <span className="banner-badge">{currentSlide.badge}</span>
        <h2 className="banner-title">{currentSlide.title}</h2>
        <p className="banner-desc">{currentSlide.description}</p>
        <button type="button" className="banner-btn" onClick={onShopNow}>
          {currentSlide.buttonText}
        </button>
      </div>

      {/* Nút điều hướng trái / phải */}
      <button
        type="button"
        className="banner-arrow banner-prev"
        onClick={prevSlide}
        aria-label="Slide trước"
      >
        &#10094;
      </button>
      <button
        type="button"
        className="banner-arrow banner-next"
        onClick={nextSlide}
        aria-label="Slide tiếp theo"
      >
        &#10095;
      </button>

      {/* Chấm tròn chuyển slide */}
      <div className="banner-dots">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={`banner-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Chuyển đến slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}