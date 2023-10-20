import renderer from "react-test-renderer";

// Atoms
import { AButton } from "@/src/components/atoms/a-button";

// Theme
import { ThemeProvider } from "@/src/theme/helpers/theme-provider";
import { themeLight } from "@/src/theme";

describe("Deve renderizar o AButton corretamente", () => {
  it("Deve preservar a estrutura visual do componente", () => {
    const three = renderer
      .create(
        <ThemeProvider theme={themeLight}>
          <AButton
            $variant="lg"
            $background="color_gradient_primary600"
            $fontSize="fs_textMd"
            $fontWeight="fw_semibold"
            $color="color_gray500"
          >
            AButton
          </AButton>
        </ThemeProvider>
      )
      .toJSON();

    expect(three).toMatchSnapshot();
  });
});
