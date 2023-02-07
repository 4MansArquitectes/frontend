import renderWithProviders from "../../mocks/renderWithProviders";
import NavigationFooterMenu from "./NavigationFooterMenu";
import { screen } from "@testing-library/react";

describe("Given a NavigationFooterMenu component", () => {
  describe("When it's rendered with the menu options 'Política de privacidad', 'Política de cookies' and 'Aviso legal'", () => {
    test("Then it should show the correspondig options at the screen", () => {
      const optionOneText = "Política de privacidad";
      const optionTwoText = "Política de cookies";
      const optionThreeText = "Aviso legal";

      renderWithProviders(<NavigationFooterMenu />);

      const expectedTextOne = screen.queryByText(optionOneText);
      const expectedTextTwo = screen.queryByText(optionTwoText);
      const expectedTextThree = screen.queryByText(optionThreeText);

      expect(expectedTextOne).toBeInTheDocument();
      expect(expectedTextTwo).toBeInTheDocument();
      expect(expectedTextThree).toBeInTheDocument();
    });

    test("Then this should be shown on the screen route '/' home page", () => {
      renderWithProviders(<NavigationFooterMenu />, {
        initialEntries: ["/"],
      });
    });
  });
});
