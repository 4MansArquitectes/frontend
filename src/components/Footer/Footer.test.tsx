import renderWithProviders from "../../mocks/renderWithProviders";
import Footer from "./Footer";
import { screen } from "@testing-library/react";

describe("Given a Footer component", () => {
  describe("When it's rendered with an svg image with the alternative text 'Logotipo Quatre mans arquitectes'", () => {
    test("Then it should show the Header image at the screen", () => {
      renderWithProviders(<Footer />);

      const logo = screen.queryByAltText("Logotipo Quatre mans arquitectes");
      const logoInstagram = screen.queryByAltText("Logotipo Instagram");
      const logoLinkedin = screen.queryByAltText("Logotipo Linkedin");

      expect(logo).toBeInTheDocument();
      expect(logoInstagram).toBeInTheDocument();
      expect(logoLinkedin).toBeInTheDocument();
    });
  });
});
