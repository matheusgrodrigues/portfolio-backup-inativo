import renderer from "react-test-renderer";

// Theme
import { themeLight } from "@/src/theme";
import { ThemeProvider } from "@/src/theme/helpers/theme-provider";

// Atoms
import { AText } from "@/src/components/atoms/a-text";

describe("Deve renderizar o AText corretamente", () => {
  it("Deve preservar a estrutura visual do componente", () => {
    const three = renderer
      .create(
        <ThemeProvider theme={themeLight}>
          <AText />
        </ThemeProvider>
      )
      .toJSON();

    expect(three).toMatchSnapshot();
  });
});
