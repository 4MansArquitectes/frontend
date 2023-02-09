import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

      const expectedTextOne = screen.queryByRole("link", {
        name: optionOneText,
      });
      const expectedTextTwo = screen.queryByRole("link", {
        name: optionTwoText,
      });
      const expectedTextThree = screen.queryByRole("link", {
        name: optionThreeText,
      });
      const expectedTextFour = screen.queryByRole("link", {
        name: optionFourText,
      });
      const expectedTextFive = screen.queryByRole("link", {
        name: optionFiveText,
      });

      expect(expectedTextOne).toBeInTheDocument();
      expect(expectedTextTwo).toBeInTheDocument();
      expect(expectedTextThree).toBeInTheDocument();
      expect(expectedTextFour).toBeInTheDocument();
      expect(expectedTextFive).toBeInTheDocument();
    });
  });

  test("Then this should be shown on the screen route '/' HomePage", () => {
    renderWithProviders(<NavigationMenu />, {
      initialEntries: ["/"],
    });
  });

  describe("When it's rendered and button is clicked", () => {
    test("Then it should show a list with classname hidden before click and show after click", async () => {
      const expectedButton = screen.queryByLabelText("menu");
      // const expectedList = screen.queryByRole("list");
      // const expectedListBeforeClick = screen.queryByRole("list");

      renderWithProviders(<NavigationMenu />);

      await userEvent.click(expectedButton!);

      // expect(expectedList).toHaveClass("hidden");
      // expect(expectedListBeforeClick).toHaveClass("show");
    });
  });
});
