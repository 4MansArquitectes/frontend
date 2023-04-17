import type { Project } from "../../types/projectTypes";
import ProjectCardStyled from "./ProjectCardStyled";
import { v4 as uuidv4 } from "uuid";

type ProjectCardProps = Project;

const ProjectCard = ({ name, coverImage, tags, startDate, endDate }: ProjectCardProps): JSX.Element => {
  const getDateYear = (date: number) => new Date(date).getFullYear();

  return (
    <ProjectCardStyled>
      <img className="cover-img" src={coverImage} alt={`Portada ${name}`} />
      <span className="date">
        {getDateYear(startDate)} - {getDateYear(endDate)}
      </span>
      <h3 className="title">{name}</h3>
      <div className="group-tags">
        {tags.map((tag) => (
          <span key={uuidv4()} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </ProjectCardStyled>
  );
};

export default ProjectCard;
