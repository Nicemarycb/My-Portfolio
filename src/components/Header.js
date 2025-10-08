// src/components/Header.js - Fixed with white name color and corrected mobile dropdown
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaHome, 
  FaUser, 
  FaBriefcase, 
  FaGraduationCap, 
  FaCode, 
  FaProjectDiagram, 
  FaEnvelope,
  FaBars,
  FaTimes,
  FaRocket
} from 'react-icons/fa';

const Header = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { 
      name: 'Home', 
      path: '/', 
      section: 'home', 
      icon: <FaHome />,
    },
    { 
      name: 'About', 
      path: '/about', 
      section: 'about', 
      icon: <FaUser />,
    },
    { 
      name: 'Experience', 
      path: '/experience', 
      section: 'experience', 
      icon: <FaBriefcase />,
    },
    { 
      name: 'Education', 
      path: '/education', 
      section: 'education', 
      icon: <FaGraduationCap />,
    },
    { 
      name: 'Skills', 
      path: '/skills', 
      section: 'skills', 
      icon: <FaCode />,
    },
    { 
      name: 'Projects', 
      path: '/projects', 
      section: 'projects', 
      icon: <FaProjectDiagram />,
    },
    { 
      name: 'Contact', 
      path: '/contact', 
      section: 'contact', 
      icon: <FaEnvelope />,
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      // Update active section based on scroll position
      if (location.pathname === '/') {
        const sections = navItems.map(item => item.section);
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        if (currentSection) {
          setActiveSection(currentSection);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (sectionId) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileOpen(false);
    setActiveSection(sectionId);
  };

  const isActive = (section) => {
    if (location.pathname !== '/') {
      return location.pathname === `/${section}`;
    }
    return activeSection === section;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`header-wrapper ${scrolled ? 'scrolled' : ''}`}
      >
        <Navbar 
          expand="lg" 
          fixed="top" 
          className={`custom-navbar ${scrolled ? 'navbar-scrolled' : ''}`}
          expanded={mobileOpen}
        >
          <Container>
            {/* Brand Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Navbar.Brand 
                as={Link} 
                to="/" 
                className="brand-logo d-flex align-items-center"
                onClick={() => handleNavClick('home')}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                  className="logo-icon me-2"
                >
                  <FaRocket />
                </motion.div>
                <div className="brand-text">
                  <span className="brand-name">Nice Mary C B</span>
                  <span className="brand-title">Full Stack Developer</span>
                </div>
              </Navbar.Brand>
            </motion.div>

            {/* Mobile Toggle Button */}
            <Navbar.Toggle 
              aria-controls="basic-navbar-nav"
              className="custom-toggler"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <motion.div
                animate={mobileOpen ? { rotate: 90 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {mobileOpen ? <FaTimes /> : <FaBars />}
              </motion.div>
            </Navbar.Toggle>

            {/* Navigation Menu */}
            <Navbar.Collapse id="basic-navbar-nav" in={mobileOpen}>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <Nav className="ms-auto custom-nav">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      variants={itemVariants}
                      whileHover={{ y: -2 }}
                      whileTap={{ y: 0 }}
                    >
                      <Nav.Link
                        as={Link}
                        to={item.path}
                        className={`nav-link-custom ${isActive(item.section) ? 'active' : ''}`}
                        onClick={() => handleNavClick(item.section)}
                      >
                        <span className="nav-icon">{item.icon}</span>
                        <span className="nav-text">{item.name}</span>
                        {isActive(item.section) && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="active-indicator"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </Nav.Link>
                    </motion.div>
                  ))}
                </Nav>
              </motion.div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mobile-menu-overlay"
              onClick={() => setMobileOpen(false)}
            />
          </>
        )}
      </AnimatePresence>

      {/* Custom CSS */}
      <style jsx>{`
        .header-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1030;
          transition: all 0.3s ease;
        }
        
        .header-wrapper.scrolled {
          backdrop-filter: blur(20px);
          background: rgba(15, 23, 42, 0.8) !important;
        }
        
        .custom-navbar {
          background: transparent;
          padding: 0.5rem 0;
          transition: all 0.3s ease;
        }
        
        .navbar-scrolled {
          background: rgba(15, 23, 42, 0.95) !important;
          backdrop-filter: blur(20px);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .brand-logo {
          text-decoration: none;
          color: white !important;
          transition: all 0.3s ease;
        }
        
        .brand-logo:hover {
          color: #667eea !important;
        }
        
        .logo-icon {
          font-size: 1.8rem;
          color: #667eea;
        }
        
        .brand-text {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
        }
        
        .brand-name {
          font-size: 1.3rem;
          font-weight: bold;
          color: #ffffff !important; /* Changed to white */
        }
        
        .brand-title {
          font-size: 0.7rem;
          color: #ffffff !important; /* Changed to white */
          font-weight: 500;
        }
        
        .custom-toggler {
          border: none;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 8px 12px;
          color: white;
          font-size: 1.2rem;
        }
        
        .custom-toggler:focus {
          box-shadow: none;
        }
        
        .custom-nav {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        
        .nav-link-custom {
          color: #cbd5e1 !important;
          text-decoration: none;
          padding: 12px 16px !important;
          border-radius: 12px;
          transition: all 0.3s ease;
          position: relative;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 500;
          margin: 0 2px;
        }
        
        .nav-link-custom:hover {
          color: white !important;
          background: rgba(102, 126, 234, 0.1);
          transform: translateY(-2px);
        }
        
        .nav-link-custom.active {
          color: white !important;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .nav-icon {
          font-size: 1rem;
          display: flex;
          align-items: center;
        }
        
        .nav-text {
          font-size: 0.9rem;
        }
        
        .active-indicator {
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 6px;
          background: #10b981;
          border-radius: 50%;
        }
        
        /* Mobile Menu Overlay */
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(5px);
          z-index: 1040;
        }
        
        /* Mobile Responsive Styles */
        @media (max-width: 991.98px) {
          .navbar-collapse {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(15, 23, 42, 0.98);
            backdrop-filter: blur(20px);
            border-radius: 0 0 20px 20px;
            padding: 20px;
            margin-top: 10px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          }
          
          .custom-nav {
            flex-direction: column;
            align-items: stretch;
            gap: 5px;
          }
          
          .nav-link-custom {
            justify-content: flex-start;
            margin: 2px 0;
            padding: 15px 20px !important;
          }
        }
        
        @media (max-width: 576px) {
          .brand-name {
            font-size: 1.1rem;
          }
          
          .brand-title {
            font-size: 0.6rem;
          }
        }
      `}</style>
    </>
  );
};

export default Header;