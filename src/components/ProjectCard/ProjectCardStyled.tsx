import styled from "styled-components";

const ProjectCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;

  .cover-img {
    width: 100%;
    height: 420px;
    object-fit: contain;
    margin-bottom: 15px;

    @media only screen and (max-width: ${(props) => props.theme.globalSizes.mobileLarge}) {
      height: 420px;
    }

    @media only screen and (max-width: ${(props) => props.theme.globalSizes.mobileMedium}) {
      height: 100%;
    }
  }

  .date {
    color: ${(props) => props.theme.globalColors.textMainLightColor};
  }

  .title {
    font-family: ${(props) => props.theme.globalFonts.secondaryFont};
    text-align: start;
  }

  .tag {
    color: ${(props) => props.theme.globalColors.textMainLightColor};
  }
`;

export default ProjectCardStyled;
