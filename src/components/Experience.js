// src/pages/Experience.js - Enhanced with Advanced Animations & Design
import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { 
  FaBriefcase, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaCode, 
  FaDatabase, 
  FaCloud,
  FaMobile,
  FaRocket,
  FaServer,
  FaTools
} from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: "MERN Full Stack Developer",
      company: "Wyenfos Infotech Pvt Ltd",
      location: "Thrissur",
      duration: "15/03/2025 – Present",
      type: "Full-time",
      icon: <FaRocket className="text-primary" />,
      highlights: [
        "Architect and develop full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js)",
        "Engineer scalable RESTful APIs and backend services with Node.js and Express.js",
        "Build dynamic and intuitive user interfaces with React.js using modern hooks and state management",
        "Implement full CI/CD pipelines and deploy applications on cloud platforms"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS", "Netlify", "Vercel", "REST APIs"],
      color: "primary"
    },
    {
      title: "Software Engineer Intern (MEAN Stack)",
      company: "Storebase Pvt Ltd",
      location: "Kakkanad",
      duration: "21/08/2024 – 22/12/2024",
      type: "Internship",
      icon: <FaCode className="text-success" />,
      highlights: [
        "Developed and maintained dynamic single-page applications (SPAs) using Angular",
        "Created reusable components and services for modular front-end architecture",
        "Integrated front-end and back-end services through API calls",
        "Ensured seamless data flow and cohesive user experience"
      ],
      technologies: ["Angular", "TypeScript", "Node.js", "MongoDB", "REST APIs", "SPA"],
      color: "success"
    },
    {
      title: "MERN Stack Developer Internship",
      company: "Luminar Technolab",
      location: "Kakkanad",
      duration: "16/08/2023 – 18/05/2024",
      type: "Internship",
      icon: <FaServer className="text-info" />,
      highlights: [
        "Developed dynamic and responsive user interfaces using React.js, HTML5, and CSS3",
        "Engineered and maintained RESTful APIs and server-side logic with Node.js and Express.js",
        "Performed CRUD operations efficiently using Mongoose ODM",
        "Enhanced user experience through responsive design principles"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "HTML5", "CSS3"],
      color: "info"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const timelineVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="experience" className="page-section bg-gradient-experience">
      <Container>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <h2 className="display-3 fw-bold text-white mb-3">Professional Experience</h2>
          <div className="section-divider mx-auto mb-3"></div>
          <p className="lead text-white-50">My journey in full-stack development</p>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="experience-badge"
          >
            <FaBriefcase className="text-warning me-2" />
            <span className="fw-bold">{experiences.length} Positions</span>
          </motion.div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="experience-timeline"
        >
          {/* Main Timeline Line */}
          <motion.div 
            variants={timelineVariants}
            className="timeline-line"
          ></motion.div>

          {experiences.map((exp, index) => (
            <Row key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <Col lg={1} className="timeline-icon-col">
                <motion.div
                  variants={cardVariants}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className={`timeline-icon bg-${exp.color} shadow-lg`}
                >
                  {exp.icon}
                </motion.div>
              </Col>
              
              <Col lg={11}>
                <motion.div
                  variants={cardVariants}
                  whileHover={{ y: -10 }}
                  className="experience-card-wrapper"
                >
                  <Card className={`glass-card-experience border-${exp.color} shadow-lg h-100`}>
                    <Card.Body className="p-4">
                      {/* Header */}
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <div>
                          <h4 className="fw-bold text-dark mb-1">{exp.title}</h4>
                          <h5 className={`text-${exp.color} fw-semibold mb-2`}>{exp.company}</h5>
                        </div>
                        <Badge bg={exp.color} className="fs-6 px-3 py-2">
                          {exp.type}
                        </Badge>
                      </div>

                      {/* Meta Information */}
                      <Row className="mb-3">
                        <Col md={6}>
                          <div className="d-flex align-items-center mb-2">
                            <FaCalendarAlt className={`text-${exp.color} me-2`} />
                            <span className="text-muted fw-medium">{exp.duration}</span>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="d-flex align-items-center mb-2">
                            <FaMapMarkerAlt className={`text-${exp.color} me-2`} />
                            <span className="text-muted fw-medium">{exp.location}</span>
                          </div>
                        </Col>
                      </Row>

                      {/* Highlights */}
                      <div className="mb-4">
                        <h6 className="fw-bold text-dark mb-3">Key Responsibilities:</h6>
                        <ul className="experience-highlights">
                          {exp.highlights.map((highlight, hIndex) => (
                            <motion.li 
                              key={hIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: hIndex * 0.1 + 0.3 }}
                              className="text-muted mb-2"
                            >
                              {highlight}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h6 className="fw-bold text-dark mb-2">Technologies Used:</h6>
                        <div className="d-flex flex-wrap gap-2">
                          {exp.technologies.map((tech, tIndex) => (
                            <motion.span
                              key={tIndex}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: tIndex * 0.1 + 0.5 }}
                              whileHover={{ scale: 1.05 }}
                              className={`tech-badge bg-${exp.color} bg-opacity-10 text-${exp.color} border border-${exp.color} border-opacity-25 px-3 py-1 rounded-pill small fw-medium`}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            </Row>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-5"
        >
          <Card className="glass-card-advanced border-0 shadow-lg">
            <Card.Header className="bg-dark text-white py-3">
              <h4 className="mb-0 d-flex align-items-center">
                <FaTools className="me-2" /> Technical Expertise Summary
              </h4>
            </Card.Header>
            <Card.Body className="p-4">
              <Row className="g-4">
                <Col md={3} className="text-center">
                  <motion.div whileHover={{ scale: 1.1 }} className="skill-category">
                    <FaCode className="text-primary mb-2" size={40} />
                    <h6 className="fw-bold">Frontend</h6>
                    <p className="small text-muted mb-0">React, Angular, JavaScript, TypeScript, Bootstrap</p>
                  </motion.div>
                </Col>
                <Col md={3} className="text-center">
                  <motion.div whileHover={{ scale: 1.1 }} className="skill-category">
                    <FaServer className="text-success mb-2" size={40} />
                    <h6 className="fw-bold">Backend</h6>
                    <p className="small text-muted mb-0">Node.js, Express.js, REST APIs, Authentication</p>
                  </motion.div>
                </Col>
                <Col md={3} className="text-center">
                  <motion.div whileHover={{ scale: 1.1 }} className="skill-category">
                    <FaDatabase className="text-info mb-2" size={40} />
                    <h6 className="fw-bold">Database</h6>
                    <p className="small text-muted mb-0">MongoDB, Firebase, Mongoose ODM</p>
                  </motion.div>
                </Col>
                <Col md={3} className="text-center">
                  <motion.div whileHover={{ scale: 1.1 }} className="skill-category">
                    <FaCloud className="text-warning mb-2" size={40} />
                    <h6 className="fw-bold">DevOps</h6>
                    <p className="small text-muted mb-0">AWS, Netlify, Vercel, CI/CD, Git</p>
                  </motion.div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </motion.div>
      </Container>

      {/* Custom CSS */}
      <style jsx>{`
        .bg-gradient-experience {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 80px 0;
          position: relative;
          overflow: hidden;
        }
        
        .bg-gradient-experience::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(-50px, -50px) rotate(360deg); }
        }
        
        .glass-card-experience {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          border-left: 5px solid;
          transition: all 0.3s ease;
        }
        
        .glass-card-experience:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15) !important;
        }
        
        .experience-timeline {
          position: relative;
          padding: 40px 0;
        }
        
        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(to bottom, #007bff, #28a745, #17a2b8);
          transform-origin: top;
          border-radius: 2px;
        }
        
        .timeline-item {
          position: relative;
          margin-bottom: 60px;
        }
        
        .timeline-item.left {
          text-align: right;
        }
        
        .timeline-item.right {
          text-align: left;
        }
        
        .timeline-icon-col {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          position: relative;
          z-index: 2;
        }
        
        .timeline-icon {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: white !important;
          position: relative;
          z-index: 3;
          transition: all 0.3s ease;
        }
        
        .experience-badge {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 50px;
          padding: 10px 20px;
          display: inline-flex;
          align-items: center;
          color: white;
        }
        
        .experience-highlights {
          list-style: none;
          padding-left: 0;
        }
        
        .experience-highlights li {
          position: relative;
          padding-left: 25px;
          margin-bottom: 12px;
        }
        
        .experience-highlights li::before {
          content: '▸';
          position: absolute;
          left: 0;
          color: #007bff;
          font-weight: bold;
        }
        
        .tech-badge {
          transition: all 0.3s ease;
          cursor: default;
        }
        
        .tech-badge:hover {
          transform: translateY(-2px);
        }
        
        .skill-category {
          padding: 20px;
          border-radius: 15px;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.05);
        }
        
        .skill-category:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-5px);
        }
        
        @media (max-width: 992px) {
          .timeline-line {
            left: 35px;
          }
          
          .timeline-item.left,
          .timeline-item.right {
            text-align: left;
          }
          
          .timeline-icon-col {
            justify-content: flex-start;
          }
        }
        
        @media (max-width: 768px) {
          .bg-gradient-experience {
            padding: 60px 0;
          }
          
          .display-3 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;