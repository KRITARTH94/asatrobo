import React, { useEffect, useRef } from 'react';
import { Cpu, Briefcase, Settings2, ShieldCheck, Users } from 'lucide-react';
import { useTilt } from '../../hooks/useTilt';
import './Hero.css';

const highlights = [
  { icon: Cpu, label: 'IIT Kanpur Incubated', desc: 'Deep aerospace R&D roots' },
  { icon: Briefcase, label: 'IIM Kozhikode (IIMK) Incubated', desc: 'Business & startup mentorship' },
  { icon: Settings2, label: '100% Custom Builds', desc: 'Engineered to your mission' },
  { icon: ShieldCheck, label: 'Drone as a Service', desc: 'Reliable DaaS operations' },
  { icon: Users, label: 'Industry Veterans', desc: 'Years of aerospace experience' },
];

const Hero = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const content = contentRef.current;
    if (!hero || !content) return;

    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;
      const mouseX = relX * 8;
      const mouseY = relY * -8;
      content.style.transform = `rotateX(${-mouseY * 0.4}deg) rotateY(${-mouseX * 0.4}deg)`;
    };

    const handleMouseLeave = () => {
      content.style.transform = 'rotateX(0deg) rotateY(0deg)';
    };

    hero.addEventListener('mousemove', handleMouseMove);
    hero.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
      hero.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <section className="hero" id="home" ref={heroRef}>
        <div className="container hero-container" ref={contentRef}>
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="highlight">Manufacturing UAV's and</span> <br />
              Providing DAAS
            </h1>
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
