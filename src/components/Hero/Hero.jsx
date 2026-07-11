import React, { useEffect, useRef } from 'react';
import { Cpu, Settings2, ShieldCheck, Users } from 'lucide-react';
import { useTilt } from '../../hooks/useTilt';
import heroVideo from '../../assets/hero-drone-field.mp4';
import './Hero.css';

const highlights = [
  { icon: Cpu, label: 'IIT Kanpur Incubated', desc: 'Deep aerospace R&D roots' },
  { icon: Settings2, label: '100% Custom Builds', desc: 'Engineered to your mission' },
  { icon: ShieldCheck, label: 'Drone as a Service', desc: 'Reliable DaaS operations' },
  { icon: Users, label: 'Industry Veterans', desc: 'Years of aerospace experience' },
];

const Hero = () => {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const bg = bgRef.current;
    const content = contentRef.current;
    if (!hero || !bg || !content) return;

    let mouseX = 0;
    let mouseY = 0;
    let rafId;

    // Continuous loop drives a slow "Ken Burns" breathing zoom on the
    // background so it always feels alive, layered with the interactive
    // mouse-tilt and scroll parallax.
    const loop = (timestamp) => {
      const zoom = 1.12 + 0.05 * (0.5 + 0.5 * Math.sin(timestamp * 0.00012));
      const scrollOffset = window.scrollY * 0.3;
      bg.style.transform = `translate3d(0, ${scrollOffset}px, 0) scale(${zoom}) rotateX(${mouseY}deg) rotateY(${mouseX}deg)`;
      content.style.transform = `rotateX(${-mouseY * 0.4}deg) rotateY(${-mouseX * 0.4}deg)`;
      rafId = requestAnimationFrame(loop);
    };

    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = relX * 8;
      mouseY = relY * -8;
    };

    const handleMouseLeave = () => {
      mouseX = 0;
      mouseY = 0;
    };

    hero.addEventListener('mousemove', handleMouseMove);
    hero.addEventListener('mouseleave', handleMouseLeave);
    rafId = requestAnimationFrame(loop);

    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
      hero.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <section className="hero" id="home" ref={heroRef}>
        <video
          className="hero-bg"
          ref={bgRef}
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="hero-overlay"></div>
        <div className="container hero-container" ref={contentRef}>
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="highlight">Get your own</span> <br />
              Customized Multicopters
            </h1>
            <p className="hero-subtitle" style={{ textAlign: 'justify' }}>
              We are an IIT Kanpur incubated company, engaged in making Unmanned Aerial Vehicle (UAV) and its subsystems. We design custom drones and give integration support. We also provide reliable DaaS(Drone as a Service) to our customers. The company is made up of industry veterans who have years of experience in the aerospace field.
            </p>
            <div className="hero-actions">
              <a href="#drones" className="btn btn-primary">Explore Our Drones</a>
              <a href="#contact" className="btn btn-outline hero-btn-outline">Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      <div className="hero-highlights">
        <div className="container hero-highlights-grid">
          {highlights.map((item, index) => (
            <HighlightCard item={item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

const HighlightCard = ({ item }) => {
  const Icon = item.icon;
  const tiltRef = useTilt({ max: 6, scale: 1.02 });

  return (
    <div className="highlight-card tilt-card" ref={tiltRef}>
      <div className="highlight-icon"><Icon size={22} /></div>
      <div>
        <h4>{item.label}</h4>
        <p>{item.desc}</p>
      </div>
      <span className="tilt-glare"></span>
    </div>
  );
};

export default Hero;
