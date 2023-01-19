import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it's rendered with an svg image with the alternative text 'Logotipo Quatre mans arquitectes'", () => {
    test("Then it should show the Header image at the screen", () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );
      const logo = screen.queryByAltText("Logotipo Quatre mans arquitectes");

      expect(logo).toBeInTheDocument();
    });
  });
});
