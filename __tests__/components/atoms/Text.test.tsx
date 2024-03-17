import renderer from "react-test-renderer";

import { themeLight } from "@/src/core/theme";
import { ThemeProvider } from "@/src/core/theme/helpers/theme-provider";

import { Text } from "@/src/components/Atoms/Text";

describe("Deve renderizar o AText corretamente", () => {
   it("Deve preservar a estrutura visual do componente", () => {
      const three = renderer
         .create(
            <ThemeProvider theme={themeLight}>
               <Text $variant="lg" fontWeight="semibold" color="gradient">
                  A-Text
               </Text>
            </ThemeProvider>
         )
         .toJSON();

      expect(three).toMatchSnapshot();
   });
});
