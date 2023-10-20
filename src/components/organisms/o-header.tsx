import styled from "styled-components";

// Atoms
import { AAvatar } from "../atoms";
import { AIcon } from "../atoms/a-icon";
import { bpHelper } from "@/src/theme";

const OHeaderStyled = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${(props) => props.theme.ref.spacing.sp16};

  ${(props) =>
    bpHelper(
      props.theme.ref.bp.bp_sm,
      `
    height: 82px;
  `
    )}
`;

export interface IOHeader {
  avatar: {
    src: string;
    alt: string;
  };
  handleToggleTheme: () => void;
}

export const OHeader = ({ avatar, handleToggleTheme }: IOHeader) => {
  return (
    <OHeaderStyled>
      <AAvatar src={avatar.src} alt={avatar.alt} />
      <AIcon icon="sun" height={32} onClick={handleToggleTheme} />
    </OHeaderStyled>
  );
};
