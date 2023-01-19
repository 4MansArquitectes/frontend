import { screen } from "@testing-library/react";
import { mockTeamMember } from "../../mocks/mocksTeam";
import renderWithProviders from "../../mocks/renderWithProviders";
import OurTeamCard from "./OurTeamCard";

describe("Given the OurTeamCard component", () => {
  describe("When it is rendered", () => {
    test("Then it should show on the screen details", () => {
      const expectedName = mockTeamMember.name;
      const expectedTag = mockTeamMember.tag;
      const expectedImageAlt = `${expectedTag} ${expectedName}`;

      renderWithProviders(<OurTeamCard {...mockTeamMember} />);

      const resultName = screen.queryByRole("heading", {
        level: 2,
        name: expectedName,
      }) as HTMLHeadingElement;
      const resultTag = screen.queryByText(expectedTag) as HTMLSpanElement;
      const resultImage = screen.queryByAltText(
        expectedImageAlt
      ) as HTMLImageElement;

      expect(resultName).toBeInTheDocument();
      expect(resultTag).toBeInTheDocument();
      expect(resultImage).toBeInTheDocument();
      expect(resultName.textContent).toEqual(expectedName);
      expect(resultTag.textContent).toEqual(expectedTag);
      expect(resultImage.alt).toEqual(expectedImageAlt);
    });
  });
});
