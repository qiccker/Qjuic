import { useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

/* ============================================
   CANVAS GENERATIVE PARTICLE FIELD
   Electric lime particles against the void
   ============================================ */
function ParticleCanvas() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  const PARTICLE_COUNT = 80;
  const CONNECTION_DISTANCE = 120;
  const MOUSE_RADIUS = 150;

  const initParticles = useCallback((width, height) => {
    const particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }
    return particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.parentElement.offsetWidth;
    let height = canvas.parentElement.offsetHeight;

    const setSize = () => {
      width = canvas.parentElement.offsetWidth;
      height = canvas.parentElement.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };

    setSize();
    particlesRef.current = initParticles(width, height);

    const onMouse = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      // Update & draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Mouse repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
          p.vx += (dx / dist) * force * 0.02;
          p.vy += (dy / dist) * force * 0.02;
        }

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Damping
        p.vx *= 0.999;
        p.vy *= 0.999;

        // Wrap edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(204, 255, 0, ${p.opacity})`;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const cdx = p.x - p2.x;
          const cdy = p.y - p2.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);

          if (cdist < CONNECTION_DISTANCE) {
            const alpha = (1 - cdist / CONNECTION_DISTANCE) * 0.12;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(204, 255, 0, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('mousemove', onMouse);
    window.addEventListener('resize', () => {
      setSize();
      particlesRef.current = initParticles(width, height);
    });

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('mousemove', onMouse);
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
}

/* ============================================
   HERO COMPONENT
   ============================================ */
export default function Hero() {
  const navigate = useNavigate();

  const go = (target) => {
    if (target.startsWith('/')) {
      navigate(target);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[100vh] flex items-center pt-20 pb-20 overflow-hidden" id="hero">
      {/* Generative particle canvas */}
      <ParticleCanvas />

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none bg-[size:50px_50px]" 
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)'
        }}
        aria-hidden="true"
      ></div>

      {/* Status bar */}
      <div className="absolute top-0 left-0 w-full py-6 border-b border-border-dim z-20 font-mono text-[0.8rem] text-text-secondary uppercase tracking-wider max-md:hidden">
        <div className="max-w-[1400px] w-full px-8 mx-auto flex justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-juice shadow-[0_0_12px_theme(colors.juice)] animate-pulse"></span>
            Available for Projects
          </div>
          <div>
            Based in India — Working Globally
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] w-full px-8 mx-auto relative z-20 flex flex-col items-center">
        <div className="w-full flex flex-col items-center text-center">
          <div className="font-mono text-juice mb-6 uppercase tracking-[0.15em] text-[0.85rem]">
            Web Developer &amp; Designer
          </div>
          <h1 className="font-display text-[clamp(2.5rem,8vw,7.5rem)] font-extrabold leading-[1.05] tracking-[-0.02em] uppercase mb-10 max-w-[1000px] mx-auto drop-shadow-lg">
            <span className="block overflow-hidden pb-[0.2em] -mb-[0.2em] pr-[0.2em] -mr-[0.2em]">
              <span className="block animate-[fade-up_1s_cubic-bezier(0.16,1,0.3,1)_backwards] text-text-primary" style={{ animationDelay: '0.1s' }}>Digital</span>
            </span>
            <span className="block overflow-hidden pb-[0.2em] -mb-[0.2em] pr-[0.2em] -mr-[0.2em]">
              <span className="block animate-[fade-up_1s_cubic-bezier(0.16,1,0.3,1)_backwards] text-juice [text-shadow:0_0_100px_rgba(204,255,0,0.3)]" style={{ animationDelay: '0.3s' }}>Experiences</span>
            </span>
            <span className="block overflow-hidden pb-[0.2em] -mb-[0.2em] pr-[0.2em] -mr-[0.2em]">
              <span className="block animate-[fade-up_1s_cubic-bezier(0.16,1,0.3,1)_backwards] text-transparent [-webkit-text-stroke:2px_theme(colors.text-primary)]" style={{ animationDelay: '0.5s' }}>Crafted.</span>
            </span>
          </h1>
          
          <div className="flex flex-col items-center border-t border-border-dim pt-10 mt-4 w-full max-w-[800px] max-md:border-t-0 max-md:pt-0">
            <p className="font-mono text-text-secondary leading-relaxed mb-8 max-w-[600px] mx-auto text-center">
              Transforming raw ideas into high-impact digital products.
              Specializing in brutalist web design, reactive interfaces,
              and brand identities that refuse to blend in.
            </p>
            <div className="flex gap-4 max-md:flex-col w-full justify-center">
              <button className="btn-juice justify-center max-md:w-full" onClick={() => go('pricing')}>
                View Charges <span>→</span>
              </button>
              <button className="btn-ghost justify-center max-md:w-full" onClick={() => go('/work')}>
                Selected Works
              </button>
            </div>
            
            <div className="flex flex-col items-center gap-4 max-md:hidden mt-16">
              <span className="font-mono text-[0.7rem] text-text-muted uppercase tracking-widest rotate-90 origin-bottom translate-y-[-20px]">Scroll</span>
              <div className="w-[1px] h-[60px] bg-border-dim relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-juice animate-[scroll-down_2s_infinite]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
