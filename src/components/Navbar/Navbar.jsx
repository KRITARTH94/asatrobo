import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    {
      name: 'Custom Drones',
      href: '/#drones',
      dropdown: [
        { name: 'Fixed Wing', href: '/products/fixed-wing' },
        { name: 'VTOL', href: '/products/vtol' },
        { name: 'FPV', href: '/products/fpv' },
        { name: 'ASAT Agri Drone', href: '/products/agri-drone' }
      ]
    },
    { 
      name: 'Services', 
      href: '/#services',
      dropdown: [
        { name: 'AgriDrones', href: '/services/agriculture' },
        { name: 'Solar Power', href: '/services/solar-power' },
        { name: 'Agriculture', href: '/services/agriculture' },
        { name: 'Building Inspection', href: '/services/building-inspection' },
        { name: 'Oil & Gas', href: '/services/flare-and-chimney' }
      ]
    },
    { name: 'Jobs', href: '/jobs' },
    { name: 'Contact Us', href: '/#contact' },
  ];

  const toggleMobileDropdown = (name) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="logo-link">
            <img
              src="https://static.wixstatic.com/media/7177f3_cef1291d90f24c189b686d3c8c51f0f1~mv2.png"
              alt="ASATRobo"
              className="logo-img"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-links desktop-only">
          <ul>
            {navLinks.map((link, index) => (
              <li key={index} className={link.dropdown ? 'has-dropdown' : ''}>
                <Link to={link.href} className="nav-item">
                  {link.name}
                  {link.dropdown && <ChevronDown size={14} className="dropdown-icon" />}
                </Link>
                
                {link.dropdown && (
                  <ul className="dropdown-menu">
                    {link.dropdown.map((sublink, subIndex) => (
                      <li key={subIndex}>
                        <Link to={sublink.href}>{sublink.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Link to="/#book" className="btn btn-primary btn-book">Book Online</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-btn mobile-only"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index} className="mobile-nav-item">
              <div 
                className="mobile-nav-header"
                onClick={() => link.dropdown ? toggleMobileDropdown(link.name) : setIsMobileMenuOpen(false)}
              >
                <Link to={link.dropdown ? '#' : link.href} onClick={!link.dropdown ? () => setIsMobileMenuOpen(false) : undefined}>
                  {link.name}
                </Link>
                {link.dropdown && <ChevronDown size={18} className={activeDropdown === link.name ? 'rotate' : ''} />}
              </div>
              
              {link.dropdown && (
                <ul className={`mobile-dropdown ${activeDropdown === link.name ? 'open' : ''}`}>
                  {link.dropdown.map((sublink, subIndex) => (
                    <li key={subIndex}>
                      <Link 
                        to={sublink.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {sublink.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li>
            <Link 
              to="/#book" 
              className="btn btn-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Online
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
