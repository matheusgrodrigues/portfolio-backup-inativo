import renderer from "react-test-renderer";

// Template
import { TBriefDescription } from "@/src/components/templates/t-briefing-description";

// Theme
import { ThemeProvider } from "@/src/theme/helpers/theme-provider";
import { themeLight } from "@/src/theme";

describe("Deve renderizar o TBriefDescription, corretamente", () => {
  it("Deve preservar a estrutura visual do TBriefDescription", () => {
    const three = renderer
      .create(
        <ThemeProvider theme={themeLight}>
          <TBriefDescription />
        </ThemeProvider>
      )
      .toJSON();

    expect(three).toMatchSnapshot();
  });
});
