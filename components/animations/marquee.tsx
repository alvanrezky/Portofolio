export default function Marquee({ text }: { text: string }) {
  const items = Array(8).fill(text);
  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}