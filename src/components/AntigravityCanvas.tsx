import { useEffect, useRef } from "react";

const ICONS = [
  // Medical
  "🧬", "🩺", "💊", "🧠", "❤️", "🔬", "🏥", "💉",
  // Tech/AI
  "⚡", "🤖", "📊", "🧮", "💻", "🔗", "⚙️", "📡",
];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  icon: string;
  size: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
}

const AntigravityCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    // Initialize particles
    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;
    const count = Math.min(35, Math.floor((w * h) / 15000));

    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: -(Math.random() * 0.3 + 0.15), // float upward
      icon: ICONS[Math.floor(Math.random() * ICONS.length)],
      size: Math.random() * 16 + 14,
      opacity: Math.random() * 0.4 + 0.15,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.01,
    }));

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      const cw = canvas.offsetWidth;
      const ch = canvas.offsetHeight;
      ctx.clearRect(0, 0, cw, ch);

      const mouse = mouseRef.current;

      for (const p of particlesRef.current) {
        // Mouse repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          p.vx += (dx / dist) * force * 0.3;
          p.vy += (dy / dist) * force * 0.3;
        }

        // Gentle upward drift (antigravity)
        p.vy -= 0.002;

        // Damping
        p.vx *= 0.995;
        p.vy *= 0.995;

        // Clamp speed
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 2) {
          p.vx = (p.vx / speed) * 2;
          p.vy = (p.vy / speed) * 2;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;

        // Wrap around
        if (p.y < -40) p.y = ch + 40;
        if (p.y > ch + 40) p.y = -40;
        if (p.x < -40) p.x = cw + 40;
        if (p.x > cw + 40) p.x = -40;

        // Draw
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.opacity;
        ctx.font = `${p.size}px serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(p.icon, 0, 0);
        ctx.restore();
      }

      // Draw faint connection lines between nearby particles
      ctx.strokeStyle = "rgba(139, 21, 56, 0.06)";
      ctx.lineWidth = 1;
      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const ddx = particles[i].x - particles[j].x;
          const ddy = particles[i].y - particles[j].y;
          const d = Math.sqrt(ddx * ddx + ddy * ddy);
          if (d < 150) {
            ctx.globalAlpha = (1 - d / 150) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "auto" }}
    />
  );
};

export default AntigravityCanvas;
