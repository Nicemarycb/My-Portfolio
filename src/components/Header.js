// src/components/Header.js - White Header with Larger Text
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
          sticky="top" 
          className={`custom-navbar ${scrolled ? 'navbar-scrolled' : ''}`}
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

            {/* Desktop Navigation */}
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

            <Navbar.Collapse id="basic-navbar-nav">
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
                        {item.badge && (
                          <Badge 
                            bg={item.section === 'contact' ? 'success' : 'primary'} 
                            className="nav-badge"
                          >
                            {item.badge}
                          </Badge>
                        )}
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
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="mobile-menu"
            >
              <div className="mobile-menu-header">
                <h5>Navigation</h5>
                <button 
                  className="close-menu"
                  onClick={() => setMobileOpen(false)}
                >
                  <FaTimes />
                </button>
              </div>
              <div className="mobile-nav-items">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`mobile-nav-item ${isActive(item.section) ? 'active' : ''}`}
                      onClick={() => handleNavClick(item.section)}
                    >
                      <span className="mobile-nav-icon">{item.icon}</span>
                      <span className="mobile-nav-text">{item.name}</span>
                      {item.badge && (
                        <Badge 
                          bg={item.section === 'contact' ? 'success' : 'primary'} 
                          className="mobile-nav-badge"
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
          background: rgba(255, 255, 255, 0.95) !important;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }
        
        .custom-navbar {
          background: white !important;
          padding: 0.8rem 0;
          transition: all 0.3s ease;
          border-bottom: 1px solid #e9ecef;
        }
        
        .navbar-scrolled {
          background: rgba(255, 255, 255, 0.98) !important;
          backdrop-filter: blur(20px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }
        
        .brand-logo {
          text-decoration: none;
          color: #2d3748 !important;
          transition: all 0.3s ease;
        }
        
        .brand-logo:hover {
          color: #667eea !important;
        }
        
        .logo-icon {
          font-size: 2rem;
          color: #667eea;
        }
        
        .brand-text {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
        }
        
        .brand-name {
          font-size: 1.5rem;
          font-weight: bold;
          color: #2d3748;
        }
        
        .brand-title {
          font-size: 0.85rem;
          color: #718096;
          font-weight: 500;
        }
        
        .custom-toggler {
          border: none;
          background: #f7fafc;
          border-radius: 10px;
          padding: 10px 14px;
          color: #4a5568;
          font-size: 1.3rem;
          border: 1px solid #e2e8f0;
        }
        
        .custom-toggler:focus {
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }
        
        .custom-toggler:hover {
          background: #edf2f7;
        }
        
        .custom-nav {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .nav-link-custom {
          color: #4a5568 !important;
          text-decoration: none;
          padding: 14px 20px !important;
          border-radius: 12px;
          transition: all 0.3s ease;
          position: relative;
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          margin: 0 3px;
          font-size: 1rem;
        }
        
        .nav-link-custom:hover {
          color: #2d3748 !important;
          background: #f7fafc;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .nav-link-custom.active {
          color: white !important;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }
        
        .nav-icon {
          font-size: 1.2rem;
          display: flex;
          align-items: center;
        }
        
        .nav-text {
          font-size: 1rem;
          font-weight: 600;
        }
        
        .nav-badge {
          font-size: 0.7rem;
          padding: 4px 8px;
          border-radius: 12px;
          font-weight: 600;
        }
        
        .active-indicator {
          position: absolute;
          bottom: -6px;
          left: 50%;
          transform: translateX(-50%);
          width: 8px;
          height: 8px;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(16, 185, 129, 0.4);
        }
        
        /* Mobile Menu Styles */
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
        
        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 320px;
          background: white;
          z-index: 1050;
          padding: 25px;
          border-left: 1px solid #e2e8f0;
          box-shadow: -4px 0 20px rgba(0, 0, 0, 0.1);
        }
        
        .mobile-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 2px solid #f7fafc;
        }
        
        .mobile-menu-header h5 {
          color: #2d3748;
          margin: 0;
          font-size: 1.3rem;
          font-weight: bold;
        }
        
        .close-menu {
          background: #f7fafc;
          border: 1px solid #e2e8f0;
          color: #4a5568;
          font-size: 1.3rem;
          padding: 8px;
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        
        .close-menu:hover {
          background: #edf2f7;
          color: #2d3748;
        }
        
        .mobile-nav-items {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .mobile-nav-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 18px 20px;
          color: #4a5568;
          text-decoration: none;
          border-radius: 12px;
          transition: all 0.3s ease;
          position: relative;
          font-weight: 600;
          font-size: 1.1rem;
          border: 1px solid transparent;
        }
        
        .mobile-nav-item:hover {
          color: #2d3748;
          background: #f7fafc;
          border-color: #e2e8f0;
          transform: translateX(5px);
        }
        
        .mobile-nav-item.active {
          color: white;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-color: #667eea;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }
        
        .mobile-nav-icon {
          font-size: 1.3rem;
          width: 24px;
          display: flex;
          justify-content: center;
        }
        
        .mobile-nav-text {
          flex: 1;
          font-weight: 600;
          font-size: 1.1rem;
        }
        
        .mobile-nav-badge {
          font-size: 0.75rem;
          padding: 4px 10px;
          font-weight: 600;
        }
        
        @media (max-width: 991.98px) {
          .navbar-collapse {
            background: white;
            border-radius: 0 0 20px 20px;
            padding: 20px;
            margin-top: 15px;
            border: 1px solid #e2e8f0;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          }
          
          .custom-nav {
            flex-direction: column;
            align-items: stretch;
            gap: 8px;
          }
          
          .nav-link-custom {
            justify-content: flex-start;
            margin: 4px 0;
            font-size: 1.1rem;
            padding: 16px 20px !important;
          }
        }
        
        @media (max-width: 576px) {
          .brand-name {
            font-size: 1.3rem;
          }
          
          .brand-title {
            font-size: 0.75rem;
          }
          
          .mobile-menu {
            width: 280px;
          }
          
          .nav-link-custom {
            font-size: 1rem;
            padding: 14px 18px !important;
          }
        }
      `}</style>
    </>
  );
};

export default Header;