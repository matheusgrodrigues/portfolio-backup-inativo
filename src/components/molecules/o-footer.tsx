import styled from "styled-components";

// Atoms
import { AIcon } from "../atoms/a-icon";

export const OFooterStyled = styled.footer``;

export const OFooter = () => {
  return (
    <OFooterStyled>
      <p>© 2023 matheusgomesdev.</p>

      <div>
        <AIcon icon="github-square" width={32} height={32} />
        <AIcon icon="linkedin-rounded" width={32} height={32} />
      </div>
    </OFooterStyled>
  );
};
