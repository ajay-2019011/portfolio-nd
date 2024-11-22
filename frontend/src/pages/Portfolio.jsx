import ProjectCard from "../components/ProjectCard";

function Portfolio() {
  const projects = [
    {
      title: "Project 1",
      description: "This is a description of project 1.",
      link: "https://example.com/project1",
    },
    {
      title: "Project 2",
      description: "This is a description of project 2.",
      link: "https://example.com/project2",
    },
  ];

  return (
    <section>
      <h1>Portfolio</h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
