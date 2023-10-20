import renderer from "react-test-renderer";

// Theme
import { ThemeProvider } from "@/src/theme/helpers/theme-provider";
import { themeLight } from "@/src/theme";

// Pages
import { PBriefDescription } from "@/src/components/pages/p-briefing-description/p-brief-description";

describe("Deve renderizar o PBriefDescription corretamente", () => {
  it("Deve preservar a estrutura do componente", () => {
    const three = renderer
      .create(
        <ThemeProvider theme={themeLight}>
          <PBriefDescription />
        </ThemeProvider>
      )
      .toJSON();

    expect(three).toMatchSnapshot();
  });
});
