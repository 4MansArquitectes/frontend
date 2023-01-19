import { screen } from "@testing-library/react";
import { mockTeamMember } from "../../mocks/mocksTeam";
import renderWithProviders from "../../mocks/renderWithProviders";
import OurTeamList from "./OurTeamList";

describe("Given the OurTeamList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show on the screen details", () => {
      const expectedName = mockTeamMember.name;
      const expectedTag = mockTeamMember.tag;
      const expectedImageAlt = `${expectedTag} ${expectedName}`;

      renderWithProviders(<OurTeamList />);

      const resultName: HTMLHeadingElement[] = screen.queryAllByRole("heading", {
        level: 2,
        name: expectedName,
      });
      const resultTag: HTMLSpanElement[] = screen.queryAllByText(expectedTag);
      const resultImage: HTMLImageElement[] = screen.queryAllByAltText(expectedImageAlt);

      expect(resultName[0]).toBeInTheDocument();
      expect(resultTag[0]).toBeInTheDocument();
      expect(resultImage[0]).toBeInTheDocument();
      expect(resultName[0].textContent).toEqual(expectedName);
      expect(resultTag[0].textContent).toEqual(expectedTag);
      expect(resultImage[0].alt).toEqual(expectedImageAlt);
    });
  });
});
