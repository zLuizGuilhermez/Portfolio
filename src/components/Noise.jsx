export default function Noise({
  opacity = 0.2,
  scanlines = 0.35,
  size = 1,
}) {
  const lineOpacity = 0.04 + scanlines * 0.12;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 20,
        opacity,
        mixBlendMode: 'screen',
        backgroundImage: `
          repeating-linear-gradient(
            to bottom,
            rgba(255,255,255,${lineOpacity}) 0,
            rgba(255,255,255,${lineOpacity}) 1px,
            transparent 1px,
            transparent 3px
          ),
          radial-gradient(rgba(255,255,255,0.08) 0.7px, transparent 0.8px)
        `,
        backgroundSize: `${size * 100}% 3px, 7px 7px`,
        backgroundPosition: '0 0, 3px 3px',
      }}
    />
  );
}
