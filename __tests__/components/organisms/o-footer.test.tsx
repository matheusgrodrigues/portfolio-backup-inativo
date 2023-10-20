import renderer from "react-test-renderer";

// Theme
import { ThemeProvider } from "@/src/theme/helpers/theme-provider";
import { themeLight } from "@/src/theme";

// Organism
import { OFooter } from "@/src/components/organisms/o-footer";

// Test utils
import { AppRouterContextProviderMock } from "@/src/test-utils/provider/app-router-provider";

// Mock
import { oFooterMock } from "../../../__mocks__/components/organism/o-footer-mock";

describe("Deve renderizar o OFooter corretamente", () => {
  const push = jest.fn();

  it("Deve preservar o visual do OHeader", () => {
    const three = renderer
      .create(
        <AppRouterContextProviderMock router={{ push }}>
          <ThemeProvider theme={themeLight}>
            <OFooter {...oFooterMock} />
          </ThemeProvider>
        </AppRouterContextProviderMock>
      )
      .toJSON();

    expect(three).toMatchSnapshot();
  });
});
