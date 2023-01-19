import { screen } from "@testing-library/react";
import renderWithProviders from "../../mocks/renderWithProviders";
import NavigationMenu from "./NavigationMenu";

describe("Given a NavigationMenu component", () => {
  describe("When it's rendered with the menu options 'Inicio', 'Nosotros', 'Proyectos', 'Servicios' and 'Contacto'", () => {
    test("Then it should show the correspondig options at the screen", () => {
      const optionOneText = "Inicio";
      const optionTwoText = "Nosotros";
      const optionThreeText = "Proyectos";
      const optionFourText = "Servicios";
      const optionFiveText = "Contacto";

      renderWithProviders(<NavigationMenu />);

      const expectedTextOne = screen.queryByText(optionOneText);
      const expectedTextTwo = screen.queryByText(optionTwoText);
      const expectedTextThree = screen.queryByText(optionThreeText);
      const expectedTextFour = screen.queryByText(optionFourText);
      const expectedTextFive = screen.queryByText(optionFiveText);

      expect(expectedTextOne).toBeInTheDocument();
      expect(expectedTextTwo).toBeInTheDocument();
      expect(expectedTextThree).toBeInTheDocument();
      expect(expectedTextFour).toBeInTheDocument();
      expect(expectedTextFive).toBeInTheDocument();
    });

    test("Then this should be shown on the screen route '/' HomePage", () => {
      renderWithProviders(<NavigationMenu />, {
        initialEntries: ["/"],
      });
    });
  });
});
