import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const SpaceBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Create stars
    const createStars = (count: number) => {
      const stars = [];
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          opacity: Math.random(),
          speed: Math.random() * 0.05
        });
      }
      return stars;
    };
    
    // Create nebulas
    const createNebulas = (count: number) => {
      const nebulas = [];
      for (let i = 0; i < count; i++) {
        nebulas.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: 50 + Math.random() * 100,
          color: i % 2 === 0 ? 
            (theme === 'dark' ? '#4f4fe4' : '#8096f8') : 
            (theme === 'dark' ? '#0cb1da' : '#27cef1'),
          opacity: 0.03 + Math.random() * 0.05,
          speed: 0.1 + Math.random() * 0.3
        });
      }
      return nebulas;
    };
    
    // Initial setup
    setCanvasDimensions();
    let stars = createStars(300);
    let nebulas = createNebulas(5);
    
    // Animate stars and nebulas
    let animationFrameId: number;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw nebulas
      nebulas.forEach(nebula => {
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          nebula.x, nebula.y, 0,
          nebula.x, nebula.y, nebula.radius
        );
        gradient.addColorStop(0, `${nebula.color}${Math.floor(nebula.opacity * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.arc(nebula.x, nebula.y, nebula.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Move nebulas
        nebula.y += nebula.speed;
        
        // Reset position if off screen
        if (nebula.y > canvas.height + nebula.radius) {
          nebula.y = -nebula.radius;
          nebula.x = Math.random() * canvas.width;
        }
      });
      
      // Draw stars
      stars.forEach(star => {
        ctx.beginPath();
        const starOpacity = 0.5 + Math.sin(Date.now() * 0.001 * star.speed) * 0.5;
        ctx.fillStyle = theme === 'dark' 
          ? `rgba(255, 255, 255, ${star.opacity * starOpacity})` 
          : `rgba(255, 255, 255, ${star.opacity * starOpacity * 0.5})`;
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Move stars
        star.y += star.speed;
        
        // Reset position if off screen
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      setCanvasDimensions();
      stars = createStars(300);
      nebulas = createNebulas(5);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-80 dark:opacity-100 transition-opacity duration-300"
    />
  );
};

export default SpaceBackground;