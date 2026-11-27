function AboutPage() {
  return (
    <section className="page-section content-section" id="about">
      <h2>About me</h2>
      <p className="section-intro">
        I’m a computer science and AI student who enjoys exploring how software
        can solve real problems. I learn by building projects, experimenting
        with new tools, and improving my code along the way.
      </p>
      <h3>What I’m interested in</h3>
      <div className="skill-list" aria-label="Skills">
        <span>Python</span>
        <span>Machine Learning</span>
        <span>Computer Vision</span>
        <span>React</span>
        <span>FastAPI</span>
        <span>Node.js</span>
      </div>
    </section>
  );
}

export default AboutPage;
