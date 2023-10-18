import renderer from "react-test-renderer";

// Atoms
import { ADisplay } from "@/src/components/atoms/a-display";

describe("Deve renderizar o ADisplay corretamente", () => {
  it("Deve preservar a estrutura visual do ADisplay", () => {
    const three = renderer
      .create(
        <ADisplay variant="lg" fontWeight="semibold" color="gradient">
          ADisplay
        </ADisplay>
      )
      .toJSON();

    expect(three).toMatchSnapshot();
  });
});
