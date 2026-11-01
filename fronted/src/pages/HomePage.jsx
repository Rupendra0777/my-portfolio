import AboutPage from "./AboutPage.jsx";
import BlogPage from "./BlogPage.jsx";
import ContactPage from "./ContactPage.jsx";
import ProjectsPage from "./ProjectsPage.jsx";

function HomePage() {
  return (
    <>
      <section className="page-section hero" id="home">
        <h1>
          Hi, I’m <span>Rupendra.</span>
        </h1>
        <p className="hero-description">
          I learn by building — from Python and AI experiments to full-stack
          applications. Interested in machine learning, computer vision, and
          useful software.
        </p>
        <div className="hero-links">
          <a className="text-link" href="/resume.pdf" target="_blank" rel="noreferrer">
            Resume ↗
          </a>
          <a className="text-link" href="mailto:dhunganarupendra69@gmail.com">
            Get in touch ↗
          </a>
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
