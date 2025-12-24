import { useState } from "react";

export default function Carousel({ images, height = "h-44" }) {
  const [index, setIndex] = useState(0);

  function prev() {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function next() {
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  return (
    <div className="relative mb-4">
      <img
        src={images[index]}
        alt={`Carousel image ${index + 1}`}
        className={`w-full ${height} object-cover rounded-lg`}
      />

      <button
        type="button"
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow rounded-full w-9 h-9 flex items-center justify-center"
      >
        ‹
      </button>

      <button
        type="button"
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow rounded-full w-9 h-9 flex items-center justify-center"
      >
        ›
      </button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === index ? "bg-black/80" : "bg-black/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
