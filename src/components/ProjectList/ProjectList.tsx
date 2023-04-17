import projects from "../../lib/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectListStyled from "./ProjectListStyled";

const ProjectList = (): JSX.Element => (
  <ProjectListStyled>
    {projects.map((project) => (
      <ProjectCard key={project.id} {...project} />
    ))}
  </ProjectListStyled>
);

export default ProjectList;
