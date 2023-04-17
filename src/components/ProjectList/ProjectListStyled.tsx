import styled from "styled-components";

const ProjectListStyled = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 0.4fr;
  gap: 20px 40px;
  justify-items: center;

  @media only screen and (max-width: ${(props) => props.theme.globalSizes.mobileLarge}) {
    grid-template-columns: 1fr;
  }
`;

export default ProjectListStyled;
