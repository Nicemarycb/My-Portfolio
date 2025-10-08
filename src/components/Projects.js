// src/pages/Projects.js - Enhanced with Advanced Animations & Design
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Badge, Tab, Tabs } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaExternalLinkAlt, 
  FaGithub, 
  FaCode, 
  FaServer, 
  FaDatabase,
  FaShoppingCart,
  FaUsers,
  FaBlog,
  FaRocket,
  FaTools,
  FaMobile,
  FaCloud
} from 'react-icons/fa';

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Ayur4Life',
      description: 'Full-stack Ayurvedic e-commerce platform with modern web technologies',
      fullDescription: 'Led the full-stack development of an Ayurvedic product e-commerce website with user-side frontend and admin-side backend using React, Node.js, Express, and MongoDB. Integrated Firebase services for user authentication and real-time database capabilities. Built a scalable Express.js server with RESTful API endpoints to handle all CRUD operations, user sessions, and order management. Created a dynamic and responsive React front-end featuring product filtering, search, persistent shopping cart, and secure checkout flow with Stripe payment integration.',
      image: 'https://via.placeholder.com/600x400/4A6572/FFFFFF?text=Ayur4Life+E-commerce',
      link: 'https://wyenfosinfotech.com/',
      github: 'https://github.com/nicemary',
      category: 'fullstack',
      status: 'Completed',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase Auth', 'Stripe', 'Bootstrap'],
      features: [
        'User Authentication & Authorization',
        'Product Catalog with Filtering',
        'Shopping Cart & Checkout',
        'Payment Integration (Stripe)',
        'Admin Dashboard',
        'Order Management',
        'Real-time Updates'
      ],
      color: 'primary',
      icon: <FaShoppingCart />
    },
    {
      id: 2,
      title: 'Staff Management System',
      description: 'Comprehensive admin dashboard for staff and intern management',
      fullDescription: 'Engineered a full-stack, responsive admin dashboard from the ground up using React.js and Bootstrap to manage all aspects of staff and intern data for the organization. Developed core administrative features including comprehensive CRUD operations, enabling admins to seamlessly add, view, edit, and manage staff member profiles. Designed and implemented a centralized scanner/overview section to provide administrators with a real-time, holistic view of all staff details, improving data visibility and operational efficiency.',
      image: 'https://via.placeholder.com/600x400/3498DB/FFFFFF?text=Staff+Management+Dashboard',
      link: 'https://wyenfosinfotech.com/admin/x7kP9mQ2jL5vR8nT/adminpannel/x7kP9mQ2jL5vR8987/adminsection/login',
      github: 'https://github.com/nicemary',
      category: 'frontend',
      status: 'Live',
      technologies: ['React.js', 'Bootstrap', 'REST API', 'Context API', 'Axios'],
      features: [
        'Staff CRUD Operations',
        'Real-time Data Overview',
        'Responsive Admin Dashboard',
        'Role-based Access Control',
        'Data Export Capabilities',
        'Advanced Filtering'
      ],
      color: 'success',
      icon: <FaUsers />
    },
    {
      id: 3,
      title: 'Blogging Platform',
      description: 'MERN stack blogging application with full CRUD functionality',
      fullDescription: 'Engineered a full-stack MERN blogging platform using React and Bootstrap, enabling users to perform CRUD operations on posts and interact via a comment system. Built a secure RESTful API with Node.js and Express, coupled with MongoDB for efficient data persistence and management. Implemented user authentication, post categorization, search functionality, and responsive design for optimal user experience across all devices.',
      image: 'https://via.placeholder.com/600x400/8E44AD/FFFFFF?text=Blogging+Platform',
      link: 'https://github.com/nicemary',
      github: 'https://github.com/nicemary',
      category: 'fullstack',
      status: 'Completed',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Bootstrap'],
      features: [
        'User Registration & Login',
        'Create, Read, Update, Delete Posts',
        'Comment System',
        'Post Categorization',
        'Search Functionality',
        'Responsive Design',
        'RESTful API'
      ],
      color: 'info',
      icon: <FaBlog />
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'fullstack', name: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'frontend', name: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'backend', name: 'Backend', count: projects.filter(p => p.category === 'backend').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleShow = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

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

  return (
    <section id="projects" className="page-section bg-gradient-projects">
      <Container>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <h2 className="display-3 fw-bold text-white mb-3">Featured Projects</h2>
          <div className="section-divider mx-auto mb-3"></div>
          <p className="lead text-white-50 mb-4">
            Real-world applications built with modern technologies
          </p>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="projects-badge"
          >
            <FaRocket className="text-warning me-2" />
            <span className="fw-bold">{projects.length} Production Projects</span>
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
                onClick={() => setActiveFilter(category.id)}
                className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              >
                <span className="filter-text">{category.name}</span>
                <Badge bg="light" text="dark" className="filter-count">
                  {category.count}
                </Badge>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="projects-grid"
        >
          <AnimatePresence mode="wait">
            <Row key={activeFilter} className="g-4">
              {filteredProjects.map((project, index) => (
                <Col lg={4} md={6} key={project.id} className="mb-4">
                  <motion.div
                    variants={cardVariants}
                    layout
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="project-card-wrapper h-100"
                  >
                    <Card className="glass-card-project border-0 shadow-lg h-100">
                      {/* Project Image with Overlay */}
                      <div className="project-image-container position-relative">
                        <Card.Img 
                          variant="top" 
                          src={project.image} 
                          className="project-image"
                        />
                        <div className="project-overlay">
                          <div className="project-actions">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="btn btn-light btn-sm me-2"
                              onClick={() => handleShow(project)}
                            >
                              View Details
                            </motion.button>
                            <motion.a
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-primary btn-sm"
                            >
                              <FaExternalLinkAlt className="me-1" />
                              Live Demo
                            </motion.a>
                          </div>
                        </div>
                        <Badge bg={project.color} className="project-status">
                          {project.status}
                        </Badge>
                      </div>

                      <Card.Body className="p-4">
                        {/* Project Header */}
                        <div className="d-flex align-items-start mb-3">
                          <div className={`project-icon bg-${project.color} me-3`}>
                            {project.icon}
                          </div>
                          <div className="flex-grow-1">
                            <h4 className="fw-bold text-dark mb-1">{project.title}</h4>
                            <p className="text-muted mb-2 small">{project.description}</p>
                          </div>
                        </div>

                        {/* Technologies */}
                        <div className="mb-3">
                          <h6 className="fw-bold text-dark mb-2">Technologies:</h6>
                          <div className="d-flex flex-wrap gap-1">
                            {project.technologies.slice(0, 4).map((tech, techIndex) => (
                              <motion.span
                                key={techIndex}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: techIndex * 0.1 }}
                                className="tech-tag"
                              >
                                {tech}
                              </motion.span>
                            ))}
                            {project.technologies.length > 4 && (
                              <span className="tech-tag more-tag">
                                +{project.technologies.length - 4} more
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Key Features */}
                        <div className="mb-3">
                          <h6 className="fw-bold text-dark mb-2">Key Features:</h6>
                          <ul className="project-features">
                            {project.features.slice(0, 3).map((feature, featureIndex) => (
                              <motion.li 
                                key={featureIndex}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: featureIndex * 0.1 }}
                                className="text-muted small"
                              >
                                {feature}
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Action Buttons */}
                        <div className="d-flex gap-2">
                          <Button
                            variant="primary"
                            onClick={() => handleShow(project)}
                            className="flex-grow-1"
                          >
                            View Details
                          </Button>
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-dark"
                          >
                            <FaGithub />
                          </motion.a>
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </AnimatePresence>
        </motion.div>

        {/* Projects Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-5"
        >
          <Row className="g-4">
            <Col md={3} className="text-center">
              <motion.div whileHover={{ scale: 1.1 }} className="project-stat">
                <FaCode className="text-primary mb-2" size={40} />
                <h4 className="fw-bold text-white">3+</h4>
                <p className="text-white-50 mb-0">Projects</p>
              </motion.div>
            </Col>
            <Col md={3} className="text-center">
              <motion.div whileHover={{ scale: 1.1 }} className="project-stat">
                <FaMobile className="text-success mb-2" size={40} />
                <h4 className="fw-bold text-white">100%</h4>
                <p className="text-white-50 mb-0">Responsive</p>
              </motion.div>
            </Col>
            <Col md={3} className="text-center">
              <motion.div whileHover={{ scale: 1.1 }} className="project-stat">
                <FaCloud className="text-info mb-2" size={40} />
                <h4 className="fw-bold text-white">2</h4>
                <p className="text-white-50 mb-0">Live Deployments</p>
              </motion.div>
            </Col>
            <Col md={3} className="text-center">
              <motion.div whileHover={{ scale: 1.1 }} className="project-stat">
                <FaTools className="text-warning mb-2" size={40} />
                <h4 className="fw-bold text-white">10+</h4>
                <p className="text-white-50 mb-0">Technologies</p>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>

      {/* Project Details Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="xl" centered className="project-modal">
        <Modal.Header closeButton className={`bg-${selectedProject?.color} text-white`}>
          <Modal.Title className="d-flex align-items-center">
            {selectedProject?.icon && (
              <span className="modal-icon me-3">{selectedProject.icon}</span>
            )}
            {selectedProject?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          {selectedProject && (
            <Row className="g-0">
              <Col md={6}>
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="img-fluid h-100 w-100"
                  style={{ objectFit: 'cover', minHeight: '400px' }}
                />
              </Col>
              <Col md={6}>
                <div className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <Badge bg={selectedProject.color} className="me-2">
                      {selectedProject.status}
                    </Badge>
                    <Badge bg="secondary">
                      {selectedProject.category === 'fullstack' ? 'Full Stack' : 'Frontend'}
                    </Badge>
                  </div>
                  
                  <p className="text-muted mb-4">{selectedProject.fullDescription}</p>
                  
                  <h6 className="fw-bold mb-2">Technologies Used:</h6>
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {selectedProject.technologies.map((tech, index) => (
                      <Badge key={index} bg="light" text="dark" className="px-2 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <h6 className="fw-bold mb-2">Key Features:</h6>
                  <ul className="text-muted mb-4">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  
                  <div className="d-flex gap-2">
                    <Button 
                      href={selectedProject.link} 
                      target="_blank" 
                      variant={selectedProject.color}
                      className="flex-grow-1"
                    >
                      <FaExternalLinkAlt className="me-2" />
                      Live Demo
                    </Button>
                    <Button 
                      href={selectedProject.github} 
                      target="_blank" 
                      variant="outline-dark"
                    >
                      <FaGithub className="me-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </Modal.Body>
      </Modal>

      {/* Custom CSS */}
      <style jsx>{`
        .bg-gradient-projects {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 80px 0;
          position: relative;
          overflow: hidden;
        }
        
        .bg-gradient-projects::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 10% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, rgba(255, 119, 198, 0.3) 0%, transparent 50%);
        }
        
        .glass-card-project {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          transition: all 0.3s ease;
          overflow: hidden;
        }
        
        .glass-card-project:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15) !important;
        }
        
        .project-image-container {
          overflow: hidden;
          position: relative;
        }
        
        .project-image {
          height: 200px;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .project-card-wrapper:hover .project-image {
          transform: scale(1.1);
        }
        
        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .project-image-container:hover .project-overlay {
          opacity: 1;
        }
        
        .project-actions {
          display: flex;
          gap: 10px;
        }
        
        .project-status {
          position: absolute;
          top: 15px;
          right: 15px;
        }
        
        .project-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          color: white;
          flex-shrink: 0;
        }
        
        .tech-tag {
          background: rgba(0, 0, 0, 0.05);
          padding: 4px 8px;
          border-radius: 15px;
          font-size: 0.75rem;
          color: #666;
        }
        
        .more-tag {
          background: rgba(0, 123, 255, 0.1);
          color: #007bff;
        }
        
        .project-features {
          list-style: none;
          padding-left: 0;
          margin-bottom: 0;
        }
        
        .project-features li {
          position: relative;
          padding-left: 15px;
          margin-bottom: 5px;
        }
        
        .project-features li::before {
          content: '▸';
          position: absolute;
          left: 0;
          color: #007bff;
        }
        
        .projects-badge {
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
        
        .project-stat {
          padding: 30px 20px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }
        
        .project-stat:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-5px);
        }
        
        .project-modal .modal-content {
          border-radius: 20px;
          overflow: hidden;
        }
        
        .modal-icon {
          font-size: 1.5rem;
        }
        
        @media (max-width: 768px) {
          .bg-gradient-projects {
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
          
          .project-stat {
            padding: 20px 15px;
            margin-bottom: 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;