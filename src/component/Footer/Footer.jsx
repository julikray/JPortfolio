import React from 'react';
import './Footer.css'; 

const Footer = () => {
  const socialLinks = [
    {
      href: "https://github.com/julikray",
      iconClass: "fab fa-github",
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/julikray/",
      iconClass: "fab fa-linkedin",
      label: "LinkedIn",
    },
    {
      href: "mailto:julik.roy@gmail.com",
      iconClass: "fas fa-envelope",
      label: "Email",
    },
  ];

  return (
    <footer className="portfolio-footer" id='contact' >
      <div className="footer-container">
        <div className="social-links">
          {socialLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              target={link.href.startsWith("mailto:") ? "_self" : "_blank"} 
              rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"} 
              aria-label={link.label}
            >
              <i className={link.iconClass}></i>
            </a>
          ))}
        </div>
        <p>&copy; {new Date().getFullYear()} Juli kumari Roy. Built with ❤️ using React.</p>
      </div>
    </footer>
  );
};

export default Footer;
