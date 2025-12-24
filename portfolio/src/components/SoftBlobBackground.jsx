import React, { useMemo } from "react";

export default function SoftBlobBackground() {
  // Generate stars once (stable positions)
  const stars = useMemo(() => {
    const count = 90; // change this for more/less stars
    return Array.from({ length: count }).map((_, i) => {
      const size = Math.random() * 2.9 + 0.6; // 0.6px - 2.8px
      const left = Math.random() * 100; // vw
      const top = Math.random() * 100; // vh
      const duration = Math.random() * 2.8 + 1.6; // 1.6s - 4.4s
      const delay = Math.random() * 3.5; // 0s - 3.5s
      const opacity = Math.random() * 0.25 + 0.1; // base opacity
      return { id: i, size, left, top, duration, delay, opacity };
    });
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

      <div className="absolute inset-0" style={{ background: "#ECE7E1" }} />

      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(800px 600px at 55% 40%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 60%),

            radial-gradient(900px 700px at 10% 78%, rgba(206,147,172,0.85) 0%, rgba(206,147,172,0) 60%),
            radial-gradient(700px 700px at 30% 35%, rgba(159,150,72,0.85) 0%, rgba(159,150,72,0) 60%),
            radial-gradient(900px 800px at 72% 28%, rgba(164,115,126,0.70) 0%, rgba(164,115,126,0) 60%),
            radial-gradient(900px 800px at 82% 70%, rgba(90,98,48,0.80) 0%, rgba(90,98,48,0) 65%),
            radial-gradient(900px 700px at 50% 55%, rgba(184,155,108,0.55) 0%, rgba(184,155,108,0) 60%)
          `,
          filter: "blur(60px) saturate(115%)",
          transform: "scale(1.05)",
          opacity: 0.95,
        }}
      />

      <div className="absolute inset-0">
        {stars.map((s) => (
          <span
            key={s.id}
            className="star-speck"
            style={{
              left: `${s.left}vw`,
              top: `${s.top}vh`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              opacity: s.opacity,
              animationDuration: `${s.duration}s`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
