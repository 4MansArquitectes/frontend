import renderWithProviders from "../../mocks/renderWithProviders";
import App from "./App";

describe("Given the App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show on the screen component Layout", () => {
      renderWithProviders(<App />);
    });

    test("Then it should show on the screen route '/404' notFound", () => {
      renderWithProviders(<App />, {
        initialEntries: ["/404"],
      });
    });
  });
});
