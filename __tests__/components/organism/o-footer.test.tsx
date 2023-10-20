import renderer from "react-test-renderer";

// Theme
import { ThemeProvider } from "@/src/theme/helpers/theme-provider";
import { themeLight } from "@/src/theme";

// Organism
import { OFooter } from "@/src/components/molecules/o-footer";

describe("Deve renderizar o OFooter corretamente", () => {
  it("Deve preservar o visual do OHeader", () => {
    const three = renderer
      .create(
        <ThemeProvider theme={themeLight}>
          <OFooter />
        </ThemeProvider>
      )
      .toJSON();

    expect(three).toMatchSnapshot();
  });
});
