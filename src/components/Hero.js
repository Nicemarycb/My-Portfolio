// src/pages/Home.js - Complete Single Page with All Sections
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import img1 from '../assets/img1.jpeg';

// Import all components
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div>
      {/* Hero Section */}
    <section id="home" className="hero-bg parallax" style={{ backgroundImage: 'ur[](https://via.placeholder.com/1920x1080?text=Abstract+Tech+Pattern)' }}>
        <Container className="position-relative z-10">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <Row className="align-items-center min-vh-100">
              <Col md={7}>
                <motion.h1 variants={itemVariants} className="display-2 fw-bold mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Hi, I'm <span className="text-warning">Nice Mary C B</span>
                </motion.h1>
                <motion.p variants={itemVariants} className="lead fs-4 mb-4 text-white-50">
                  <Typewriter
                    words={['Full Stack Developer', 'MERN/MEAN Expert', 'Building Scalable Web Apps']}
                    loop={true}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </motion.p>
                <motion.div variants={itemVariants} className="d-flex gap-3">
                  <Button variant="light" size="lg" href="https://www.linkedin.com/in/nice-mary-c-b-783170281/" target="_blank" className="px-5 py-3 rounded-pill shadow-lg fw-semibold">
                    <FaLinkedin className="me-2" /> LinkedIn
                  </Button>
                  <Button variant="outline-light" size="lg" href="https://github.com/nicemary" target="_blank" className="px-5 py-3 rounded-pill fw-semibold">
                    <FaGithub className="me-2" /> GitHub
                  </Button>
                </motion.div>
              </Col>
              <Col md={5}>
                <motion.div variants={itemVariants} className="text-center">
                  <motion.img 
                    src={img1}
                    alt="Profile" 
                    className="img-fluid rounded-circle glass-card p-3" 
                    style={{ width: '350px', height: '350px', objectFit: 'cover' }}
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 1.2, type: "spring", stiffness: 50 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  />
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Experience Section */}
      <section id="experience">
        <Experience />
      </section>

      {/* Education Section */}
      <section id="education">
        <Education />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;