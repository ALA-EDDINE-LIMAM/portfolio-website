import React, { useEffect, useRef } from 'react';
import './AnimatedBackground.css';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Binary rain configuration
    const fontSize = 24;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];
    const speeds: number[] = [];
    const opacities: number[] = [];

    // Initialize drops at random positions
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
      speeds[i] = 0.3 + Math.random() * 0.7;
      opacities[i] = 0.1 + Math.random() * 0.4;
    }

    const draw = () => {
      // Semi-transparent background for trail effect
      ctx.fillStyle = 'rgba(10, 10, 20, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add blur effect
      ctx.shadowBlur = 15;
      ctx.shadowColor = 'rgba(102, 126, 234, 0.5)';

      for (let i = 0; i < drops.length; i++) {
        // Random binary character
        const text = Math.random() > 0.5 ? '1' : '0';
        
        // Calculate position
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Set font with varying sizes for depth
        const size = fontSize + Math.sin(i) * 4;
        ctx.font = `${size}px monospace`;

        // Vary color between purple and blue
        const colorChoice = Math.random();
        if (colorChoice > 0.7) {
          ctx.fillStyle = `rgba(118, 75, 162, ${opacities[i]})`;
          ctx.shadowColor = 'rgba(118, 75, 162, 0.5)';
        } else if (colorChoice > 0.4) {
          ctx.fillStyle = `rgba(102, 126, 234, ${opacities[i]})`;
          ctx.shadowColor = 'rgba(102, 126, 234, 0.5)';
        } else {
          ctx.fillStyle = `rgba(79, 172, 254, ${opacities[i] * 0.8})`;
          ctx.shadowColor = 'rgba(79, 172, 254, 0.5)';
        }
        
        // Draw the character
        ctx.fillText(text, x, y);

        // Occasional bright character
        if (Math.random() > 0.995) {
          ctx.shadowBlur = 25;
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.fillText(text, x, y);
          ctx.shadowBlur = 15;
        }

        // Reset drop to top when it reaches bottom
        if (y > canvas.height && Math.random() > 0.98) {
          drops[i] = 0;
          opacities[i] = 0.1 + Math.random() * 0.4;
        }

        // Move drop down
        drops[i] += speeds[i];
      }
    };

    // Animation loop
    const interval = setInterval(draw, 60);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="animated-background">
      <canvas ref={canvasRef} className="binary-canvas" />
      
      {/* Overlay gradient for better text readability */}
      <div className="overlay-gradient" />
      
      {/* Large floating binary numbers */}
      <div className="big-binary">
        <span className="big-num num-1">1</span>
        <span className="big-num num-2">0</span>
        <span className="big-num num-3">1</span>
        <span className="big-num num-4">0</span>
        <span className="big-num num-5">1</span>
        <span className="big-num num-6">0</span>
        <span className="big-num num-7">1</span>
        <span className="big-num num-8">0</span>
      </div>
    </div>
  );
};

export default AnimatedBackground;