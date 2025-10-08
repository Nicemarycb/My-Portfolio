// src/pages/Skills.js - Enhanced with Advanced Animations & Design
import React, { useState } from 'react';
import { Container, Row, Col, Card, ProgressBar, Badge, Button } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaAngular, 
  FaNodeJs, 
  FaDatabase, 
  FaGitAlt,
  FaBootstrap,
  FaFire,
  FaCode,
  FaServer,
  FaTools,
  FaCloud,
  FaMobile,
  FaRocket
} from 'react-icons/fa';
import { SiExpress, SiMongodb, SiPostman, SiThunderbird } from 'react-icons/si';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillsData = {
    languages: [
      { name: 'HTML5', icon: <FaHtml5 />, level: 95, color: '#e34f26',  },
      { name: 'CSS3', icon: <FaCss3Alt />, level: 90, color: '#1572b6', },
      { name: 'JavaScript', icon: <FaJs />, level: 92, color: '#f7df1e', },
      { name: 'TypeScript', icon: <FaJs />, level: 80, color: '#3178c6', }
    ],
    frontend: [
      { name: 'React.js', icon: <FaReact />, level: 90, color: '#61dafb',  },
      { name: 'Angular', icon: <FaAngular />, level: 75, color: '#dd0031', },
      { name: 'Bootstrap', icon: <FaBootstrap />, level: 88, color: '#7952b3', }
    ],
    backend: [
      { name: 'Node.js', icon: <FaNodeJs />, level: 85, color: '#339933', },
      { name: 'Express.js', icon: <SiExpress />, level: 83, color: '#000000',  }
    ],
    database: [
      { name: 'MongoDB', icon: <SiMongodb />, level: 82, color: '#47a248', },
      { name: 'Firebase', icon: <FaFire />, level: 78, color: '#ffca28',  }
    ],
    tools: [
      { name: 'GitHub', icon: <FaGitAlt />, level: 88, color: '#181717', },
      { name: 'Postman', icon: <SiPostman />, level: 85, color: '#ff6c37',  },
      { name: 'Thunder Client', icon: <SiThunderbird />, level: 80, color: '#7c3aed',  }
    ]
  };

  const categories = [
    { id: 'all', name: 'All Skills', icon: <FaCode />, count: Object.values(skillsData).flat().length },
    { id: 'languages', name: 'Languages', icon: <FaCode />, count: skillsData.languages.length },
    { id: 'frontend', name: 'Frontend', icon: <FaMobile />, count: skillsData.frontend.length },
    { id: 'backend', name: 'Backend', icon: <FaServer />, count: skillsData.backend.length },
    { id: 'database', name: 'Database', icon: <FaDatabase />, count: skillsData.database.length },
    { id: 'tools', name: 'Tools', icon: <FaTools />, count: skillsData.tools.length }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? Object.values(skillsData).flat()
    : skillsData[activeCategory];

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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
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
        delay: 0.3
      }
    })
  };

  return (
    <section id="skills" className="page-section bg-gradient-skills">
      <Container>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <h2 className="display-3 fw-bold text-white mb-3">Technical Skills</h2>
          <div className="section-divider mx-auto mb-3"></div>
          <p className="lead text-white-50 mb-4">
            Full-Stack Development Expertise in MERN/MEAN Stack
          </p>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="skills-summary-badge"
          >
            <FaRocket className="text-warning me-2" />
            <span className="fw-bold">{Object.values(skillsData).flat().length}+ Technologies</span>
          </motion.div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-5"
        >
          <div className="category-filter">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              >
                <span className="filter-icon">{category.icon}</span>
                <span className="filter-text">{category.name}</span>
                <Badge bg="light" text="dark" className="filter-count">
                  {category.count}
                </Badge>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="skills-grid"
        >
          <AnimatePresence mode="wait">
            <Row key={activeCategory} className="g-4">
              {filteredSkills.map((skill, index) => (
                <Col xl={4} lg={6} key={skill.name} className="mb-4">
                  <motion.div
                    variants={itemVariants}
                    layout
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="skill-card-wrapper h-100"
                  >
                    <Card className="glass-card-skill border-0 shadow-lg h-100">
                      <Card.Body className="p-4">
                        {/* Skill Header */}
                        <div className="d-flex align-items-center mb-3">
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                            className="skill-icon-wrapper me-3"
                            style={{ color: skill.color }}
                          >
                            {skill.icon}
                          </motion.div>
                          <div className="flex-grow-1">
                            <h5 className="fw-bold text-dark mb-1">{skill.name}</h5>
                            <Badge bg="light" text="dark" className="experience-badge">
                              {skill.experience}
                            </Badge>
                          </div>
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5 }}
                            className="skill-level-badge"
                            style={{ backgroundColor: skill.color }}
                          >
                            {skill.level}%
                          </motion.div>
                        </div>

                        {/* Progress Bar */}
                        <div className="mb-3">
                          <motion.div
                            custom={skill.level}
                            variants={progressVariants}
                            initial="hidden"
                            animate="visible"
                            className="skill-progress-bar"
                            style={{ '--skill-color': skill.color }}
                          >
                            <div className="progress-fill"></div>
                          </motion.div>
                        </div>

                        {/* Skill Description */}
                        <div className="skill-meta">
                          <div className="d-flex justify-content-between align-items-center">
                            <small className="text-muted">Proficiency Level</small>
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.8 }}
                              className="skill-stars"
                            >
                              {[...Array(5)].map((_, starIndex) => (
                                <FaRocket
                                  key={starIndex}
                                  className={`${starIndex < Math.floor(skill.level / 20) ? 'text-warning' : 'text-muted'}`}
                                  size={12}
                                />
                              ))}
                            </motion.div>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </AnimatePresence>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-5"
        >
          <Row className="g-4">
            <Col lg={4}>
              <Card className="glass-card-advanced border-0 shadow text-center h-100">
                <Card.Body className="p-4">
                  <FaCode className="text-primary mb-3" size={50} />
                  <h5 className="fw-bold text-dark">Frontend Mastery</h5>
                  <p className="text-muted small">
                    React.js, Angular, JavaScript, TypeScript, Bootstrap, HTML5, CSS3
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="glass-card-advanced border-0 shadow text-center h-100">
                <Card.Body className="p-4">
                  <FaServer className="text-success mb-3" size={50} />
                  <h5 className="fw-bold text-dark">Backend Expertise</h5>
                  <p className="text-muted small">
                    Node.js, Express.js, REST APIs, Authentication, Server-side Logic
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="glass-card-advanced border-0 shadow text-center h-100">
                <Card.Body className="p-4">
                  <FaDatabase className="text-info mb-3" size={50} />
                  <h5 className="fw-bold text-dark">Database & Tools</h5>
                  <p className="text-muted small">
                    MongoDB, Firebase, GitHub, Postman, Thunder Client, CI/CD
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-5"
        >
          <Card className="glass-card-cta border-0 shadow-lg">
            <Card.Body className="p-5">
              <h3 className="fw-bold text-white mb-3">Ready to Build Together?</h3>
              <p className="text-white-50 mb-4">
                Leverage my full-stack expertise to bring your ideas to life with cutting-edge technology.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="#contact" className="btn btn-light btn-lg rounded-pill px-5 py-3 fw-bold">
                  Start a Project
                </a>
              </motion.div>
            </Card.Body>
          </Card>
        </motion.div>
      </Container>

      {/* Custom CSS */}
      <style jsx>{`
        .bg-gradient-skills {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 80px 0;
          position: relative;
          overflow: hidden;
        }
        
        .bg-gradient-skills::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%);
          animation: float 20s infinite linear;
        }
        
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(-50px, -50px) rotate(360deg); }
        }
        
        .glass-card-skill {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          transition: all 0.3s ease;
          border-left: 4px solid;
        }
        
        .glass-card-skill:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;
        }
        
        .skill-icon-wrapper {
          font-size: 2rem;
          transition: all 0.3s ease;
        }
        
        .skill-progress-bar {
          background: rgba(0, 0, 0, 0.1);
          height: 8px;
          border-radius: 10px;
          overflow: hidden;
          position: relative;
        }
        
        .progress-fill {
          background: linear-gradient(90deg, var(--skill-color), color-mix(in srgb, var(--skill-color) 80%, white));
          height: 100%;
          border-radius: 10px;
          position: relative;
          width: 0%;
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
        
        .skill-level-badge {
          color: white;
          padding: 4px 8px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: bold;
          min-width: 45px;
          text-align: center;
        }
        
        .experience-badge {
          font-size: 0.7rem;
          padding: 2px 8px;
        }
        
        .skills-summary-badge {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 50px;
          padding: 10px 20px;
          display: inline-flex;
          align-items: center;
          color: white;
        }
        
        .category-filter {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
        }
        
        .filter-btn {
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          padding: 12px 20px;
          color: white;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          position: relative;
          backdrop-filter: blur(10px);
        }
        
        .filter-btn:hover,
        .filter-btn.active {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.4);
          transform: translateY(-2px);
        }
        
        .filter-btn.active {
          background: rgba(255, 255, 255, 0.3);
          border-color: #fff;
        }
        
        .filter-icon {
          font-size: 1rem;
        }
        
        .filter-text {
          font-weight: 500;
        }
        
        .filter-count {
          font-size: 0.7rem;
          margin-left: 4px;
        }
        
        .glass-card-advanced {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(15px);
          border-radius: 15px;
          transition: all 0.3s ease;
        }
        
        .glass-card-advanced:hover {
          transform: translateY(-5px);
        }
        
        .glass-card-cta {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .skill-stars {
          display: flex;
          gap: 2px;
        }
        
        @media (max-width: 768px) {
          .bg-gradient-skills {
            padding: 60px 0;
          }
          
          .display-3 {
            font-size: 2.5rem;
          }
          
          .category-filter {
            gap: 8px;
          }
          
          .filter-btn {
            padding: 10px 15px;
            font-size: 0.9rem;
          }
          
          .filter-text {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;