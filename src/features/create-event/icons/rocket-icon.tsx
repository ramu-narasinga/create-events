export const RocketIcon = () => {
  return (
    <svg className="w-8 h-8" viewBox="0 0 64 64" fill="none">
      {/* Rocket body */}
      <ellipse cx="32" cy="28" rx="10" ry="18" fill="#E8F4F8" transform="rotate(-25 32 28)"/>
      <ellipse cx="32" cy="28" rx="8" ry="16" fill="#B8D9E8" transform="rotate(-25 32 28)"/>
      
      {/* Window */}
      <circle cx="30" cy="22" r="4" fill="#2C3E50" opacity="0.8"/>
      <circle cx="30" cy="21" r="3" fill="#FF6B6B" opacity="0.3"/>
      
      {/* Left fin */}
      <path d="M22 32 L18 42 L24 36 Z" fill="#E85D4A" transform="rotate(-25 32 28)"/>
      
      {/* Right fin */}
      <path d="M42 32 L46 42 L40 36 Z" fill="#FF8C42" transform="rotate(-25 32 28)"/>
      
      {/* Nose cone */}
      <path d="M32 10 L26 20 L38 20 Z" fill="#FFD93D" transform="rotate(-25 32 28)"/>
      
      {/* Flame - yellow */}
      <ellipse cx="32" cy="46" rx="5" ry="8" fill="#FFD93D" transform="rotate(-25 32 46)"/>
      
      {/* Flame - orange */}
      <ellipse cx="33" cy="50" rx="4" ry="6" fill="#FF8C42" transform="rotate(-25 33 50)"/>
      
      {/* Flame - red */}
      <ellipse cx="34" cy="52" rx="3" ry="4" fill="#E85D4A" transform="rotate(-25 34 52)"/>
    </svg>
  );
};
