// src/components/Footer.js - Enhanced with Advanced Animations & Design
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { 
  FaLinkedin, 
  FaGithub, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaHeart,
  FaRocket,
  FaDownload,
  FaWhatsapp,
  FaArrowUp
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/nice-mary-c-b-783170281/',
      label: 'LinkedIn',
      color: '#0077b5'
    },
    {
      icon: <FaGithub />,
      url: 'https://github.com/nicemary',
      label: 'GitHub',
      color: '#333'
    },
    {
      icon: <FaEnvelope />,
      url: 'mailto:nicecb0307@gmail.com',
      label: 'Email',
      color: '#ea4335'
    },
    {
      icon: <FaWhatsapp />,
      url: 'https://wa.me/919188171772',
      label: 'WhatsApp',
      color: '#25d366'
    }
  ];

  const quickLinks = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Experience', path: '#experience' },
    { name: 'Skills', path: '#skills' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contact', path: '#contact' }
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      text: 'nicecb0307@gmail.com',
      link: 'mailto:nicecb0307@gmail.com'
    },
    {
      icon: <FaPhone />,
      text: '+91 9188171772',
      link: 'tel:+919188171772'
    },
    {
      icon: <FaMapMarkerAlt />,
      text: 'Thrissur, Kerala, India - 680651',
      link: 'https://maps.google.com/?q=Thrissur,Kerala'
    }
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="bg-gradient-footer text-white position-relative">
      {/* Background Pattern */}
      <div className="footer-pattern"></div>
      
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Row className="g-4 py-5">
            {/* Brand Section */}
            <Col lg={4} md={6} className="mb-4">
              <motion.div variants={itemVariants} className="h-100">
                <div className="brand-section">
                  <motion.h3 
                    className="fw-bold mb-3 brand-name"
                    whileHover={{ scale: 1.05 }}
                  >
                    Nice Mary C B
                  </motion.h3>
                  <p className="text-white-60 mb-4">
                    Full Stack Developer specializing in MERN/MEAN stack, 
                    passionate about creating innovative web solutions that 
                    drive business impact.
                  </p>
                  
                  {/* Social Links */}
                  <div className="social-links">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        variants={itemVariants}
                        whileHover={{ 
                          scale: 1.2, 
                          y: -5,
                          color: social.color
                        }}
                        whileTap={{ scale: 0.9 }}
                        className="social-link"
                        style={{ '--social-color': social.color }}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Col>

            {/* Quick Links */}
            <Col lg={2} md={6} className="mb-4">
              <motion.div variants={itemVariants} className="h-100">
                <h5 className="fw-bold mb-3 section-title text-dark">Quick Links</h5>
                <ul className="footer-links list-unstyled">
                  {quickLinks.map((link, index) => (
                    <motion.li key={index} variants={itemVariants}>
                      <motion.a
                        href={link.path}
                        className="footer-link"
                        whileHover={{ x: 5, color: '#667eea' }}
                      >
                        {link.name}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </Col>

            {/* Contact Info */}
            <Col lg={3} md={6} className="mb-4">
              <motion.div variants={itemVariants} className="h-100">
                <h5 className="fw-bold mb-3 section-title text-dark">Get In Touch</h5>
                <div className="contact-info">
                  {contactInfo.map((contact, index) => (
                    <motion.a
                      key={index}
                      href={contact.link}
                      variants={itemVariants}
                      whileHover={{ x: 5, color: '#667eea' }}
                      className="contact-item d-flex align-items-center mb-3 text-white-60 text-decoration-none"
                    >
                      <span className="contact-icon me-3">
                        {contact.icon}
                      </span>
                      <span className="contact-text small">{contact.text}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </Col>

            {/* Call to Action */}
            <Col lg={3} md={6} className="mb-4">
              <motion.div variants={itemVariants} className="h-100">
                <h5 className="fw-bold mb-3 section-title text-dark">Let's Work Together</h5>
                <p className="text-white-60 mb-4 small">
                  Ready to start your next project? Let's connect and build something amazing!
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.a
                    href="#contact"
                    className="btn btn-primary btn-sm rounded-pill px-4 fw-bold d-inline-flex align-items-center"
                    whileHover={{ 
                      boxShadow: '0 10px 25px rgba(102, 126, 234, 0.3)'
                    }}
                  >
                    <FaRocket className="me-2" />
                    Start Project
                  </motion.a>
                </motion.div>

                {/* Resume Download */}
                <motion.div
                  variants={itemVariants}
                  className="mt-3"
                >
                  <motion.a
                    href="/resume/Nicemary_CB_Resume.pdf"
                    download="NiceMary_CB_FullStack_Developer_Resume.pdf"
                   className="btn btn-primary btn-sm rounded-pill px-4 fw-bold d-inline-flex align-items-center"
                    whileHover={{ 
                      boxShadow: '0 10px 25px rgba(102, 126, 234, 0.3)'
                    }}
                    
                  >
                    <FaDownload className="me-2" />
                    Resume
                  </motion.a>
                </motion.div>
              </motion.div>
            </Col>
          </Row>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="footer-bottom pt-4 border-top border-white-10"
        >
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start mb-2 mb-md-0">
              <p className="mb-0 text-white-60 small">
                &copy; {currentYear} Nice Mary C B. Made with{' '}
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-heart"
                >
                  <FaHeart />
                </motion.span>{' '}
                and lots of code.
              </p>
            </Col>
            <Col md={6} className="text-center text-md-end">
              <motion.button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="back-to-top btn btn-outline-light btn-sm rounded-pill px-3"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaArrowUp className="me-1" />
                Back to Top
              </motion.button>
            </Col>
          </Row>
        </motion.div>
      </Container>

      {/* Custom CSS */}
      <style jsx>{`
        .bg-gradient-footer {
          background: linear-gradient(135deg, #ffffffff 0%, #ddecf6ff 100%);
          position: relative;
          overflow: hidden;
        }
        
        .footer-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(19, 17, 17, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(7, 6, 6, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }
        
        .brand-name {
          font-size: 1.8rem;
          background: linear-gradient(135deg, #010101ff, #000000ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .text-white-60 {
          color: rgba(0, 0, 0, 0.8) !important;
        }
        
        .border-white-10 {
          border-color: rgba(0, 0, 0, 0.1) !important;
        }
        
        .social-links {
          display: flex;
          gap: 15px;
        }
        
        .social-link {
          color: rgba(0, 0, 0, 0.7);
          font-size: 1.5rem;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
        }
        
        .social-link:hover {
          color: var(--social-color) !important;
          background: rgba(0, 0, 0, 0.2);
          text-decoration: none;
        }
        
        .section-title {
          position: relative;
          padding-bottom: 10px;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          border-radius: 1px;
        }
        
        .footer-links {
          line-height: 2.2;
        }
        
        .footer-link {
          color: rgba(0, 0, 0, 0.7);
          text-decoration: none;
          transition: all 0.3s ease;
          display: block;
        }
        
        .footer-link:hover {
          color: #667eea;
          text-decoration: none;
        }
        
        .contact-item {
          transition: all 0.3s ease;
        }
        
        .contact-item:hover {
          text-decoration: none;
          color: #08123fff !important;
        }
        
        .contact-icon {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          flex-shrink: 0;
        }
        
        .text-heart {
          color: #e74c3c;
          display: inline-block;
        }
        
        .back-to-top {
          border-color: rgba(0, 0, 0, 0.3);
          color: rgba(0, 0, 0, 0.8);
          transition: all 0.3s ease;
        }
        
        .back-to-top:hover {
          border-color: #667eea;
          background: #667eea;
          color: white;
        }
        
        .brand-section p {
          line-height: 1.6;
        }
        
        @media (max-width: 768px) {
          .brand-name {
            font-size: 1.5rem;
          }
          
          .social-link {
            width: 45px;
            height: 45px;
            font-size: 1.3rem;
          }
          
          .section-title {
            font-size: 1.1rem;
          }
          
          .footer-bottom {
            text-align: center;
          }
        }
        
        @media (max-width: 576px) {
          .social-links {
            justify-content: center;
          }
          
          .footer-links {
            text-align: center;
          }
          
          .contact-info {
            text-align: center;
          }
          
          .contact-item {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;