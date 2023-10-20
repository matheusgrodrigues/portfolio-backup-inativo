import renderer from "react-test-renderer";

// Theme
import { ThemeProvider } from "@/src/theme/helpers/theme-provider";
import { themeLight } from "@/src/theme";

// Pages
import { PBriefDescription } from "@/src/components/pages/p-briefing-description/p-brief-description";

// Mocks
import { oHeaderAvatarMock } from "@/__mocks__/components/organism/o-header-mock";
import { tBriefDescriptionMock } from "@/__mocks__/components/templates/t-brief-description-mock";
import { oFooterMock } from "@/__mocks__/components/organism/o-footer-mock";

// Test Utils
import { AppRouterContextProviderMock } from "@/src/test-utils/provider/app-router-provider";

describe("Deve renderizar o PBriefDescription corretamente", () => {
  const push = jest.fn();
  const handleToggleTheme = jest.fn();
  const handleDownloadCV = jest.fn();
  const handleSubmitContactForm = jest.fn();

  it("Deve preservar a estrutura do componente", () => {
    const three = renderer
      .create(
        <AppRouterContextProviderMock router={{ push }}>
          <ThemeProvider theme={themeLight}>
            <PBriefDescription
              oHeaderProps={{ avatar: oHeaderAvatarMock, handleToggleTheme }}
              tBriefDescriptionProps={{
                ...tBriefDescriptionMock,
                handleDownloadCV,
                handleSubmitContactForm,
              }}
              oFooterProps={oFooterMock}
            />
          </ThemeProvider>
        </AppRouterContextProviderMock>
      )
      .toJSON();

    expect(three).toMatchSnapshot();
  });
});
