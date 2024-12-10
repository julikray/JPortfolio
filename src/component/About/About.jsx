import React from 'react';
import './About.css';


const ListItem = ({ icon, title, description }) => (
  <li className="about-list-item">
    <img src={icon} alt={title} className="language-icon" />
    <h3 className="about-list-title">{title}</h3>
    <p className="about-list-description">{description}</p>
  </li>
);

const About = () => {
  const languages = [
    {
      icon: './image/download1.png',
      title: 'Languages',
      description: 'HTML, CSS, JavaScript, React Js',
    },
    {
      icon: './image/download2.png',
      title: 'Education',
      description: 'BCA from Manipal University Jaipur',
    },
    {
      icon: './image/download3.png',
      title: 'Project',
      description: 'Built more than 5 project',
    },
  ];

  const tools = [
    './image/vscode.png',
    './image/mongodb.png',
    './image/figma.png',
    './image/git.png',
  ];

  return (
    <div id="about" className="about-section">
      <h4 className="about-intro">Introduction</h4>
      <h2 className="about-title">About me</h2>

      <div className="about-container">
        <div className="about-image-container">
          <img src="./image/aboutme.png" alt="User" className="user-image" />
          <div className="image-overlay">
            <img
              src="./image/circular-text.png"
              alt="Circular text"
              className="circular-text"
            />
            <img src="./image/dev-icon.png" alt="Dev Icon" className="dev-icon" />
          </div>
        </div>

        <div className="about-info">
          <p className="about-description">
          I am a passionate and eager-to-learn Frontend Developer, currently pursuing a BCA from Manipal University. As a fresher, I am excited to apply my skills in web development and contribute to building innovative and user-friendly digital solutions.
          </p>

          <ul className="about-list">
            {languages.map((item, index) => (
              <ListItem
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </ul>

          <h4 className="about-tools-heading">Tools I use</h4>
          <ul className="tools-list">
            {tools.map((tool, index) => (
              <li className="tool-item" key={index}>
                <img src={tool} alt="Tool Icon" className="tool-icon" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
