// src/pages/About.js - Enhanced About Page with Resume Content
import React from 'react';
import { Container, Row, Col, ProgressBar, Card, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaCode,
  FaLightbulb, 
  FaRocket, 
  FaUser, 
  FaAward, 
  FaGraduationCap,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBriefcase,
  FaCheckCircle,
  FaMap } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const About = () => {
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skills = [
    { name: 'React.js', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'MongoDB', level: 80 },
    { name: 'JavaScript', level: 95 },
    { name: 'TypeScript', level: 75 },
    { name: 'Angular', level: 70 },
    { name: 'Express.js', level: 85 },
    { name: 'Bootstrap', level: 90 }
  ];

const personalInfo = [
  { 
    label: 'Email', 
    value: 'nicecb0307@gmail.com',
    icon: 'email'
  },
  { 
    label: 'Phone', 
    value: '+91 9188171772',
    icon: 'phone'
  },
  { 
    label: 'Address', 
    value: 'Chittilappily House, Madakkathra PO, Near Aal, Thrissur, Kerala - 680651',
    icon: 'address'
  },
  { 
    label: 'Experience', 
    value: '1 Years in Full Stack Development',
    icon: 'experience'
  },
  { 
    label: 'Education', 
    value: 'Master of Computer Application',
    icon: 'education'
  },
  { 
    label: 'Status', 
    value: 'Available for Opportunities',
    icon: 'status'
  }
];
  return (
    <section id="about" className="page-section bg-gradient-primary">
      <Container>
        {/* Main Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <h2 className="display-3 fw-bold text-white mb-3">About Me</h2>
          <div className="section-divider mx-auto"></div>
          <p className="lead text-white-50">Full Stack Developer | MERN/MEAN Expert | Problem Solver</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Bio Section */}
          <Row className="mb-5">
            <Col lg={12}>
              <motion.div variants={itemVariants}>
                <Card className="glass-card-advanced p-4 border-0 shadow-lg">
                  <Card.Body className="p-4">
                    <Row className="align-items-center">
                      <Col md={2} className="text-center mb-4 mb-md-0">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                       
                        >
                         
                        </motion.div>
                      </Col>
                      <Col md={10}>
                        <h3 className="fw-bold text-primary mb-3">Professional Summary</h3>
                        <p className="lead fs-6 lh-lg text-dark mb-4">
                          Results-Driven Full Stack Developer specializing in the MERN/MEAN stack with a proven ability 
                          to architect and deliver scalable, full-cycle web applications. Expert in building responsive 
                          front-end interfaces with React.js and AngularJS, and developing high-performance back-end 
                          services using Node.js, Express.js, and MongoDB. A collaborative team player passionate about 
                          leveraging cutting-edge technology to create user-centric solutions that drive business impact.
                        </p>
                        <div className="d-flex flex-wrap gap-2">
                          <Badge bg="primary" className="fs-6 px-3 py-2">MERN Stack</Badge>
                          <Badge bg="success" className="fs-6 px-3 py-2">MEAN Stack</Badge>
                          <Badge bg="info" className="fs-6 px-3 py-2">Full Stack</Badge>
                          <Badge bg="warning" className="fs-6 px-3 py-2">Web Applications</Badge>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>

          {/* Personal Info & Skills */}
          <Row className="g-4">
           {/* Personal Information */}
<Col lg={6}>
  <motion.div variants={itemVariants}>
    <Card className="glass-card-advanced h-100 border-0 shadow personal-info-card">
      <Card.Header className="bg-primary text-white py-3 position-relative">
        <h4 className="mb-0 d-flex align-items-center">
          <FaUser className="me-2" /> Personal Information
        </h4>
        <div className="position-absolute top-0 end-0 mt-2 me-3">
          <div className="pulse-dot"></div>
        </div>
      </Card.Header>
      <Card.Body className="p-4">
        <Row>
          {personalInfo.map((info, index) => (
            <Col md={6} key={index} className="mb-4">
              <motion.div 
                className="info-item"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="d-flex align-items-start">
                  <div className="info-badge me-3 flex-shrink-0">
                    <div className={`info-icon-wrapper bg-gradient-${index % 4} rounded-circle d-flex align-items-center justify-content-center`} 
                         style={{ width: '48px', height: '48px' }}>
                      {index === 0 && <FaEnvelope className="text-white" size={18} />}
                      {index === 1 && <FaPhone className="text-white" size={16} />}
                      {index === 2 && <FaMapMarkerAlt className="text-white" size={18} />}
                      {index === 3 && <FaBriefcase className="text-white" size={16} />}
                      {index === 4 && <FaGraduationCap className="text-white" size={18} />}
                      {index === 5 && <FaCheckCircle className="text-white" size={16} />}
                    </div>
                  </div>
                  <div className="info-content flex-grow-1">
                    <h6 className="fw-bold mb-1 text-dark d-flex align-items-center">
                      {info.label}
                      {index === 5 && <FaCheckCircle className="text-success ms-2" size={14} />}
                    </h6>
                    {index === 2 ? (
                      <div className="text-muted small">
                        <p className="mb-0 fw-medium">Chittilappily House</p>
                        <p className="mb-0">Madakkathra PO, Near Aal</p>
                        <p className="mb-0">Thrissur, Kerala - 680651</p>
                      </div>
                    ) : (
                      <p className="text-muted mb-0 small fw-medium">{info.value}</p>
                    )}
                  </div>
                </div>
                {index < personalInfo.length - 1 && (
                  <div className="info-connector"></div>
                )}
              </motion.div>
            </Col>
          ))}
        </Row>
        
        {/* Location Map Preview */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="location-preview mt-4 p-3 rounded"
        >
          <div className="d-flex align-items-center">
            <FaMapMarkerAlt className="text-danger me-2" />
            <span className="fw-semibold text-dark">Based in Thrissur, Kerala</span>
          </div>
          <div className="map-placeholder mt-2 rounded bg-light p-2 text-center">
            <FaMap className="text-muted mb-2" size={24} />
            <p className="small text-muted mb-0">Thrissur District, Kerala</p>
            <p className="small text-muted">Pin Code: 680651</p>
          </div>
        </motion.div>
      </Card.Body>
    </Card>
  </motion.div>
</Col>

            {/* Technical Skills */}
            <Col lg={6}>
              <motion.div variants={itemVariants}>
                <Card className="glass-card-advanced h-100 border-0 shadow">
                  <Card.Header className="bg-success text-white py-3">
                    <h4 className="mb-0 d-flex align-items-center">
                      <FaCode className="me-2" /> Technical Skills
                    </h4>
                  </Card.Header>
                  <Card.Body className="p-4">
                    {skills.map((skill, index) => (
                      <div key={index} className="mb-3">
                        <div className="d-flex justify-content-between mb-1">
                          <span className="fw-semibold text-dark">{skill.name}</span>
                          <span className="text-muted">{skill.level}%</span>
                        </div>
                        <ProgressBar 
                          now={skill.level} 
                          variant={skill.level > 80 ? "success" : skill.level > 70 ? "warning" : "info"}
                          className="skill-progress"
                          style={{ height: '8px', borderRadius: '10px' }}
                        />
                      </div>
                    ))}
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>

          {/* Value Propositions */}
          <Row className="g-4 mt-3">
            <Col md={4}>
              <motion.div variants={itemVariants} whileHover={{ y: -10 }}>
                <Card className="glass-card-advanced text-center h-100 border-0 shadow-sm">
                  <Card.Body className="p-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="icon-wrapper mb-3"
                    >
                      <FaLightbulb className="text-warning" size={50} />
                    </motion.div>
                    <h5 className="fw-bold text-dark">Passion</h5>
                    <p className="text-muted">
                      Crafting innovative solutions that blend design and functionality to create 
                      exceptional user experiences.
                    </p>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>

            <Col md={4}>
              <motion.div variants={itemVariants} whileHover={{ y: -10 }}>
                <Card className="glass-card-advanced text-center h-100 border-0 shadow-sm">
                  <Card.Body className="p-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.4, type: "spring" }}
                      className="icon-wrapper mb-3"
                    >
                      <FaRocket className="text-danger" size={50} />
                    </motion.div>
                    <h5 className="fw-bold text-dark">Vision</h5>
                    <p className="text-muted">
                      Driving business impact through cutting-edge web technologies and 
                      scalable architecture solutions.
                    </p>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>

            <Col md={4}>
              <motion.div variants={itemVariants} whileHover={{ y: -10 }}>
                <Card className="glass-card-advanced text-center h-100 border-0 shadow-sm">
                  <Card.Body className="p-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.6, type: "spring" }}
                      className="icon-wrapper mb-3"
                    >
                      <FaAward className="text-info" size={50} />
                    </motion.div>
                    <h5 className="fw-bold text-dark">Expertise</h5>
                    <p className="text-muted">
                      Full-cycle development from concept to deployment, ensuring 
                      robust and maintainable code.
                    </p>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-5"
          >
            <Card className="glass-card-cta border-0 shadow-lg">
              <Card.Body className="p-5">
                <h3 className="fw-bold text-white mb-3">Ready to Build Something Amazing?</h3>
                <p className="text-white-50 mb-4">
                  Let's collaborate to turn your ideas into reality with cutting-edge web solutions.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
               <NavLink
               as={Link}
                  to="/contact"
                 className="btn btn-light btn-lg rounded-pill px-5 py-3 fw-bold"
               >
                 Get In Touch
                 </NavLink>
   
                </motion.div>
              </Card.Body>
            </Card>
          </motion.div>
        </motion.div>
      </Container>

      {/* Custom CSS */}
      <style jsx>{`
        .bg-gradient-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 80px 0;
        }
        
        .glass-card-advanced {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }
        
        .glass-card-advanced:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important;
        }
        
        .glass-card-cta {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .section-divider {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #ff6b6b, #feca57);
          border-radius: 2px;
          margin: 20px auto;
        }
        
        .profile-icon-wrapper {
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50%;
          padding: 20px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100px;
          height: 100px;
        }
        
        .icon-wrapper {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          padding: 20px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          margin: 0 auto;
        }
          /* Personal Information Card Styles */
.personal-info-card {
  overflow: hidden;
}

.info-item {
  position: relative;
  padding: 8px 0;
}

.info-icon-wrapper {
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.info-item:hover .info-icon-wrapper {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.bg-gradient-0 {
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.bg-gradient-1 {
  background: linear-gradient(135deg, #f093fb, #f5576c);
}

.bg-gradient-2 {
  background: linear-gradient(135deg, #4facfe, #00f2fe);
}

.bg-gradient-3 {
  background: linear-gradient(135deg, #43e97b, #38f9d7);
}

.bg-gradient-4 {
  background: linear-gradient(135deg, #fa709a, #fee140);
}

.bg-gradient-5 {
  background: linear-gradient(135deg, #a8edea, #fed6e3);
}

.info-connector {
  position: absolute;
  bottom: -12px;
  left: 24px;
  width: 2px;
  height: 12px;
  background: linear-gradient(to bottom, #e9ecef, transparent);
}

.info-content h6 {
  font-size: 0.9rem;
  border-bottom: 2px solid transparent;
  padding-bottom: 2px;
  display: inline-block;
}

.info-item:hover .info-content h6 {
  border-bottom: 2px solid #007bff;
}

.pulse-dot {
  width: 12px;
  height: 12px;
  background: #ff6b6b;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 107, 107, 0.7);
  }
  
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(255, 107, 107, 0);
  }
  
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 107, 107, 0);
  }
}

.location-preview {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05));
  border: 1px solid rgba(102, 126, 234, 0.1);
}

.map-placeholder {
  border: 2px dashed #dee2e6;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.map-placeholder:hover {
  border-color: #667eea;
  background: rgba(102, 126, 234, 0.05);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .info-item {
    padding: 12px 0;
  }
  
  .info-icon-wrapper {
    width: 42px !important;
    height: 42px !important;
  }
  
  .personal-info-card .row {
    margin: 0 -10px;
  }
  
  .personal-info-card .col-md-6 {
    padding: 0 10px;
  }
}

/* Enhanced text styles */
.info-content .text-muted {
  line-height: 1.4;
}

.info-content p.mb-0 {
  font-size: 0.85rem;
}
        
        .skill-progress {
          background: rgba(0, 0, 0, 0.1);
        }
        
        .info-badge {
          min-width: 40px;
        }
        
        @media (max-width: 768px) {
          .bg-gradient-primary {
            padding: 60px 0;
          }
          
          .glass-card-advanced {
            margin-bottom: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default About;