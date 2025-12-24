export default function MovingGradient() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-white" />

      <div className="absolute top-0 left-0 right-0 h-[75vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-[#cbc1b4] to-[#86904d] opacity-90" />

        <div className="absolute inset-x-0 bottom-0 h-[35vh] bg-gradient-to-b from-transparent via-white/70 to-white" />
      </div>
    </div>
  );
}
