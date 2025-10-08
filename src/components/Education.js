// src/pages/Education.js - Enhanced with Advanced Animations & Design
import React from 'react';
import { Container, Row, Col, Card, ProgressBar, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { 
  FaUniversity, 
  FaGraduationCap, 
  FaAward, 
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBook,
  FaStar,
  FaRocket
} from 'react-icons/fa';

const Education = () => {
  const educations = [
    {
      degree: 'Master of Computer Application',
      institution: 'KTU University',
      duration: '06/2021 - 05/2023',
      location: 'Kerala, India',
      score: 'Vidya Academy of Science & Technology chelakkottukara',
      icon: <FaGraduationCap className="text-white" />,
      color: 'primary',
      highlights: [
        'Advanced Software Engineering',
        'Data Structures & Algorithms',
        'Database Management Systems',
        'Web Technologies',
        'Machine Learning Fundamentals'
      ],
      progress: 100,
      status: 'Completed'
    },
    {
      degree: 'Bachelor of Computer Application',
      institution: 'Calicut University',
      duration: '06/2018 - 03/2021',
      location: 'Kerala, India',
      score: 'St.Marys College of Arts & Science Thrissur',
      icon: <FaUniversity className="text-white" />,
      color: 'success',
      highlights: [
        'Object Oriented Programming',
        'Computer Networks',
        'Web Development',
        'Software Engineering',
        'Database Concepts'
      ],
      progress: 100,
      status: 'Completed'
    },
    {
      degree: 'Higher Secondary',
      institution: 'Kerala State Board',
      duration: '06/2016 - 03/2018',
      location: 'Kerala, India',
      icon: <FaBook className="text-white" />,
      color: 'info',
      highlights: [
        'Computer Science Stream',
        'Mathematics & Physics',
        'Programming Fundamentals',
        'Digital Electronics'
      ],
      progress: 100,
      status: 'Completed'
    },
    {
      degree: 'High School',
      institution: 'Kerala State Board',
      duration: '03/2016',
      location: 'Kerala, India',
      icon: <FaAward className="text-white" />,
      color: 'warning',
      highlights: [
        'Science & Mathematics',
        'Computer Basics',
        'English Proficiency',
        'Social Sciences'
      ],
      progress: 100,
      status: 'Completed'
    }
  ];

  const skillsAcquired = [
    { name: 'Programming', level: 95 },
    { name: 'Web Development', level: 90 },
    { name: 'Database Management', level: 85 },
    { name: 'Software Engineering', level: 88 },
    { name: 'Problem Solving', level: 92 },
    { name: 'Team Collaboration', level: 87 }
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5
      }
    })
  };

  return (
    <section id="education" className="page-section bg-gradient-education">
      <Container>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <h2 className="display-3 fw-bold text-white mb-3">Education Journey</h2>
          <div className="section-divider mx-auto mb-3"></div>
          <p className="lead text-white-50">Academic qualifications that shaped my technical expertise</p>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="education-badge"
          >
            <FaRocket className="text-warning me-2" />
            <span className="fw-bold">{educations.length} Degrees</span>
          </motion.div>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="education-timeline"
        >
          <Row className="g-4">
            {educations.map((edu, index) => (
              <Col lg={6} key={index} className="mb-4">
                <motion.div
                  variants={cardVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="education-card-wrapper h-100"
                >
                  <Card className={`glass-card-education border-${edu.color} border-3 shadow-lg h-100`}>
                    <Card.Body className="p-4 position-relative">
                      {/* Degree Ribbon */}
                      <div className={`degree-ribbon bg-${edu.color}`}>
                        <span className="text-white small fw-bold">{edu.status}</span>
                      </div>

                      {/* Header with Icon */}
                      <div className="d-flex align-items-start mb-4">
                        <div className={`education-icon-wrapper bg-${edu.color} me-4`}>
                          {edu.icon}
                        </div>
                        <div className="flex-grow-1">
                          <h4 className="fw-bold text-dark mb-1">{edu.degree}</h4>
                          <h5 className={`text-${edu.color} fw-semibold mb-2`}>{edu.institution}</h5>
                          
                          {/* Meta Information */}
                          <div className="d-flex flex-wrap gap-3 mb-3">
                            <div className="d-flex align-items-center">
                              <FaCalendarAlt className={`text-${edu.color} me-2`} />
                              <small className="text-muted fw-medium">{edu.duration}</small>
                            </div>
                            <div className="d-flex align-items-center">
                              <FaMapMarkerAlt className={`text-${edu.color} me-2`} />
                              <small className="text-muted fw-medium">{edu.location}</small>
                            </div>
                            <div className="d-flex align-items-center">
                              <FaStar className={`text-${edu.color} me-2`} />
                              <small className="text-muted fw-medium">{edu.score}</small>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-3">
                        <div className="d-flex justify-content-between mb-1">
                          <small className="fw-semibold text-dark">Completion</small>
                          <small className="text-muted">{edu.progress}%</small>
                        </div>
                        <ProgressBar 
                          now={edu.progress} 
                          variant={edu.color}
                          className="education-progress"
                          style={{ height: '6px', borderRadius: '10px' }}
                        />
                      </div>

                      {/* Highlights */}
                      <div className="mb-3">
                        <h6 className="fw-bold text-dark mb-2">Key Subjects & Skills:</h6>
                        <div className="d-flex flex-wrap gap-2">
                          {edu.highlights.map((highlight, hIndex) => (
                            <motion.span
                              key={hIndex}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: hIndex * 0.1 }}
                              className={`highlight-badge bg-${edu.color} bg-opacity-10 text-${edu.color} border border-${edu.color} border-opacity-25 px-2 py-1 rounded small`}
                            >
                              {highlight}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Year Indicator */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring" }}
                        className={`year-indicator bg-${edu.color} text-white`}
                      >
                        {edu.duration.split(' - ')[0].split('/')[1]}
                      </motion.div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

        {/* Skills Progress Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-5"
        >
          <Card className="glass-card-advanced border-0 shadow-lg">
            <Card.Header className="bg-dark text-white py-3">
              <h4 className="mb-0 d-flex align-items-center">
                <FaAward className="me-2" /> Skills Acquired Through Education
              </h4>
            </Card.Header>
            <Card.Body className="p-4">
              <Row>
                {skillsAcquired.map((skill, index) => (
                  <Col md={6} key={index} className="mb-4">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="skill-item"
                    >
                      <div className="d-flex justify-content-between mb-2">
                        <span className="fw-semibold text-dark">{skill.name}</span>
                        <span className="text-muted">{skill.level}%</span>
                      </div>
                      <motion.div
                        custom={skill.level}
                        variants={progressVariants}
                        initial="hidden"
                        whileInView="visible"
                        className="skill-progress-bar"
                      >
                        <div className="progress-fill"></div>
                      </motion.div>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </motion.div>

        {/* Academic Journey Summary */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-5"
        >
          <Card className="glass-card-cta border-0 shadow-lg">
            <Card.Body className="p-5">
              <h3 className="fw-bold text-white mb-3">Continuous Learning Journey</h3>
              <p className="text-white-50 mb-4">
                From foundational computer science principles to advanced full-stack development, 
                my educational path has equipped me with comprehensive technical expertise and 
                problem-solving abilities.
              </p>
              <div className="d-flex justify-content-center flex-wrap gap-3">
                <Badge bg="primary" className="fs-6 px-3 py-2">
                  <FaGraduationCap className="me-2" />
                  Master of Computer Application
                </Badge>
                <Badge bg="success" className="fs-6 px-3 py-2">
                  <FaUniversity className="me-2" />
                  Bachelor of Computer Application
                </Badge>
                <Badge bg="info" className="fs-6 px-3 py-2">
                  Computer Science Background
                </Badge>
              </div>
            </Card.Body>
          </Card>
        </motion.div>
      </Container>

      {/* Custom CSS */}
      <style jsx>{`
        .bg-gradient-education {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 80px 0;
          position: relative;
          overflow: hidden;
        }
        
        .bg-gradient-education::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
        }
        
        .glass-card-education {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .glass-card-education::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--bs-primary), var(--bs-success), var(--bs-info), var(--bs-warning));
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .glass-card-education:hover::before {
          opacity: 1;
        }
        
        .glass-card-education:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;
        }
        
        .education-icon-wrapper {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          flex-shrink: 0;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
        }
        
        .education-card-wrapper:hover .education-icon-wrapper {
          transform: scale(1.1) rotate(5deg);
        }
        
        .degree-ribbon {
          position: absolute;
          top: 20px;
          right: -30px;
          padding: 5px 40px;
          transform: rotate(45deg);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }
        
        .education-badge {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 50px;
          padding: 10px 20px;
          display: inline-flex;
          align-items: center;
          color: white;
        }
        
        .highlight-badge {
          transition: all 0.3s ease;
          cursor: default;
          font-size: 0.75rem;
        }
        
        .highlight-badge:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        .year-indicator {
          position: absolute;
          bottom: -10px;
          right: 20px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 0.8rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
        
        .education-progress {
          background: rgba(0, 0, 0, 0.1);
        }
        
        .education-progress .progress-bar {
          border-radius: 10px;
          transition: width 1.5s ease-in-out;
        }
        
        .skill-progress-bar {
          background: rgba(0, 0, 0, 0.1);
          height: 8px;
          border-radius: 10px;
          overflow: hidden;
          position: relative;
        }
        
        .progress-fill {
          background: linear-gradient(90deg, #667eea, #764ba2);
          height: 100%;
          border-radius: 10px;
          position: relative;
        }
        
        .progress-fill::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          animation: shimmer 2s infinite;
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .glass-card-cta {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .skill-item {
          padding: 10px 0;
        }
        
        @media (max-width: 768px) {
          .bg-gradient-education {
            padding: 60px 0;
          }
          
          .display-3 {
            font-size: 2.5rem;
          }
          
          .education-icon-wrapper {
            width: 60px;
            height: 60px;
            font-size: 1.2rem;
          }
          
          .degree-ribbon {
            right: -25px;
            padding: 4px 30px;
          }
        }
        
        @media (max-width: 576px) {
          .education-card-wrapper {
            margin-bottom: 30px;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;