// FlechaAnimada.tsx
const FlechaAnimada = () => (
  <div className="flex justify-center mt-2">
    <svg
      className="animate-flecha"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 5v14M12 19l-7-7M12 19l7-7"
        stroke="#a78bfa"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <style>{`
      .animate-flecha {
        animation: flechaBounce 1.8s infinite cubic-bezier(.68,-0.55,.27,1.55);
      }
      @keyframes flechaBounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(12px); }
      }
    `}</style>
  </div>
);

export default FlechaAnimada;