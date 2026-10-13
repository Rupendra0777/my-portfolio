function HomePage() {
  return (
    <section className="page-section hero" id="home">
      <p className="eyebrow">COMPUTER SCIENCE & AI STUDENT</p>
      <h1>
        Hello, I’m <span>Rupendra Dhungana.</span>
      </h1>
      <p className="hero-description">
        I enjoy learning by building—from Python and AI experiments to
        full-stack web applications. I’m interested in machine learning,
        computer vision, and creating useful software.
      </p>
      <div className="hero-actions">
        <a className="button button-primary" href="#projects">
          Explore my projects <span aria-hidden="true">↗</span>
        </a>
        <a className="button button-secondary" href="/resume.pdf" download>
          Download my résumé <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}

export default HomePage;
