import renderWithProviders from "../../mocks/renderWithProviders";
import NotFoundPage from "./NotFoundPage";
import { screen } from "@testing-library/react";

describe("Given the NotFoundPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show on the screen the title of each section", () => {
      const expectedCode = "404";
      const expectedTitle = "Page not found";
      const expectedText = "Oops! The page you are looking for does not exist.";
      const expectedLinkText = "Go Back";

      renderWithProviders(<NotFoundPage />);

      const resultCode = screen.queryByText(expectedCode) as HTMLSpanElement;
      const resultTitle = screen.queryByRole("heading", {
        level: 2,
        name: expectedTitle,
      }) as HTMLHeadingElement;
      const resultText = screen.queryByText(expectedText) as HTMLSpanElement;
      const resultLink = screen.queryByRole("link") as HTMLAnchorElement;

      expect(resultCode).toBeInTheDocument();
      expect(resultTitle).toBeInTheDocument();
      expect(resultText).toBeInTheDocument();
      expect(resultLink).toBeInTheDocument();
      expect(resultCode.textContent).toEqual(expectedCode);
      expect(resultTitle.textContent).toEqual(expectedTitle);
      expect(resultText.textContent).toEqual(expectedText);
      expect(resultLink.textContent).toEqual(expectedLinkText);
    });
  });
});
