const projects = [
  {
    name: "Two-view 3D reconstruction",
    description:
      "An experiment in reconstructing a sparse 3D point cloud from two photos, using feature matching and camera geometry.",
    technologies: "Python, OpenCV, Open3D",
    url: "https://github.com/Rupendra0777/View3D",
  },
  {
    name: "Gemini terminal chatbot",
    description:
      "A command-line chatbot that uses the Gemini API to hold an interactive conversation in the terminal.",
    technologies: "Python, Google Gen AI SDK",
    url: "https://github.com/Rupendra0777/chatbot",
  },
  {
    name: "Scribble",
    description:
      "A notes app with a REST API for creating, viewing, editing, and deleting notes stored in MongoDB.",
    technologies: "Node.js, Express, MongoDB, Mongoose",
    url: "https://github.com/Rupendra0777/Scribble",
  },
  {
    name: "Personal portfolio",
    description:
      "This portfolio brings together my background, selected projects, and contact details in a responsive one-page site.",
    technologies: "React, Node.js, Express, MongoDB",
    url: "https://github.com/Rupendra0777/my-portfolio",
  },
];

function ProjectsPage() {
  return (
    <section className="page-section content-section" id="projects">
      <p className="eyebrow">SELECTED WORK</p>
      <h2>Projects</h2>
      <p className="section-intro">A few things I’ve worked on.</p>

      <div className="project-grid">
        {projects.map((project, index) => (
          <article key={project.name}>
            <p className="project-number">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p className="project-technologies">{project.technologies}</p>
            {project.url && (
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                View project <span aria-hidden="true">↗</span>
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;
