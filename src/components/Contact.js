// src/pages/Contact.js - Enhanced with Advanced Animations & Design
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Card, Badge } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub,
  FaPaperPlane,
  FaUser,
  FaComment,
  FaCheckCircle,
  FaRocket,
  FaWhatsapp,
  FaDownload
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    subject: '',
    message: '' 
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual emailjs integration)
    setTimeout(() => {
      setStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };
   const handleDownloadPdf = () => {
    const link = document.createElement("a");
    link.href = pdfFilePath;
    link.setAttribute("download", "NiceMary_CB_FullStack_Developer_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
    const pdfFilePath = "/Nicemary CB.pdf";


  const contactInfo = [
    {
      icon: <FaEnvelope className="text-primary" />,
      title: 'Email Address',
      value: 'nicecb0307@gmail.com',
      link: 'mailto:nicecb0307@gmail.com',
      color: 'primary'
    },
    {
      icon: <FaPhone className="text-success" />,
      title: 'Phone Number',
      value: '+91 9188171772',
      link: 'tel:+919188171772',
      color: 'success'
    },
    {
      icon: <FaWhatsapp className="text-success" />,
      title: 'WhatsApp',
      value: '+91 9188171772',
      link: 'https://wa.me/919188171772',
      color: 'success'
    },
    {
      icon: <FaMapMarkerAlt className="text-danger" />,
      title: 'Location',
      value: 'Thrissur, Kerala, India - 680651',
      link: 'https://maps.google.com/?q=Thrissur,Kerala',
      color: 'danger'
    },
    {
      icon: <FaLinkedin className="text-info" />,
      title: 'LinkedIn',
      value: 'Nice Mary C B',
      link: 'https://www.linkedin.com/in/nice-mary-c-b-783170281/',
      color: 'info'
    },
    {
      icon: <FaGithub className="text-dark" />,
      title: 'GitHub',
      value: 'nicemary',
      link: 'https://github.com/nicemary',
      color: 'dark'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const infoVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="page-section bg-gradient-contact">
      <Container>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <h2 className="display-3 fw-bold text-white mb-3">Let's Connect</h2>
          <div className="section-divider mx-auto mb-3"></div>
          <p className="lead text-white-50 mb-4">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="contact-badge"
          >
            <FaRocket className="text-warning me-2" />
            <span className="fw-bold">Available for Opportunities</span>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <Row className="g-5">
            {/* Contact Form */}
            <Col lg={8}>
              <motion.div variants={formVariants}>
                <Card className="glass-card-contact border-0 shadow-lg">
                  <Card.Header className="bg-primary text-white py-4">
                    <h4 className="mb-0 d-flex align-items-center">
                      <FaComment className="me-3" />
                      Send Me a Message
                    </h4>
                  </Card.Header>
                  <Card.Body className="p-4">
                    <AnimatePresence>
                      {status === 'success' && (
                        <motion.div
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                        >
                          <Alert variant="success" className="d-flex align-items-center">
                            <FaCheckCircle className="me-2" />
                            Thank you! Your message has been sent successfully.
                          </Alert>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <Form onSubmit={handleSubmit}>
                      <Row>
                        <Col md={6}>
                          <motion.div variants={itemVariants}>
                            <Form.Group className="mb-4">
                              <Form.Label className="fw-bold text-dark d-flex align-items-center">
                                <FaUser className="me-2 text-primary" />
                                Full Name
                              </Form.Label>
                              <Form.Control 
                                type="text" 
                                value={formData.name} 
                                onChange={(e) => setFormData({...formData, name: e.target.value})} 
                                required 
                                className="rounded-3 form-control-lg border-0 shadow-sm"
                                placeholder="Enter your full name"
                              />
                            </Form.Group>
                          </motion.div>
                        </Col>
                        <Col md={6}>
                          <motion.div variants={itemVariants}>
                            <Form.Group className="mb-4">
                              <Form.Label className="fw-bold text-dark d-flex align-items-center">
                                <FaEnvelope className="me-2 text-primary" />
                                Email Address
                              </Form.Label>
                              <Form.Control 
                                type="email" 
                                value={formData.email} 
                                onChange={(e) => setFormData({...formData, email: e.target.value})} 
                                required 
                                className="rounded-3 form-control-lg border-0 shadow-sm"
                                placeholder="Enter your email address"
                              />
                            </Form.Group>
                          </motion.div>
                        </Col>
                      </Row>

                      <motion.div variants={itemVariants}>
                        <Form.Group className="mb-4">
                          <Form.Label className="fw-bold text-dark">
                            Subject
                          </Form.Label>
                          <Form.Control 
                            type="text" 
                            value={formData.subject} 
                            onChange={(e) => setFormData({...formData, subject: e.target.value})} 
                            required 
                            className="rounded-3 form-control-lg border-0 shadow-sm"
                            placeholder="What is this regarding?"
                          />
                        </Form.Group>
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <Form.Group className="mb-4">
                          <Form.Label className="fw-bold text-dark d-flex align-items-center">
                            <FaComment className="me-2 text-primary" />
                            Your Message
                          </Form.Label>
                          <Form.Control 
                            as="textarea" 
                            rows={6} 
                            value={formData.message} 
                            onChange={(e) => setFormData({...formData, message: e.target.value})} 
                            required 
                            className="rounded-3 form-control-lg border-0 shadow-sm"
                            placeholder="Tell me about your project or inquiry..."
                          />
                        </Form.Group>
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="btn btn-primary btn-lg w-100 rounded-pill fw-bold py-3 border-0 shadow-lg"
                          style={{
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                          }}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="spinner-border spinner-border-sm me-2" role="status">
                                <span className="visually-hidden">Loading...</span>
                              </div>
                              Sending Message...
                            </>
                          ) : (
                            <>
                              <FaPaperPlane className="me-2" />
                              Send Message
                            </>
                          )}
                        </motion.button>
                      </motion.div>
                    </Form>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>

            {/* Contact Information */}
            <Col lg={4}>
              <motion.div variants={infoVariants}>
                <Card className="glass-card-contact border-0 shadow-lg h-100">
                  <Card.Header className="bg-success text-white py-4">
                    <h4 className="mb-0 d-flex align-items-center">
                      <FaEnvelope className="me-3" />
                      Contact Information
                    </h4>
                  </Card.Header>
                  <Card.Body className="p-4">
                    <div className="contact-info-list">
                      {contactInfo.map((info, index) => (
                        <motion.a
                          key={index}
                          href={info.link}
                          target={info.link.startsWith('http') ? '_blank' : '_self'}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                          variants={itemVariants}
                          whileHover={{ x: 10, scale: 1.02 }}
                          className="contact-info-item d-flex align-items-center mb-4 p-3 rounded-3 text-decoration-none"
                          style={{ 
                            background: 'rgba(255, 255, 255, 0.05)',
                            borderLeft: `4px solid var(--bs-${info.color})`
                          }}
                        >
                          <div className={`contact-icon bg-${info.color} bg-opacity-10 me-3`}>
                            {info.icon}
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="fw-bold text-dark mb-1">{info.title}</h6>
                            <p className="text-muted mb-0 small">{info.value}</p>
                          </div>
                        </motion.a>
                      ))}
                    </div>

                    {/* Resume Download */}
                   <motion.div
  variants={itemVariants}
  className="text-center mt-4 pt-3"
  style={{ borderTop: '1px solid rgba(0,0,0,0.1)' }}
>
  <h6 className="fw-bold text-dark mb-3">Download Resume</h6>
  <motion.a
    onClick={handleDownloadPdf}
    download="NiceMary_CB_FullStack_Developer_Resume.pdf"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="btn btn-outline-primary btn-lg rounded-pill px-4"
  >
    <FaDownload className="me-2" />
    Download Resume PDF
  </motion.a>
</motion.div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </motion.div>

        {/* Quick Response Promise */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-5"
        >
          <Card className="glass-card-cta border-0 shadow-lg">
            <Card.Body className="p-5">
              <Row className="align-items-center">
                <Col md={8}>
                  <h4 className="fw-bold text-white mb-2">Quick Response Guaranteed</h4>
                  <p className="text-white-50 mb-0">
                    I typically respond to all messages within 24 hours. Let's start a conversation!
                  </p>
                </Col>
                <Col md={4} className="text-md-end">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a 
                      href="mailto:nicecb0307@gmail.com" 
                      className="btn btn-light btn-lg rounded-pill px-4 fw-bold"
                    >
                      <FaEnvelope className="me-2" />
                      Email Now
                    </a>
                  </motion.div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </motion.div>
      </Container>

      {/* Custom CSS */}
      <style jsx>{`
        .bg-gradient-contact {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 80px 0;
          position: relative;
          overflow: hidden;
        }
        
        .bg-gradient-contact::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%);
        }
        
        .glass-card-contact {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          transition: all 0.3s ease;
        }
        
        .glass-card-contact:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;
        }
        
        .contact-badge {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 50px;
          padding: 10px 20px;
          display: inline-flex;
          align-items: center;
          color: white;
        }
        
        .contact-info-item {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .contact-info-item:hover {
          background: rgba(255, 255, 255, 0.1) !important;
          text-decoration: none;
        }
        
        .contact-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }
        
        .form-control {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        
        .form-control:focus {
          background: rgba(255, 255, 255, 0.95);
          border-color: #667eea;
          box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
        }
        
        .glass-card-cta {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .contact-info-list {
          max-height: 400px;
          overflow-y: auto;
        }
        
        .contact-info-list::-webkit-scrollbar {
          width: 6px;
        }
        
        .contact-info-list::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 10px;
        }
        
        .contact-info-list::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 10px;
        }
        
        .contact-info-list::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.3);
        }
        
        @media (max-width: 768px) {
          .bg-gradient-contact {
            padding: 60px 0;
          }
          
          .display-3 {
            font-size: 2.5rem;
          }
          
          .glass-card-contact {
            margin-bottom: 30px;
          }
          
          .contact-info-item {
            padding: 15px !important;
          }
          
          .contact-icon {
            width: 40px;
            height: 40px;
            font-size: 1rem;
          }
        }
        
        @media (max-width: 576px) {
          .btn-lg {
            padding: 12px 24px;
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;