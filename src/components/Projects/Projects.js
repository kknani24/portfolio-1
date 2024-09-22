import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.jpeg";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.jpeg";
import chatify from "../../Assets/Projects/chatify.jpg";
import suicide from "../../Assets/Projects/suicide.jpeg";
import './project.css'; // Ensure this path is correct

function Projects() {
  return (
    <Container fluid className="project-section" style={{ fontFamily: 'Times New Roman' }}>
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Technical Projects <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on ...
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {[
            {
              imgPath: chatify,
              title: "Sentiment Analysis for Mental Health Using NLP and Deep Learning",
              description: "This repository contains a comprehensive toolkit for sentiment analysis of mental health-related statements using Natural Language Processing (NLP) and deep learning techniques. The project includes data preprocessing, text augmentation, and the development of a Convolutional Neural Network (CNN) model for classification.",
              ghLink: "https://github.com/kknani24/Sentiment-Analysis-for-Mental-Health-Using-NLP-and-Deep-Learning.git"
            },
            {
              imgPath: leaf,
              title: "Brain Tumor Detection using YOLOv10",
              description: "This project implements an automated brain tumor detection system using the YOLOv10 deep learning model. It utilizes a robust MRI dataset for training, enabling accurate tumor identification and annotation. An interactive Gradio interface allows users to upload images for real-time predictions, enhancing diagnostic efficiency in medical imaging.",
              ghLink: "https://github.com/kknani24/Automated-Brain-Tumor-Detection-Using-YOLOv10-A-Deep-Learning-Approach.git"
            },
            {
              imgPath: editor,
              title: "Advanced Movie Recommendation System",
              description: "FLIX-HUB is a movie recommendation system utilizing the Netflix dataset. It features comprehensive data preprocessing and analysis, generating personalized movie and TV show suggestions based on TF-IDF vectorization and cosine similarity. The project includes interactive visualizations for insights into content trends and distributions.",
              ghLink: "https://github.com/kknani24/FLIX-HUB-An-Advanced-Movie-Recommendation-System-Leveraging-Netflix-Data.git"
            },
            {
              imgPath: suicide,
              title: "Analysis of Modern Lossless Image Compression Techniques",
              description: "This study analyzes state-of-the-art lossless image compression techniques: Brotli, Deflate, and LZMA. Each algorithm is implemented to optimize image compression. Findings show that Deflate outperforms the others, achieving an optimal balance between compression ratio, speed, and memory usage, providing valuable insights into performance.",
              ghLink: "https://github.com/kknani24/Analysis-of-Modern-Lossless-Image-Compression-Techniques.git"
            },
            {
              imgPath: emotion,
              title: "Library Management System",
              description: "A Library Management System (LMS) in C++ is a console application that enables efficient management of book inventories through adding, editing, and searching functionalities. It streamlines library operations and enhances user experience by automating record-keeping tasks.Library Management System is a C++ console application for efficient book inventory management. It supports adding, editing, and searching books, ensuring streamlined library operations.",
              ghLink: "https://github.com/kknani24/library-management-system.git"
            },
          ].map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                style={{ width: '100%', height: 'auto' }} // Adjust the ProjectCard's styling if necessary
              />
            </Col>
          ))}
        </Row>

        {/* New Section for Upcoming Projects */}
        <div className="upcoming-projects">
          <h2 className="text-center">More Research Projects Coming Soon!</h2>
          <p className="text-center">
            Publication is taking some time, but rest assured, code will be open-sourced after the publication process.
          </p>
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
