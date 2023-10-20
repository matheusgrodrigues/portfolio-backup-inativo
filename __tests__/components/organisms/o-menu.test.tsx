import renderer from "react-test-renderer";

// Organism
import { OHeader } from "@/src/components/organisms/o-header";

// Theme
import { ThemeProvider } from "@/src/theme/helpers/theme-provider";
import { themeLight } from "@/src/theme";

// Mock
import { o_header_avatar_mock } from "@/__mocks__/components/organism/o-header-mock";

describe("Deve renderizar o OHeader corretamente", () => {
  it("Deve preservar a estrutura visual do OHeader", () => {
    const toggleTheme = jest.fn();

    const three = renderer
      .create(
        <ThemeProvider theme={themeLight}>
          <OHeader avatar={o_header_avatar_mock} toggleTheme={toggleTheme} />
        </ThemeProvider>
      )
      .toJSON();

    expect(three).toMatchSnapshot();
  });
});
