import renderer from "react-test-renderer";

// Atoms
import { AIcon } from "@/src/components/atoms/a-icon/a-icon";

describe("Deve renderizar os icons corretamente", () => {
  it("Deve preservar a estrutura visual do icone", () => {
    const three = renderer.create(<AIcon icon="sun" />);
  });
});
