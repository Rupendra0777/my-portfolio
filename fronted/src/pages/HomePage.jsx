import AboutPage from "./AboutPage.jsx";
import BlogPage from "./BlogPage.jsx";
import ContactPage from "./ContactPage.jsx";
import ProjectsPage from "./ProjectsPage.jsx";

import profileLogo from "../assets/profileLogo.png";

function HomePage() {
  return (
    <>
      <section className="page-section hero" id="home">
        <div className="hero-main">
          <div className="availability"><span aria-hidden="true"></span> Open to opportunities</div>
          <h1>
            Hi, I’m <span>Rupendra.</span>
          </h1>
          <p className="hero-description">
            I’m a computer science and AI student building thoughtful software—
            from intelligent systems and computer vision to full-stack applications.
          </p>
          <div className="hero-links">
            <a className="button button-primary" href="/resume.pdf" target="_blank" rel="noreferrer">
              View résumé <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-secondary" href="#contact">
              Let’s work together
            </a>
          </div>
        </div>
        <div className="hero-portrait" aria-hidden="true">
          <div className="portrait-ring">
            <img src={profileLogo} alt="" />
          </div>
          <span className="portrait-label portrait-label-top">Python + AI</span>
          <span className="portrait-label portrait-label-bottom">Open to learn</span>
        </div>
      </section>
      <AboutPage />
      <ProjectsPage />
      <BlogPage />
      <ContactPage />
    </>
  );
}

export default HomePage;
