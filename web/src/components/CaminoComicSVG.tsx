
const CaminoComicSVG = () => (
  <svg width="480" height="220" viewBox="0 0 480 220">
    <defs>
      <marker id="flecha" markerWidth="16" markerHeight="16" refX="8" refY="8" orient="auto" markerUnits="strokeWidth">
        <path d="M3,3 L13,8 L3,13 L8,8 L3,3" fill="#a78bfa" />
      </marker>
    </defs>
    <path
      d="M240,40 Q220,100 180,120 Q120,150 80,180"
      stroke="#a78bfa"
      strokeWidth="6"
      fill="none"
      markerEnd="url(#flecha)"
      style={{
        strokeDasharray: 700,
        strokeDashoffset: 700,
        animation: 'dashmove 2.5s cubic-bezier(.68,-0.55,.27,1.55) forwards'
      }}
    />
    <style>{`
      @keyframes dashmove {
        to {
          stroke-dashoffset: 0;
        }
      }
    `}</style>
  </svg>
);

export default CaminoComicSVG;
