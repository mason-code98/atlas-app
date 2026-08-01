"use client";

const atlasWords = [
  "EQUITY",
  "PORTFOLIO",
  "BUILDER",
  "DEVELOPMENT",
  "WEALTH",
  "LEGACY",
  "NET WORTH",
  "CASH FLOW",
  "PROPERTY VALUE",
  "ATLAS",
];

type MatrixTransitionProps = {
  active: boolean;
};

export default function MatrixTransition({
  active,
}: MatrixTransitionProps) {
  if (!active) {
    return null;
  }

  return (
    <div className="atlas-transition fixed inset-0 z-[9999] overflow-hidden bg-black">
      <div className="atlas-transition-glow" />

      <div className="atlas-word-field">
        {Array.from({ length: 45 }).map((_, index) => (
          <span
            key={index}
            className="atlas-stream-word"
            style={{
              left: `${(index * 17) % 100}%`,
              top: `${(index * 29) % 100}%`,
              animationDelay: `${(index % 12) * 0.035}s`,
              fontSize: `${10 + (index % 5) * 3}px`,
            }}
          >
            {atlasWords[index % atlasWords.length]}
          </span>
        ))}
      </div>

      <div className="atlas-transition-center">
        <div className="atlas-transition-mark">ATLAS</div>
      </div>

      <div className="atlas-transition-flash" />
    </div>
  );
}