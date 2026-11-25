interface BannerProps {
  onShopNow?: () => void;
}

export default function Banner({ onShopNow }: BannerProps) {
  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        color: '#ffffff',
        padding: '2.5rem 2rem',
        borderRadius: '12px',
        marginBottom: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '0.75rem',
      }}
    >
      <span
        style={{
          backgroundColor: '#f59e0b',
          color: '#0f172a',
          fontWeight: 700,
          fontSize: '0.75rem',
          padding: '0.25rem 0.6rem',
          borderRadius: '999px',
          textTransform: 'uppercase',
        }}
      >
        Ưu đãi tuần này
      </span>
      <h2 style={{ margin: 0, fontSize: '1.75rem' }}>
        Siêu Sale Công Nghệ – Giảm đến 30%
      </h2>
      <p style={{ margin: 0, color: '#cbd5e1', maxWidth: '540px' }}>
        Săn ngay phụ kiện, thiết bị văn phòng và đồ công nghệ chính hãng với mức giá tốt nhất trong tháng.
      </p>
      <button
        type="button"
        onClick={onShopNow}
        style={{
          marginTop: '0.5rem',
          padding: '0.65rem 1.25rem',
          backgroundColor: '#3b82f6',
          color: '#ffffff',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        Mua ngay
      </button>
    </section>
  );
}