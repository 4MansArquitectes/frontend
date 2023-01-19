import { screen } from "@testing-library/react";
import renderWithProviders from "../../mocks/renderWithProviders";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it's rendered with an svg image with the alternative text 'Logotipo Quatre mans arquitectes'", () => {
    test("Then it should show the Header image at the screen", () => {
      renderWithProviders(<Header />);

      const logo = screen.queryByAltText("Logotipo Quatre mans arquitectes");

      expect(logo).toBeInTheDocument();
    });
  });
});
