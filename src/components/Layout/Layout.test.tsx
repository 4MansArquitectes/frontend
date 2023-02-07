import renderWithProviders from "../../mocks/renderWithProviders";
import Layout from "./Layout";

describe("Given the Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show on the screen {}", () => {
      renderWithProviders(<Layout>""</Layout>);
    });
  });
});
