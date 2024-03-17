import renderer from "react-test-renderer";

import { ThemeProvider } from "@/src/config/theme/helpers/theme-provider";
import { themeLight } from "@/src/config/theme";

import { Footer } from "@/src/components/Organisms/Footer";

import { AppRouterContextProviderMock } from "@/src/core/utils/test-utils/app-router-provider";

describe("Deve renderizar o OFooter corretamente", () => {
  const push = jest.fn();

  it("Deve preservar o visual do OHeader", () => {
    const three = renderer
      .create(
        <AppRouterContextProviderMock router={{ push }}>
          <ThemeProvider theme={themeLight}>
            <Footer
              linkedinUrl="https://www.linkedin.com/in/matheusgomes/"
              githubUrl="https://github.com/matheusgrodrigues"
              siteUrl="https://matheusgomesdev.com.br"
            />
          </ThemeProvider>
        </AppRouterContextProviderMock>,
      )
      .toJSON();

    expect(three).toMatchSnapshot();
  });
});
